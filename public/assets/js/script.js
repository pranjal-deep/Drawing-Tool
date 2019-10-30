function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255,100,100);
    socket = io.connect('http://localhost:3000');
    socket.on('mouse',newDrawing);

    fill(255);
    textFont('Russo one');
    textAlign(CENTER);
    textSize(20);
    text("Click anywhere on screen", windowWidth/2, 50);
}

function newDrawing(data) {
    stroke(255);
    line(0,0,data.x,data.y);
    line(windowWidth,0,data.x,data.y);
    line(0,windowHeight,data.x,data.y);
    line(windowWidth,windowHeight,data.x,data.y);
}

function draw() {
}

function mouseClicked() {
    stroke(255);
    line(0,0,mouseX,mouseY);
    line(windowWidth,0,mouseX,mouseY);
    line(0,windowHeight,mouseX,mouseY);
    line(windowWidth,windowHeight,mouseX,mouseY);

    console.log("sending: " + mouseX +","+ mouseY);
    
    var data = {
        x: mouseX,
        y: mouseY
    }
    
    socket.emit('mouse',data);
}