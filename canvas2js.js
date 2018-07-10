var snkposition = [{x:2,y:2}]
var frtposition = [{x:10,y:10}]
var frtsize = 15;
var snksize = 15;
var WIDTH = 300;
var HEIGHT = 300;
var ctx;

function initialize() {
	ctx = document.getElementById('container').getContext("2d");
	var aux = Math.floor(Math.random()*(WIDTH))+1;
	snkposition.push({x:aux,y:aux});
	snkposition.push({x:aux,y:aux});
	updateFruit();
}

function updateFruit() {
	var x = Math.random()*300;
	var y = Math.random()*300;
	draw(x,y,"#FF0000");
	//updateSnake();
}

function draw(x,y,color = "#FF0000") {
	ctx.beginPath();
	ctx.fillRect(x,y,10,10);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = initialize;