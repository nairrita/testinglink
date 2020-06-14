class Package{
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
            restitution : 1.0,
            density : 1.0,
            friction : 0.4
        }
        this.image  = loadImage("package.png")
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