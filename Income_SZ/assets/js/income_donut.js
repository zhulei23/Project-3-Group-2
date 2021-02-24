// set the dimensions and margins
var width = 700
    height = 700
    margin = 100

// Set up radius 
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div 
var svg = d3.select("#income_donut")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Import data
var data = {US: 49183, Indian: 30775, UK: 36741, Canada: 38651, Brazil: 32100, Germany: 41423, Australia: 49201, Russia: 23746, Poland: 20559, Spain: 28424}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(["US", "Indian", "UK", "Canada", "Brazil", "Germany", "Australia", "Russia", "Poland", "Spain"])
  .range(d3.schemeDark2);

// Set up position
var pie = d3.pie() 
  .sort(null) 
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Set up arc size
var arc = d3.arc()
  .innerRadius(radius * 0.5)        
  .outerRadius(radius * 0.8)

var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// Create the pie chart
svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.8)

// Add the polylines
svg
  .selectAll('allPolylines')
  .data(data_ready)
  .enter()
  .append('polyline')
    .attr("stroke", "white")
    .style("fill", "none")
    .attr("stroke-width", 1.5)
    .attr('points', function(d) {
      var posA = arc.centroid(d) 
      var posB = outerArc.centroid(d) 
      var posC = outerArc.centroid(d); 
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); 
      return [posA, posB, posC]
    })

// Add the polylines & labels
svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
    .text( function(d) { console.log(d.data.key) ; return d.data.key } )
    .attr("fill", "white")
    .attr('transform', function(d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    })
