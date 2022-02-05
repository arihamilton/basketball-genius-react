import pandas as pd
from flask import Flask, render_template, url_for, flash, redirect, request, jsonify
from bbrefscrapertools import get_team_roster, get_player_picture
import json

app = Flask(__name__)


@app.route('/')
def start_page():  # put application's code here
    return render_template('start.html')


@app.route('/teams')
def team_page():  # put application's code here
    return render_template('teams.html')


# API Things

@app.route('/geteasternteams')
def get_eastern_teams():
    # Opening JSON file
    jsdata = open('static/eastern_teams.json',)

    # returns JSON object as dict
    data = json.load(jsdata)
    return jsonify(data)


@app.route('/get_roster')
def get_roster():

    print("hello")
    team = request.args.get('team')
    data = get_team_roster(team, 2021)

    data_dict = data.to_dict()

    print(data_dict)
    return render_template('rosterlist.html', roster=data_dict)

@app.route('/players')
def player_page(team):
    return render_template('rosterlist.html', roster=team)

@app.route('/get_headshot')
def get_headshot():

    print("hello")
    player = request.args.get('player')
    data = get_player_picture(player)

    return data

if __name__ == '__main__':
    app.run()
