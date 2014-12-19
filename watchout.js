// start slingin' some d3 here.



var width = 960,
    height = 500,
    border = "solid",
    bgcolor = "black";



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", border)
    .style("background-color", bgcolor);

var enemy = d3.select("svg").append("image")
  .attr("width", 50)
  .attr("height", 50)
  .attr("x", 480)
  .attr("y", 250)
  .attr("xlink:href", "asteroid.png");
