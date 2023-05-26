import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
from flask import Flask, render_template, session, redirect, url_for, request
import secrets

load_dotenv()

app = Flask(__name__, template_folder='templates')
app.secret_key = secrets.token_hex(16)  # Assign a secret key

# Load environment variables
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
redirect_uri = "https://metify2.herokuapp.com/callback"  # Update with your Heroku app's domain

# Configure the SpotifyOAuth object
auth_manager = SpotifyOAuth(
    client_id=client_id,
    client_secret=client_secret,
    redirect_uri=redirect_uri,
    scope="user-library-read user-top-read playlist-modify-private",
    cache_path=".spotifycache",
    show_dialog=True
)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login")
def login():
    # Generate the authorization URL and redirect the user to the Spotify login page
    auth_url = auth_manager.get_authorize_url()
    return redirect(auth_url)


@app.route("/callback")
def callback():
    # Process the callback from Spotify OAuth flow
    code = request.args.get("code")
    token_info = auth_manager.get_access_token(code)

    # Store the access token and refresh token securely in the session
    session['access_token'] = token_info['access_token']
    session['refresh_token'] = token_info['refresh_token']

    return redirect(url_for("insights"))


@app.route("/logout")
def logout():
    # Clear the session and revoke the user's access token
    session.clear()
    return redirect(url_for("index"))


@app.route("/insights")
def insights():
    # Check if the user is authenticated
    if 'access_token' not in session:
        return redirect(url_for("login"))

    # Initialize the Spotify instance with the user's access token
    sp = spotipy.Spotify(auth=session['access_token'])

    try:
        # Fetch the user's top tracks
        top_tracks = sp.current_user_top_tracks(limit=5, time_range="medium_term")['items']
        top_tracks_data = []

        for track in top_tracks:
            artists = [artist['name'] for artist in track['artists']]
            popularity = track['popularity']
            image_url = track['album']['images'][0]['url']
            top_tracks_data.append({'name': track['name'], 'artists': artists, 'popularity': popularity,
                                    'image_url': image_url})

    except spotipy.SpotifyException as e:
        return str(e), 500

    return render_template("insights.html", top_tracks=top_tracks_data)


if __name__ == "__main__":
  # Use the PORT environment variable provided by Heroku
  port = int(os.environ.get("PORT", 5000))
  app.run(debug=True, host="0.0.0.0", port=port)

