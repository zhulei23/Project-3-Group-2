function filterMovieRatings(race) {
  return race.asian > 30;
}

// 2. Use filter() to pass the function as its argument
var filteredRace = techData.filter(filterMovieRatings);

//  Check to make sure your are filtering your movies.
console.log(filteredRace);

// 3. Use the map method with the arrow function to return all the filtered movie titles.
var companies = filteredRace.map(races =>  races.company);

//  Check your filtered movie titles
console.log(companies);

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
var rankings = filteredRace.map(races => races.asian);

//  Check your filtered metascores.
console.log(rankings);

// 5. Create your trace.
var trace = {
  x: companies,
  y: rankings,
  type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "Filtered Asian Rate Above 30% in Tech Companies",
  xaxis: { title: "Company Names" },
  yaxis: { title: "Asian Rate%"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
