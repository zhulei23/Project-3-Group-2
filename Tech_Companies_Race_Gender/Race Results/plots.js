// Trace1 for techData
var trace1 = {
    x: techData.map(row => row.company),
    y: techData.map(row => row.white),
    text: techData.map(row => row.company),
    name: "White",
    type: "bar"
  };
  
  // Trace 2 for techData
  var trace2 = {
    x: techData.map(row => row.company),
    y: techData.map(row => row.black),
    text: techData.map(row => row.company),
    name: "Black",
    type: "bar"
  };
  // Trace 3 for techData
  var trace3 = {
    x: techData.map(row => row.company),
    y: techData.map(row => row.asian),
    text: techData.map(row => row.company),
    name: "Asian",
    type: "bar"
  };

    // Trace 4 for techData
    var trace4 = {
        x: techData.map(row => row.company),
        y: techData.map(row => row.latino),
        text: techData.map(row => row.company),
        name: "Latino",
        type: "bar"
      };
    // Trace 5 for techData
    var trace5 = {
        x: techData.map(row => row.company),
        y: techData.map(row => row.multi),
        text: techData.map(row => row.company),
        name: "Multi",
        type: "bar"
      };    
  
  // Combining both traces
  var traceData = [trace1, trace2, trace3, trace4, trace5];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Races Results",
    barmode: "group"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);