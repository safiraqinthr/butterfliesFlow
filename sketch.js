let vs = []
function setup() {
  createCanvas(500, 500);
  v = new Vehicle(200,200);
}

function draw() {
  background(204,229,255);
  
   noStroke()
  fill (255,255,102)
  ellipse (80,55,45,45)
  fill(2244,244,244);

  ellipse (100,60,50,35)
  ellipse (100,70,90,30)
  ellipse (320,240,80,40)
  ellipse (350,260,80,40)
  ellipse (305,260,80,40)
  ellipse (40,300,70,35)
  ellipse (55,320,70,35)
  ellipse (15,320,70,35)
  ellipse (400,450,70,35)
  ellipse (360,450,70,35)
  ellipse (380,430,70,35)

  
  v.display()
  v.edges()
  v.update();
  v.wander();
  
}

class Vehicle{
  constructor(x,y){
    this.location = createVector(x,y);
    this.velocity = createVector(10,10);
    this.acceleration = createVector(0,0);
    this.l = 30.0;
    this.maxspeed = 3;
    this.maxforce = 0.2;
    this.wanderTheta = PI/8;
  }
  
  wander(){
    let projVector = this.velocity.copy(); 
    projVector.setMag(100);     
    let projPoint = projVector.add(this.location);
    let wanderRadius = 50;
    let theta = this.wanderTheta + this.velocity.heading();
    let xBar = wanderRadius * cos(theta);
    let yBar = wanderRadius * sin(theta);

    let wanderPoint = p5.Vector.add(projPoint, createVector(xBar,yBar));
    let steeringForce = wanderPoint.sub(this.location);
    steeringForce.setMag(this.maxforce);
    this.applyForce(steeringForce);
    
    this.wanderTheta += random(-0.5 , 0.5);
    
    let debug = true;
    if(debug){
      push()
      noStroke();
      fill(255,0,0); 
      
  // badan kupu - kupu
  fill (0,0,0)
  strokeWeight (0)
  rect (projPoint.x+70,projPoint.y+50,5,20)
  rect (projPoint.x+50,projPoint.y+70,20,5)
  rect (projPoint.x+70,projPoint.y+70,12,12)
  rect (projPoint.x+75,projPoint.y+75,12,12)
  rect (projPoint.x+80,projPoint.y+80,12,12)
  rect (projPoint.x+85,projPoint.y+85,12,12)
  rect (projPoint.x+90,projPoint.y+90,12,12)
  rect (projPoint.x+95,projPoint.y+95,12,12)
  rect (projPoint.x+100,projPoint.y+100,12,12)
  rect (projPoint.x+105,projPoint.y+105,12,12)
  rect (projPoint.x+110,projPoint.y+110,12,12)
      
  // setengah sayap kupu kupu
  fill(0,25,51)
  rect (projPoint.x+87,projPoint.y+20,6,6)
  rect (projPoint.x+87,projPoint.y+25,6,6)
  rect (projPoint.x+87,projPoint.y+30,6,6)
  rect (projPoint.x+87,projPoint.y+35,6,6)
  rect (projPoint.x+87,projPoint.y+40,6,6)
  rect (projPoint.x+87,projPoint.y+45,6,6)
  rect (projPoint.x+87,projPoint.y+50,6,6)
  rect (projPoint.x+87,projPoint.y+55,6,6)
  rect (projPoint.x+87,projPoint.y+60,6,6)
  rect (projPoint.x+87,projPoint.y+65,6,6)
  rect (projPoint.x+87,projPoint.y+70,6,6)
  rect (projPoint.x+87,projPoint.y+75,6,6)
  rect (projPoint.x+92,projPoint.y+20,6,6)
  rect (projPoint.x+97,projPoint.y+20,6,6)
  rect (projPoint.x+102,projPoint.y+20,6,6)
  rect (projPoint.x+107,projPoint.y+20,6,6)
  rect (projPoint.x+112,projPoint.y+25,6,6)
  rect (projPoint.x+117,projPoint.y+30,6,6)
  rect (projPoint.x+117,projPoint.y+35,6,6)
  rect (projPoint.x+117,projPoint.y+40,6,6)
  rect (projPoint.x+117,projPoint.y+45,6,6)
  rect (projPoint.x+117,projPoint.y+50,6,6)
  rect (projPoint.x+117,projPoint.y+55,6,6)
  rect (projPoint.x+117,projPoint.y+60,6,6)
  rect (projPoint.x+117,projPoint.y+65,6,6)
  rect (projPoint.x+117,projPoint.y+105,6,6)
  rect (projPoint.x+122,projPoint.y+60,6,6)
  rect (projPoint.x+122,projPoint.y+65,6,6)
  rect (projPoint.x+122,projPoint.y+105,6,6)
  rect (projPoint.x+127,projPoint.y+65,6,6)
  rect (projPoint.x+127,projPoint.y+65,6,6)
  rect (projPoint.x+127,projPoint.y+105,6,6)
  rect (projPoint.x+132,projPoint.y+65,6,6)
  rect (projPoint.x+132,projPoint.y+105,6,6)
  rect (projPoint.x+137,projPoint.y+65,6,6)
  rect (projPoint.x+137,projPoint.y+105,6,6)
  rect (projPoint.x+142,projPoint.y+70,6,6)
  rect (projPoint.x+142,projPoint.y+75,6,6)
  rect (projPoint.x+142,projPoint.y+80,6,6)
  rect (projPoint.x+142,projPoint.y+85,6,6)
  rect (projPoint.x+142,projPoint.y+90,6,6)
  rect (projPoint.x+142,projPoint.y+95,6,6)
  rect (projPoint.x+142,projPoint.y+100,6,6)
  rect (projPoint.x+142,projPoint.y+105,6,6)
      
  fill (0,51,102)
  rect (projPoint.x+92,projPoint.y+25,6,6)
  rect (projPoint.x+92,projPoint.y+30,6,6)
  rect (projPoint.x+92,projPoint.y+35,6,6)
  rect (projPoint.x+92,projPoint.y+40,6,6)
  rect (projPoint.x+92,projPoint.y+45,6,6)
  rect (projPoint.x+92,projPoint.y+50,6,6)
  rect (projPoint.x+92,projPoint.y+55,6,6)
  rect (projPoint.x+92,projPoint.y+60,6,6)
  rect (projPoint.x+92,projPoint.y+65,6,6)
  rect (projPoint.x+92,projPoint.y+70,6,6)
  rect (projPoint.x+92,projPoint.y+75,6,6)
  rect (projPoint.x+92,projPoint.y+80,6,6)
  rect (projPoint.x+97,projPoint.y+25,6,6)
  rect (projPoint.x+102,projPoint.y+25,6,6)
  rect (projPoint.x+107,projPoint.y+25,6,6)
  rect (projPoint.x+112,projPoint.y+30,6,6)
  rect (projPoint.x+112,projPoint.y+35,6,6)
  rect (projPoint.x+112,projPoint.y+40,6,6)
  rect (projPoint.x+112,projPoint.y+45,6,6)
  rect (projPoint.x+112,projPoint.y+50,6,6)
  rect (projPoint.x+112,projPoint.y+55,6,6)
  rect (projPoint.x+112,projPoint.y+60,6,6)
  rect (projPoint.x+112,projPoint.y+65,6,6)
  rect (projPoint.x+117,projPoint.y+65,6,6)
  rect (projPoint.x+117,projPoint.y+70,6,6)
  rect (projPoint.x+117,projPoint.y+100,6,6)
  rect (projPoint.x+122,projPoint.y+70,6,6)
  rect (projPoint.x+122,projPoint.y+100,6,6)
  rect (projPoint.x+127,projPoint.y+70,6,6)
  rect (projPoint.x+127,projPoint.y+100,6,6)
  rect (projPoint.x+132,projPoint.y+70,6,6)
  rect (projPoint.x+132,projPoint.y+100,6,6)
  rect (projPoint.x+137,projPoint.y+70,6,6)
  rect (projPoint.x+137,projPoint.y+75,6,6)
  rect (projPoint.x+137,projPoint.y+80,6,6)
  rect (projPoint.x+137,projPoint.y+85,6,6)
  rect (projPoint.x+137,projPoint.y+90,6,6)
  rect (projPoint.x+137,projPoint.y+95,6,6)
  rect (projPoint.x+137,projPoint.y+100,6,6)
 
  fill (0,76,153)
  rect (projPoint.x+97,projPoint.y+30,6,6)
  rect (projPoint.x+97,projPoint.y+35,6,6)
  rect (projPoint.x+97,projPoint.y+40,6,6)
  rect (projPoint.x+97,projPoint.y+45,6,6)
  rect (projPoint.x+97,projPoint.y+50,6,6)
  rect (projPoint.x+97,projPoint.y+55,6,6)
  rect (projPoint.x+97,projPoint.y+60,6,6)
  rect (projPoint.x+97,projPoint.y+65,6,6)
  rect (projPoint.x+97,projPoint.y+70,6,6)
  rect (projPoint.x+97,projPoint.y+75,6,6)
  rect (projPoint.x+97,projPoint.y+80,6,6)
  rect (projPoint.x+97,projPoint.y+85,6,6)
  rect (projPoint.x+102,projPoint.y+30,6,6)
  rect (projPoint.x+102,projPoint.y+35,6,6)
  rect (projPoint.x+102,projPoint.y+40,6,6)
  rect (projPoint.x+102,projPoint.y+45,6,6)
  rect (projPoint.x+107,projPoint.y+30,6,6)
  rect (projPoint.x+107,projPoint.y+35,6,6)
  rect (projPoint.x+107,projPoint.y+40,6,6)
  rect (projPoint.x+107,projPoint.y+45,6,6)
  rect (projPoint.x+107,projPoint.y+50,6,6)
  rect (projPoint.x+107,projPoint.y+55,6,6)
  rect (projPoint.x+107,projPoint.y+60,6,6)
  rect (projPoint.x+107,projPoint.y+65,6,6)
  rect (projPoint.x+107,projPoint.y+70,6,6)
  rect (projPoint.x+112,projPoint.y+70,6,6)
  rect (projPoint.x+112,projPoint.y+75,6,6)
  rect (projPoint.x+117,projPoint.y+75,6,6)
  rect (projPoint.x+122,projPoint.y+75,6,6)
  rect (projPoint.x+127,projPoint.y+75,6,6)
  rect (projPoint.x+132,projPoint.y+75,6,6)
  rect (projPoint.x+132,projPoint.y+80,6,6)
  rect (projPoint.x+132,projPoint.y+85,6,6)
  rect (projPoint.x+132,projPoint.y+90,6,6)
  rect (projPoint.x+132,projPoint.y+95,6,6)

  fill (0,102,204)
  rect (projPoint.x+102,projPoint.y+50,6,6)
  rect (projPoint.x+102,projPoint.y+55,6,6)
  rect (projPoint.x+102,projPoint.y+60,6,6)
  rect (projPoint.x+102,projPoint.y+65,6,6)
  rect (projPoint.x+102,projPoint.y+70,6,6)
  rect (projPoint.x+102,projPoint.y+75,6,6)
  rect (projPoint.x+102,projPoint.y+80,6,6)
  rect (projPoint.x+102,projPoint.y+85,6,6)
  rect (projPoint.x+102,projPoint.y+90,6,6)
  rect (projPoint.x+107,projPoint.y+75,6,6)
  rect (projPoint.x+107,projPoint.y+80,6,6)
  rect (projPoint.x+112,projPoint.y+75,6,6)
  rect (projPoint.x+112,projPoint.y+80,6,6)
  rect (projPoint.x+117,projPoint.y+80,6,6)
  rect (projPoint.x+122,projPoint.y+80,6,6)
  rect (projPoint.x+122,projPoint.y+85,6,6)
  rect (projPoint.x+122,projPoint.y+90,6,6)
  rect (projPoint.x+122,projPoint.y+95,6,6)
  rect (projPoint.x+127,projPoint.y+80,6,6)
  rect (projPoint.x+127,projPoint.y+85,6,6)
  rect (projPoint.x+127,projPoint.y+90,6,6)
  rect (projPoint.x+127,projPoint.y+95,6,6)

  fill (51,153,255)
  rect (projPoint.x+107,projPoint.y+85,6,6)
  rect (projPoint.x+107,projPoint.y+90,6,6)
  rect (projPoint.x+107,projPoint.y+95,6,6)
  rect (projPoint.x+112,projPoint.y+85,6,6)
  rect (projPoint.x+112,projPoint.y+85,6,6)
  rect (projPoint.x+112,projPoint.y+90,6,6)
  rect (projPoint.x+112,projPoint.y+95,6,6)
  rect (projPoint.x+112,projPoint.y+100,6,6)
  rect (projPoint.x+117,projPoint.y+85,6,6)
  rect (projPoint.x+117,projPoint.y+90,6,6)
  rect (projPoint.x+117,projPoint.y+95,6,6)

      noFill();
      noStroke()
      console.log(wanderRadius)
      circle(projPoint.x, projPoint.y,wanderRadius*2) 

      pop()
    }
  }
  
