import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Measure= Base.classes.measurement
Station= Base.classes.station

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/<start><br/>"
        f"/api/v1.0/<start>/<end><br/>"
    )
@app.route("/api/v1.0/precipitation")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Ronvert the query results to a dictionary using `date` as the key and `prcp` as the value."""
    # Query all percipitation
    year_ago = dt.date(2017,8,23) - dt.timedelta(days=365)
    results = session.query(Measure.date, Measure.prcp).filter(Measure.date >= year_ago).all()
    session.close()
    all_list = []
    for date, prcp in results:
            percipitation_dict = {}
            percipitation_dict["date"] = date
            percipitation_dict["prcp"] = prcp
            all_list.append(percipitation_dict)

    return jsonify(all_list)


@app.route("/api/v1.0/stations")
def stations():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a JSON list of stations from the dataset."""
    # Query all passengers
    results = session.query(Station.station).all()

    session.close()

    all_stations = list(np.ravel(results))

    return jsonify(all_stations)

@app.route("/api/v1.0/tobs")
def temperature():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Query the dates and temperature observations of the most active station for the last year of data. Return a JSON list of temperature observations (TOBS) for the previous year."""
    year_ago = dt.date(2017,8,23) - dt.timedelta(days=365)
    temp_results=session.query(Measure.date, Measure.tobs).filter(Measure.date >= year_ago).\
        filter(Measure.station =='USC00519281').all()

    temp_list = []
    for date, tobs in temp_results:
            temp_dict = {}
            temp_dict["date"] = date
            temp_dict["temp"] = tobs
            temp_list.append(temp_dict)

    session.close()

    return jsonify(temp_list)

@app.route("/api/v1.0/<start>")
def start(start):
    # Cr=eate our session (link) from Python to the DB
    session = Session(engine)

    """ Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range."""
    # Query all passengers
    start_output=session.query(func.min(Measure.tobs), func.avg(Measure.tobs), func.max(Measure.tobs)).\
        filter(Measure.date >= start).all()

    session.close()

    return jsonify(start_output)

@app.route("/api/v1.0/<start>/<end>")
def start_end(start,end):
    # Cr=eate our session (link) from Python to the DB
    session = Session(engine)

    """ Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range."""
    # Query all passengers
    output=session.query(func.min(Measure.tobs), func.avg(Measure.tobs), func.max(Measure.tobs)).\
        filter(Measure.date >= start).filter(Measure.date <= end).all()

    session.close()

    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)