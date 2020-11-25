/*
Create a scatter plot using D3 techniques between two of the data variables Poverty (x axis) vs. Healthcare (y axis)
The scatter plot must represent each state (and Washington DC) with circle elements. 
Data will be pulled from the data.csv file provided in the data folder.
Include state abbreviations in the circles.
Create and situate your axes and labels to the left and bottom of the chart.
Note: You'll need to the VS Code Live Server extension to run the visualization. This will host the page at localhost:5501 in your web browser.
*/

// Use Day 3 Activity 09 as an inital guide to meet the requirements as stated above
// Inital setup:

// Set up our chart
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data
d3.csv("assets/data/data.csv").then(function(ACSData) {
    console.log(ACSData);
});