class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.width=w;
        this.height=h;
        this.body=Body.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

        
    } 

    display(){
        var pos = this.body.position;
        Body.rotate(this.body,angle);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
        angle+=0.1;
            
    }
    
}