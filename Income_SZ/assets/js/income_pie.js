// set the dimensions and margins of the chart
var width = 750
    height = 750
    margin = 150

var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div 
var svg = d3.select("#income_pie")
  .append("svg")
    .attr("width", width * 2)
    .attr("height", height * 2)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// create data sets
var data1 = {US: 49183, Indian: 30775, UK: 36741, Canada: 38651, Brazil: 32100}
var data2 = {US: 0.448, Indian: 0.058, UK: 0.057, Canada: 0.04, Brazil: 0.024}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(["US", "Indian", "UK", "Canada", "Brazil"])
  .range(d3.schemeCategory10);


function update(data) {

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) {console.log(a) ; return d3.ascending(a.key, b.key);})
  var data_ready = pie(d3.entries(data))

  // map to data
  var pieChart = svg.selectAll("path")
    .data(data_ready)

  // Build the pie chart
 pieChart
    .enter()
    .append('path')
    .merge(pieChart)
    .transition()
    .duration(750)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)
  
  // Create legend for the pie chart
    var legendRectSize = 15;
    var legendSpacing = 16;
    var legend = svg.selectAll('.legend') 
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'circle-legend')
    .attr('transform', function (d, i) {
         var height = legendRectSize + legendSpacing;
         var offset = height * color.domain().length / 2;
         var horz = -2 * legendRectSize + 400;
         var vert = i * height - 3 * offset;
         return 'translate(' + horz + ',' + vert + ')';
    });
    legend.append('circle') 
    .style('fill', color)
    .style('stroke', color)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', '.5rem');
    legend.append('text') 
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function (d) {
         return d;
    })
    .attr("fill", "white")
   

  pieChart
    .exit()
    .remove()

}

update(data1)

