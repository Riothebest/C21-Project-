
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine;
var myWorld;

var ball;
var groundObj;
var rightWall;
var leftWall


function setup() {
	createCanvas(800, 500);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	var wall_options={
		isStatic: true,
	};

	groundObj = Bodies.rectangle(400,500,800,20,wall_options);
	rightWall = Bodies.rectangle(500,465,10,50,wall_options);
	leftWall = Bodies.rectangle(550,465,10,50,wall_options)
	/*groundObj = new ground(400,680,800,20);
	leftWall = new ground(500,650,10,50);
	rightWall = new ground(550,650,10,50);
	*/

	var ball_options={
		//isStatic: false,
		restitution: 0.3,
		frictionAir: 0.01,
		density: 1.2,
	};

	ball = Bodies.circle(100,100,10,ball_options);

	World.add(myWorld , ball);
	World.add(myWorld,groundObj);
	World.add(myWorld,rightWall);
	World.add(myWorld,leftWall);
	//Engine.run(myEngine);

	var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });
	  Render.run(render);
  
}


function draw() {
  
  background(51);
  Engine.update(myEngine);


  /*groundObj.diplay();
  leftWall.diplay();
  rightWall.diplay();
	*/
	fill("yellow")

	rectMode(CENTER);
	rect(groundObj.position.x,groundObj.position.y,800,20);
	rectMode(CENTER);
	rect(rightWall.position.x,rightWall.position.y,10,50)
	rectMode(CENTER);
	rect(leftWall.position.x,leftWall.position.y,10,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
}

function keyPreesed()
{
	if(keyCode === 32)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.06});
	}

	/*if(keyCode === 100)
	{
		Body.applyForce(ball, {x:0 , y:0}, {x:0.05, y: 0});
	}*/
}

