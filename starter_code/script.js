
window.onload = function() {

  var newBg = new CreateBg();
  var newFaby = new CreateFaby();

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var canvasSize = {w: canvas.width, h: canvas.height};
    window.gravity = 0.1;

    newBg.draw(ctx);
    newFaby.draw(ctx);

  }
};
