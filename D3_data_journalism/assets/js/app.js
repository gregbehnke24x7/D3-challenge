//************************************************************************
// initial display settings
//************************************************************************
var svgWidth = 1000;
var svgHeight = 600;

var margin = {
    top: 20,
    right: 40,
    bottom: 100,
    left: 140,
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//************************************************************************
// create svg element
//************************************************************************
var svg = d3.select("#scatter") 
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

//************************************************************************
// add chart to svg element  
//************************************************************************
var chart = svg.append("g") 
  .attr("height", height)
  .attr("width", width)
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//************************************************************************
// set initial active attributes
//************************************************************************
var xattr = "poverty";
var yattr = "obesity";

//************************************************************************
// create axis functions
//************************************************************************
var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);

//************************************************************************
// append axes to chart
//************************************************************************
var xAxis = chart.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);
  
    chart.append("g")
    .call(leftAxis); 

//************************************************************************
// create group for axis labels
//************************************************************************
var labelsGroup = chart.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

var povertyLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("value", "poverty")
    .classed("active", true)
    .text("In Poverty %");

var incomeLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 30)
    .attr("value", "income")
    .classed("inactive", true)
    .text("Household Income (Median)");

var ageLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 45)
    .attr("value", "age") 
    .classed("inactive", true)
    .text("Age (Median)");  
 
var obesityLabel = labelsGroup.append("text")
    .attr("transform","rotate(-90)")
    .attr("x", (margin.left) * 2.5)
    .attr("y", 0 - (height -60))
    .attr("value", "obesity") 
    .classed("active", true)
    .text("Obesity (%)");

var smokesLabel = labelsGroup.append("text")
    .attr("transform","rotate(-90)")
    .attr("x", (margin.left) * 2.5)
    .attr("y", 0 - (height -40))
    .attr("value", "smokes") 
    .classed("inactive", true)
    .text("Smokes (%)");

var healthcareLabel = labelsGroup.append("text")
    .attr("transform","rotate(-90)")
    .attr("x", (margin.left) * 2.5)
    .attr("y", 0 - (height -20))
    .attr("value", "healthcare") 
    .classed("inactive", true)
    .text("Lacks Healthcare (%)"); 
    
//************************************************************************
// read data
//************************************************************************
d3.csv("assets/data/data.csv").then(function (data) {
  // cast values appropriately
  data.forEach(d => {
      d.poverty    = +d.poverty;
      d.healthcare = +d.healthcare;
      d.age        = +d.age;
      d.income     = +d.income;
      d.obese      = +d.obese;
      d.smokes     = +d.smokes;
      });
)}