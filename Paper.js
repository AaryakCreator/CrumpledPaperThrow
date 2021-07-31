class Paper {
    constructor (x, y, r) {

        
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.body= Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }

    display() {

        var posX = this.body.position.x;
        var posY = this.body.position.y;

        push()
            translate(posX,posY)
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r);
            
			
			pop()
    }
}