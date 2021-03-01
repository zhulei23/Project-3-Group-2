# import necessary libraries
#from models import create_classes
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

#################################################
# Database Setup
#################################################

from flask import Flask, render_template
app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def map():
    return render_template("Map.html")

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")

@app.route("accession")
def accession():
    return render_template("Accession-comparison.html")

if __name__ == "__main__":
    app.run(debug=True)