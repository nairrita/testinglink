class Helicopter{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.image  = loadImage("helicopter.png")
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        World.add(world,this.body)


    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}