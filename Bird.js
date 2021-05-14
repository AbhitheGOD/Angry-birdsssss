class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectry=[]
    this.smokeImage=loadImage("sprites/smoke.png")
  }

  display() {
    if(this.body.velocity.x>10&&this.body.position.x>200){

      var position=[this.body.position.x,this.body.position.y]
      this.trajectry.push(position)

    }
    for(var i=0;i<this.trajectry.length;i++){
image(this.smokeImage,this.trajectry[i][0],this.trajectry[i][1])

    }
    super.display();
  }
}
