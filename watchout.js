// start slingin' some d3 here.



var width = 960,
    height = 500,
    enemyWidth = 50,
    enemyHeight = 50,
    playerRadius = 20,
    border = "solid",
    bgcolor = "black",
    n = 100,
    coordinateData = [],
    playerCoordinates = {
      x: width / 2,
      y: height / 2
    };

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", border)
    .style("background-color", bgcolor);

var createEnemy = function(){
  for (var i = 0; i < n; i++) {
    var enemy = d3.select("svg").append("image")
    .attr("width", enemyWidth)
    .attr("height", enemyHeight)
    .attr("x", Math.floor(Math.random()*width))
    .attr("y", Math.floor(Math.random()*height))
    .attr("xlink:href", "asteroid.png");
  }
};

var createPlayer = function(){
  var drag = d3.behavior.drag()
             .on('dragstart', function() { player.style('fill', 'red'); })
             .on('drag', function() {
              playerCoordinates.x = d3.event.x;
              playerCoordinates.y = d3.event.y;
              player.attr('cx', d3.event.x)
              .attr('cy', d3.event.y);
            });

  var player = d3.select("svg").append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", playerRadius)
  .attr("fill", "red")
  .call(drag);

};

var moveEnemy = function() {
  for (var i = 0; i < n; i++) {
    coordinateData[i] = {
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height)
    };
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


var collision = function(){
  var domElements = d3.selectAll("image");
  for(var i = 0; i < n; i++){
    var radiusSum = enemyWidth/2 + playerRadius;
    var xDiff = playerCoordinates.x - parseFloat(domElements[0][i].attributes.x.nodeValue);
    var yDiff = playerCoordinates.y - parseFloat(domElements[0][i].attributes.y.nodeValue);
    var separation = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    if(separation < radiusSum){
      console.log("COLLISION!!");
    }
  }
};

createPlayer();
createEnemy();
setInterval(moveEnemy, 1000);
setInterval(collision, 100);
// setInterval(function(){
//   console.log(playerCoordinates);
// }, 10);
