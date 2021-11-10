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