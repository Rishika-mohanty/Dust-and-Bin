class paper{
    constructor(x,y,n){
      var g_options ={
          'isStatic':false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x,y,40,40,g_options)
      World.add(world,this.body)
      this.width = 50;
      this.height = 60; 
      this.i  = loadImage("paper.png")
      
    }
    display(){
     var p = this.body.position
      var  n= this.body.angle;
    push();
    translate(p.x, p.y)
    rotate(n);
    imageMode(CENTER);
    image(this.i, 0, 0, this.width, this.height);
    pop();
    }
}