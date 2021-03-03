# import necessary libraries

import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

from flask import Flask, render_template

app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/Dashboard_Visualizations")
def Dashboard_Visualizations():
    return render_template("Accession-comparison.html")

@app.route("/D3_Chord")
def D3_Chord():
    return render_template("MET_div_chord.html")

@app.route("/Map")
def Map():
    return render_template("Map.html")

@app.route("/Chinese_Art")
def Chinese_Art():
    return render_template("chinese_art.html")

@app.route("/Machine_Learning")
def Machine_Learning():
    return render_template("machine_learning.html")


@app.route("/About_Us")
def About_Us():
    return render_template("about_us.html")

if __name__ == "__main__":
    app.run(debug=True)
