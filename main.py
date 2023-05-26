import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
from flask import Flask, render_template, redirect, url_for, request, session
from flask_sqlalchemy import SQLAlchemy
import secrets

load_dotenv()

app = Flask(__name__, template_folder='templates')
app.secret_key = secrets.token_hex(16)  # Assign a secret key

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:thanhtung99@localhost/mydb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure SpotifyOAuth
spotify_oauth = SpotifyOAuth(
    client_id=os.getenv("CLIENT_ID"),
    client_secret=os.getenv("CLIENT_SECRET"),
    redirect_uri="http://localhost:8000/callback",
    scope="user-library-read user-top-read playlist-modify-private",
    cache_path=".spotifycache",
    show_dialog=True
)

# User model for database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spotify_id = db.Column(db.String(255), unique=True)
    access_token = db.Column(db.String(255))
    refresh_token = db.Column(db.String(255))
    top_tracks = db.relationship('TopTrack', backref='user', lazy=True)

# TopTrack model for database
class TopTrack(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(255))
    artists = db.Column(db.String(255))
    popularity = db.Column(db.Integer)
    image_url = db.Column(db.String(255))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    # Generate the authorization URL and redirect the user to the Spotify login page
    auth_url = spotify_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route("/callback")
def callback():
    # Process the callback from Spotify OAuth flow
    code = request.args.get("code")
    token_info = spotify_oauth.get_access_token(code)

    # Check if the user is already authenticated
    user = User.query.filter_by(spotify_id=token_info.get('id')).first()
    if user is None:
        # Create a new user and store the access token and refresh token
        user = User(spotify_id=token_info.get('id'), access_token=token_info.get('access_token'),
                    refresh_token=token_info.get('refresh_token'))
        db.session.add(user)
        db.session.commit()

    # Store the access token in the session
    session['user_id'] = user.id

    return redirect(url_for("insights"))

@app.route("/insights")
def insights():
    # Check if the user is authenticated
    if 'user_id' not in session:
        return redirect(url_for("login"))

    # Clear the previous insights data for the user
    TopTrack.query.filter_by(user_id=session['user_id']).delete()
    db.session.commit()

    # Fetch the user's access token
    user = User.query.get(session['user_id'])
    access_token = user.access_token

    # Initialize the Spotify instance with the user's access token
    sp = spotipy.Spotify(auth=access_token)

    try:
        # Fetch the user's most listened to tracks
        top_tracks = sp.current_user_top_tracks(limit=5, time_range="long_term")['items']

        # Store the new insights data in the database
        for track in top_tracks:
          artists = [artist['name'] for artist in track['artists']]
          popularity = track['popularity']
          image_url = track['album']['images'][0]['url']
          top_track = TopTrack(user_id=user.id, name=track['name'], artists=', '.join(artists),
                               popularity=popularity, image_url=image_url)
          db.session.add(top_track)
        db.session.commit()

        # Fetch the top tracks data from the database for the user
        top_tracks_data = TopTrack.query.filter_by(user_id=user.id).all()

    except spotipy.SpotifyException as e:
      return str(e), 500

    return render_template("insights.html", top_tracks=top_tracks_data)


# Create the database tables
with app.app_context():
  db.create_all()

if __name__ == "__main__":
  port = int(os.environ.get("PORT", 5000))
  app.run(debug=True, host="0.0.0.0", port=8000)


