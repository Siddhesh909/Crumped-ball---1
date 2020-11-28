class Dustbin{
    constructor(x , y , w , h ){
        var options={
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dust = Bodies.rectangle(this.x , this.y , this.w , this.h , options);
        World.add(world , this.dust);
    }
    show(){
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("white");
        rect(this.x , this.y , this.w , this.h);
    }
}