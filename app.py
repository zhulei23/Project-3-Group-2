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

from flask import Flask, render_template

app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/Visualizations")
def Visualizations():
    return render_template("Accession-comparison.html")

@app.route("/Map")
def Map():
    return render_template("Map.html")


@app.route("/About_Us")
def About_Us():
    return render_template("about_us.html")

if __name__ == "__main__":
    app.run(debug=True)
