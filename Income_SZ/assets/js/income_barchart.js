// Set the dimensions and margins 
var margin = {top: 30, right: 30, bottom: 120, left: 60},
    width = 1800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Append the svg object
var svg = d3.select("#income_barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("assets/data/income_data_barchart.csv", function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.CountryLive; }))
  .padding(0.2);
 
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .attr("fill", "white");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 190000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y))
  .selectAll("text")
    .attr("fill", "white");

// Create Barchart
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.CountryLive); })
    .attr("y", function(d) { return y(d.avg); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.avg); })
    .attr("fill", "#00FFFF")

})
