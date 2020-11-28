class Ground{
    constructor(x , y , w , h){
        var options={
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ground = Bodies.rectangle(this.x , this.y , this.w , this.h , options);
        World.add(world , this.ground);
    }
    show(){
        rectMode(CENTER);
        strokeWeight(3);
        fill("brown");
        rect(this.x , this.y , this.w , this.h);
    }
}