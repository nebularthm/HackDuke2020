import time
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app


app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
politician_ref = db.collection('polis')
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route("/results")
def get_politicians():
    #add scraper here 
    all_politicians = [doc.to_dict() for doc in politician_ref.stream()]
        return jsonify(all_politicians), 200
