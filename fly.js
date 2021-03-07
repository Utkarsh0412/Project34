class Fly{
    constructor(body1,pointB){
        
       var options={
           bodyA:body1,
           pointB:pointB,
           length:300,
           stifness:0.01
         }
         this.pointB=pointB
         this.Fly=Constraint.create(options)   
         World.add(world,this.fly)
    }
   display(){
       var pointA=this.Fly.bodyA.position
       var pointB=this.pointB
              strokeWeight(2)
       var Anchor1X=pointA.x
       var Anchor1Y=pointA.y
       line(pointA.x,pointA.y,pointB.x,pointB.y)
   
   }
   fly(){
    this.rope1.bodyA=null
    
    }

}