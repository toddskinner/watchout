// start slingin' some d3 here.



var width = 960,
    height = 500,
    border = "solid",
    bgcolor = "black",
    n = 50;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", border)
    .style("background-color", bgcolor);

var createEnemy = function(){
  for (var i = 0; i < n; i++) {
    var enemy = d3.select("svg").append("image")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", Math.floor(Math.random()*width))
    .attr("y", Math.floor(Math.random()*height))
    .attr("xlink:href", "asteroid.png");
  }
};

var moveEnemy = function() {
  var coordinateData = [];
  for (var i = 0; i < n; i++) {
    coordinateData.push({
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height)
    });
  }
  d3.selectAll("image")
    .data(coordinateData)
    .transition().duration(1000)
    .attr("x", function(d){
      return d.x;
    })
    .attr("y", function(d){
      return d.y;
    });
};

createEnemy();
setInterval(moveEnemy, 1000);
