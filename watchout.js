// start slingin' some d3 here.
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");

var width = 960,
    height = 500;