  seek(vektorTarget){
    // percieve target location
    var desired = p5.Vector.sub(vektorTarget, this.location);
    desired.normalize();
    desired.mult(this.maxspeed);
    
    //kemudi
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }
  
  arrive(vektorTarget){
    var desired = p5.Vector.sub(vektorTarget, this.location);
    var jarak = desired.mag()

    if (jarak < 100){
      var m = map(jarak, 0, 100, 0, this.maxspeed);
      desired.normalize();
      desired.mult(m);
    }
    else{
      desired.normalize();
      desired.mult(this.maxspeed);    
    }    
    // stir kemudi
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  applyForce(force){
    this.acceleration.add(force);
  }
  display(){
    var theta = this.velocity.heading()// + PI/2;
    push();
    noStroke();
    translate(this.location.x, this.location.y)
    rotate(theta+20)
    //circle(this.l, -this.l, 5,5)
    
  // bagian bunga 
  fill(255,51,153)
  ellipse(this.l,this.l,20,20)
  ellipse(this.l-15,this.l+5,20,20)
  ellipse(this.l-25,this.l-5,20,20)
  ellipse(this.l-17,this.l-20,20,20)
  ellipse(this.l,this.l-15,20,20)
  fill (255,204,229);
  ellipse(this.l-12,this.l-7,22,22) 
       
    pop();
  }

  edges() {
    if (this.location.x > width + 10) {
      this.location.x = -10;
    } else if (this.location.x < -10) {
      this.location.x = width + 10;
    }
    if (this.location.y > height + 10) {
      this.location.y = -10;
    } else if (this.location.y < -10) {
      this.location.y = height + 10;
    }
  }

}