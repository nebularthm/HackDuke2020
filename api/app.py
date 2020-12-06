import time
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
from scraper import Scraper
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Initialize Firestore DB
# cred = credentials.Certificate('scrapekey.json')
# default_app = initialize_app(cred)
# db = firestore.client()
# politician_ref = db.collection('polis')
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route("/result")
def get_politicians():
    #add scraper here  
    all_politicians = [doc.to_dict() for doc in politician_ref.stream()]
        return jsonify(all_politicians), 200
