// Set up the canvas for holding the scatter chart
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 50,
  right: 100,
  bottom: 60,
  left: 80
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// // Create a SVG wrapper, append an SVG group that will hold the chart, shirt the latter by left and top margins
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("alignment-baseline", "middle")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append the SVG Group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Retrieve data from the CSV file and execute all data below
d3.csv("assets/data/income_data_final.csv").then(function(incomeData) {
  incomeData.forEach(function(data) {
    data.Age = +data.Age;
    data.Income = +data.Income;
  });

  // Create x scale function
  var xScale = d3.scaleLinear()
    .domain([18, d3.max(incomeData, d => d.Age)])
    .range([0, width]);

  // Create y scale
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(incomeData, d => d.Income)])
    .range([height, 0])

  // Create axis functions
  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);


// Append Axes to the chart
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);
  chartGroup.append("g")
    .call(yAxis);

// Create Circles
chartGroup.selectAll("circle")
.data(incomeData)
.enter()
.append("circle")
.attr("cx", d => xScale(d.Age))
.attr("cy", d => yScale(d.Income))
.attr("r", "5")
.classed("circle", true)
.attr("fill", "#00FFFF")
.attr("opacity", 1);
 
  // Append country label onto Circles
  chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top - 10})`)
        .attr("fill", "#00FFFF")
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Age");

        chartGroup.append("text")
        .attr("y", 0 - ((margin.left/1.1) + 10))
        .attr("x", 0 - (height / 2))
        .attr("fill", "#00FFFF")
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .text("Income");
}).catch(function(error) {
  console.log(error);
});