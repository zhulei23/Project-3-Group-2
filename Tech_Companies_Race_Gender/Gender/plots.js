
//Gender Pie Chart
// Create an array of each country's numbers
var AirBnB = Object.values(data.AirBnB);
var Amazon = Object.values(data.Amazon);
var Apple = Object.values(data.Apple);
var Cisco = Object.values(data.Cisco);
var Dell = Object.values(data.Dell);
var Etsy = Object.values(data.Etsy);
var Facebook = Object.values(data.Facebook);
var Flickr = Object.values(data.Flickr);
var Google = Object.values(data.Google);
var Google_plus = Object.values(data.Google_plus);
var Groupon = Object.values(data.Groupon);
var HP = Object.values(data.HP);
var Instagram = Object.values(data.Instagram);
var Intel = Object.values(data.Intel);
var LinkedIn = Object.values(data.LinkedIn);
var Microsoft = Object.values(data.Microsoft);
var Netflix = Object.values(data.Netflix);
var Salesforce = Object.values(data.Salesforce);
var Twitter = Object.values(data.Twitter);
var Uber = Object.values(data.Uber);
var eBay = Object.values(data.eBay);
var YouTube = Object.values(data.YouTube);
var Yelp = Object.values(data.Yelp);
var Yahoo = Object.values(data.Yahoo);
var Slack = Object.values(data.Slack);
var Pinterest = Object.values(data.Pinterest);
var Indiegogo = Object.values(data.Indiegogo);
var Nvidia = Object.values(data.Nvidia);
var Pandora = Object.values(data.Pandora);
var Tumblr = Object.values(data.Tumblr);

// Create an array of company labels
var labels = Object.keys(data.AirBnB);

var ultimateColors = [
  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
  ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
  ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
  ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
];

// Display the default plot
function init() {
  var data = [{
    values: AirBnB,
    labels: labels,
    domain: {column: 0},
    name: 'Gender Diversity',
    marker: {
      colors: ultimateColors[0]
    },
    hoverinfo: 'label+percent',
    hole:.5,
    showlegend: false,
    type: "pie"
   
  }];

  var layout = {
    title: 'Gender Diversity',
    height: 400,
    width: 600
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'AirBnB') {
      data = AirBnB;
  }
  else if (dataset == 'Amazon') {
      data = Amazon;
  }
  else if (dataset == 'Apple') {
      data = Apple;
  }
  else if (dataset == 'Cisco') {
    data = Cisco;
  }
  else if (dataset == 'Dell') {
    data = Dell;
  }
  else if (dataset == 'Etsy') {
    data = Etsy;
  }
  else if (dataset == 'Facebook') {
    data = Facebook;
  }
  else if (dataset == 'Flickr') {
    data = Flickr;
  }
  else if (dataset == 'Google') {
    data = Google;
  }
  else if (dataset == 'Google_plus') {
    data = Google_plus;
  }
  else if (dataset == 'Groupon') {
    data = Groupon;
  }
  else if (dataset == 'HP') {
    data = HP;
  }
  else if (dataset == 'Instagram') {
    data = Instagram;
  }
  else if (dataset == 'Intel') {
    data = Intel;
  }
  else if (dataset == 'LinkedIn') {
    data = LinkedIn;
  }
  else if (dataset == 'Microsoft') {
    data = Microsoft;
  }
  else if (dataset == 'Netflix') {
    data = Netflix;
  }
  else if (dataset == 'Salesforce') {
    data = Salesforce;
  }
  else if (dataset == 'Twitter') {
    data = Twitter;
  }
  else if (dataset == 'Uber') {
    data = Uber;
  }
  else if (dataset == 'eBay') {
    data = eBay;
  }
  else if (dataset == 'Youtube') {
    data = YouTube;
  }
  else if (dataset == 'Yelp') {
    data = Yelp;
  }
  else if (dataset == 'Yahoo') {
    data = Yahoo;
  }
  else if (dataset == 'Slack') {
    data = Slack;
  }
  else if (dataset == 'Pinterest') {
    data = Pinterest;
  }
  else if (dataset == 'Indiegogo') {
    data = Indiegogo;
  }
  else if (dataset == 'Nvidia') {
    data = Nvidia;
  }
  else if (dataset == 'Pandora') {
    data = Pandora;
  }
  else if (dataset == 'Tumblr') {
    data = Tumblr;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
