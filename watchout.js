// start slingin' some d3 here.



var width = 960,
    height = 500,
    border = "solid",
    bgcolor = "black",
    n = 20;

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

var createPlayer = function(){
  var drag = d3.behavior.drag()
             .on('dragstart', function() { player.style('fill', 'red'); })
             .on('drag', function() { player.attr('cx', d3.event.x)
                                            .attr('cy', d3.event.y); });

  var player = d3.select("svg").append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 20)
  .attr("fill", "red")
  .call(drag);

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



createPlayer();
createEnemy();
setInterval(moveEnemy, 1000);
