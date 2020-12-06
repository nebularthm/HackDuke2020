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
def serName(name):
    return {"name1": name[0], "name2": name[1]}
@app.route("/result/<state>/<position>",methods = ['GET'])
def get_politicians(state,position):
    s = Scraper(state,position)
    all_politicians = s.scrape()
    return jsonify([*map(serName,all_politicians)]), 200

def setContributions(contribution):
    return {"amount":contribution[0], "name":contribution[1], "type": contribution[2]}
@app.route("/contributions/<state>/<position>/<candidateName>", methods = ['GET'])
def get_contributions(state,position,candidateName):
    s = Scraper(state,position)
    all_contributions = s.contributions(candidate= candidateName)
    all_contributions.pop(0)
    return jsonify([*map(setContributions,all_contributions)]), 200