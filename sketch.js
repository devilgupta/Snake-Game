const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snake, apple;
var score=0;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    snake=Bodies.rectangle(600,600,100,20);
    World.add(world,snake);
    apple=Bodies.rectangle(random(5,1195),random(5,1195),10,10);
    World.add(world,apple);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode("CENTER");
    fill("black");
    rect(snake.position.x,snake.position.y,snake.width,snake.height);

    rectMode("CENTER");
    fill("brown");
    rect(apple.position.x,apple.position.y,apple.width,apple.height);

    if(keyDown("RIGHT_ARROW")){
        snake.position.x=snake.position.x+3;
    }
    if(keyDown("LEFT_ARROW")){
        snake.position.x=snake.position.x-3;
    }
    if(keyDown("DOWN_ARROW")){
        snake.position.y=snake.position.y+3;
    }
    if(keyDown("UP_ARROW")){
        snake.position.y=snake.position.y-3;
    }
    var positionXOfSnake=(snake.width/2)+snake.position.x;
    if(1200-positionXOfSnake<=10){
        snake.width=snake.width+20;
        World.remove(world,apple);
        score=score+1;
    }
}