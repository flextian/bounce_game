var canvas = document.getElementById("cancon");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;
var yy = 0;
var dx = 5;
var dy = 3;
var rad = 10;
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeY = e.clientY
        y = relativeY

if (y > canvas.height - rad) {
    y = canvas.height - rad;
}

if (y < 0 + rad) {
    y = rad;
}}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

var score = 0;

function scorecounter() {
    ctx.font = "30px Arial";
    ctx.strokeText("Score: "+ score,10,50);
}

function enemyrectangle() {
    var rectx = canvas.width/2 - 50
    ctx.beginPath();
    ctx.rect(rectx,yy,100,100);
    ctx.fill();
    ctx.stroke();
    if (y < yy + 100 && y > yy && x > rectx && x < rectx + 100) {
        score = 0;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scorecounter();
    drawBall();
    enemyrectangle();
    x += dx;
    yy += dy;

    if (yy >= canvas.height - 100){
        dy = -dy;
    }

    if (yy < 0){
        dy = -dy;   
    }

    if (x + rad > canvas.width) {
        dx = -dx;
        score++;
    }
    
    if (x - rad < 0) {
        dx = -dx;
        score++;
    }
}

setInterval(draw, 5);