import os
import random
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
from flask import Flask, render_template, request

load_dotenv()

app = Flask(__name__, template_folder='templates')

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
redirect_uri = "http://localhost:8000/callback"  # Set the redirect URI for authorization

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


def generate_quiz_questions(liked_songs):
  quiz_questions = []
  for index, song in enumerate(liked_songs):
    question_id = f"question{index}"
    options = [song['name']]
    while len(options) < 4:
      random_song = random.choice(liked_songs)
      if random_song['name'] not in options:
        options.append(random_song['name'])
    random.shuffle(options)
    quiz_questions.append(
      {'question_id': question_id, 'question': song['artists'][0]['name'], 'options': options,
       'answer': song['name']})

  return quiz_questions


@app.route("/quiz", methods=["GET", "POST"])
def quiz():
  if request.method == "POST":
    sp = spotipy.Spotify(auth_manager=auth_manager)
    try:
      results = sp.current_user_saved_tracks(limit=10)
      liked_songs = [item['track'] for item in results['items']]
      questions = generate_quiz_questions(liked_songs)  # Call a function to generate quiz questions

      score = 0
      for question in questions:
        user_answer = request.form.get(question['question_id'])  # Get the selected answer for the question
        if user_answer == question['answer']:
          score += 1

      return f"Quiz completed! Your final score is: {score}/{len(questions)}"
    except spotipy.SpotifyException as e:
      return str(e), 500  # Return the error message as plain text response with status code 500

  # For GET requests, render the initial quiz start page
  sp = spotipy.Spotify(auth_manager=auth_manager)
  try:
    results = sp.current_user_saved_tracks(limit=10)
    liked_songs = [item['track'] for item in results['items']]
    questions = generate_quiz_questions(liked_songs)  # Call a function to generate quiz questions

    return render_template("quiz.html", questions=questions)
  except spotipy.SpotifyException as e:
    return str(e), 500  # Return the error message as plain text response with status code 500


@app.route("/recommend")
def recommend():
  sp = spotipy.Spotify(auth_manager=auth_manager)

  try:
    results = sp.current_user_top_artists(limit=10, time_range="medium_term")
    top_artists = results['items']
    seed_artists = ','.join(artist['id'] for artist in top_artists)
    recommended_tracks = sp.recommendations(seed_artists=[seed_artists], limit=10)['tracks']
    return render_template("recommend.html", tracks=recommended_tracks)
  except spotipy.SpotifyException as e:
    return str(e), 500  # Return the error message as plain text response with status code 500



@app.route("/insights")
def insights():
    sp = spotipy.Spotify(auth_manager=auth_manager)

    try:
        # Fetch the user's top tracks
        top_tracks = sp.current_user_top_tracks(limit=5, time_range="medium_term")['items']
        top_tracks_data = []

        for track in top_tracks:
            artists = [artist['name'] for artist in track['artists']]
            popularity = track['popularity']  # Get the popularity score of the track
            image_url = track['album']['images'][0]['url']  # Get the URL of the first image in the album
            top_tracks_data.append({'name': track['name'], 'artists': artists, 'popularity': popularity,
                                    'image_url': image_url})

        # Fetch the user's top artists
        top_artists = sp.current_user_top_artists(limit=5, time_range="medium_term")['items']
        top_artists_data = [artist['name'] for artist in top_artists]

        # Fetch
        return render_template("insights.html", top_tracks=top_tracks_data, top_artists=top_artists_data)

    except spotipy.SpotifyException as e:
        return str(e), 500  # Return the error message as plain text response with status code 500


if __name__ == "__main__":
  app.run(debug=False,host="0.0.0.0")


