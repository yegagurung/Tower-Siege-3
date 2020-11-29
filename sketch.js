const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint 

var engine, world;
var polygonImage;
var score=0;
var darkimage, lightimage;
var bg="dark.jpg"
var bgImage;

function preload() {
polygonImage=loadImage("polygon.png") 
getbackgroundimage()
}
function setup(){
    var canvas = createCanvas(2000,500);
    engine = Engine.create();
    world = engine.world;
stand1=new Stand(390,300,250,10)
stand2=new Stand(700,200,200,10)




    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40)
    box4 = new Box(390,275,30,40)
    box5 = new Box(420,275,30,40)
    box6 = new Box(450,275,30,40)
    Box7 = new Box(480,275,30,40);
    Box8 = new Box(330,235,30,40);
    Box9 = new Box(360,235,30,40);
    Box10 = new Box(390,235,30,40);
    Box11 = new Box(420,235,30,40);
    Box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    Box14 = new Box(390,195,30,40);
    Box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40)
    box17 = new Box(640,175,30,40)
    box18 = new Box(670,175,30,40);
    box19 = new Box(700,175,30,40);
    box20 = new Box(730,175,30,40);
    box21 = new Box(760,175,30,40);
    box22 = new Box(670,135,30,40);
    box23 = new Box(700,135,30,40);
    box24 = new Box(730,135,30,40);
    box25 = new Box(700,95,30,40);
    
    
    ground = new Ground()
    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)
    
sling1=new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
   if(bgImage)

    background(bgImage);
    Engine.update(engine);
    textSize(25)
    text(" score: " + score, 300,30)

    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    box13.display();
    Box14.display();
    Box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    stand1.display();
    stand2.display();
    ground.display()
   

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    Box7.score();
    Box8.score();
    Box9.score();
    Box10.score();
    Box11.score();
    Box12.score();
    box13.score();
    Box14.score();
    Box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
   
   
   
   imageMode(CENTER)
    image(polygonImage,polygon.position.x ,polygon.position.y,40,40)
    sling1.display();
    
}
function mouseDragged() {
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased() {
sling1.fly()
}
function keyPressed(){
 if (keyCode==32){
     sling1.attach(this.polygon)
 }   
}
async function getbackgroundimage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJSON=await response.json()
    var datetime= responseJSON.datetime
    var hour= datetime.slice(11,13)
    if (hour>=06&&hour<=19){
        bg="light.jpg"
    } else{
        bg="dark.jpg"
    }
    bgImage=loadImage(bg)
}
