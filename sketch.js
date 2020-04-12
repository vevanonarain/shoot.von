const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var world,engine;
var box1,box2,box3,box4,box5,box6,box7,box,box9,box10,box11
var platform,platform2
var ball
var chain

function setup(){
createCanvas(800,600)
engine = Engine.create();
world = engine.world;

box1=new Box(500,500,30,30);
box2=new Box(530,500,30,30);
box3=new Box(470,300,30,30);
box4=new Box(440,430,30,30);
box5=new Box(450,100,30,30);
box6=new Box(480,50,30,30);
box7=new Box(510,239,30,30);
box8=new Box(495,33,30,30);
box9=new Box(465,20,30,30);
box10=new Box(480,0,30,30);
box11=new Platform(100,495,80,100);

platform=new Platform(600,550,400,10);
platform2=new Platform(100,615,200,100)

ball=new Ball(200,455,20,20)

chain=new Slingshot(ball.body,{x:80,y:400})

}
function draw(){
  Engine.update(engine);
  background("grey");
  platform.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  chain.display();

  ball.display();
}
  function mouseReleased() {
    chain.fly();
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

