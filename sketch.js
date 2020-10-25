var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var yellowLine;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var turn = 0;
var count = 0;
var gameState = "play";
var particle;

function setup() 
{
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;

   yellowLine = new Ground(400,450,800,10);

   for (var k = 0; k <=width; k = k + 80)
   {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

      for (var j = 25; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }

      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,125));
      }

      for (var j = 25; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }

      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,225));
      }

      for (var j = 25; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }

      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,325));
      }

      for (var j = 25; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
   
}
 
function draw()
{
   background("black");
   
   textSize(20)
   text("Score : "+score,20,30);
   fill("white");
   text("500",342,520);
   text("500",582,520);
   text("400",22,520);
   text("400",662,520);
   text("300",262,520);
   text("300",502,520);
   text("200",422,520);
   text("200",102,520);
   text("100",742,520);
   text("100",182,520);
   
   Engine.update(engine);
      
   for (var i = 0; i < plinkos.length; i++) 
   {
      
      plinkos[i].display();
      
   }
   
   for (var j = 0; j < particles.length; j++)
   {
   
   particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++)
   {
   
   divisions[k].display();
   }

   yellowLine.display();
      
   if(particle != null)
   {
      particle.display();

      if(particle.body.position.y>760)
      {
         if(particle.body.position.x > 320 && particle.body.position.x < 400)
         {
            score = score +500;
            particle = null;
            
            /*if (count >= 5)
            {
            gameState = "end";
            }*/
         }
        
         else if (particle.body.position.x > 560 && particle.body.position.x < 640 ) 
         { 
            score = score + 500; particle=null; 
            /*if (count>= 5) 
            gameState ="end"; */
         } 
        
         else if (particle.body.position.x > 0 && particle.body.position.x < 80 )
         { 
            score = score + 400; 
            particle=null; 
           /* if (count>= 5) 
            gameState ="end";*/
         }
         
         else if (particle.body.position.x > 640 && particle.body.position.x < 720 )
         { 
            score = score + 400; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
         
         else if (particle.body.position.x > 240 && particle.body.position.x < 320 )
         { 
            score = score + 300; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
         
         else if (particle.body.position.x > 480 && particle.body.position.x < 560 )
         { 
            score = score + 300; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
        
         else if (particle.body.position.x > 80 && particle.body.position.x < 160 )
         { 
            score = score + 200; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
         
         else if (particle.body.position.x > 400 && particle.body.position.x < 480 )
         { 
            score = score + 200; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
         
         else if (particle.body.position.x > 160 && particle.body.position.x < 240 )
         { 
            score = score + 100; 
            particle=null; 
           /* if (count>= 5) 
            gameState ="end";*/
         }
        
         else if (particle.body.position.x > 720 && particle.body.position.x < 800 )
         { 
            score = score + 100; 
            particle=null; 
            /*if (count>= 5) 
            gameState ="end";*/
         }
      }
   } 
   
  
   if(gameState === "end")
   {
      text("Press R to Try Again",325,440);
      if(score == 2500)
      {  
         textSize(50);
         fill("white");
         text("A Perfect Score!!! You Win!!!", 100,50)
      }

      if(score > 1999)
      {
        if(score < 2401)
        {
         textSize(50);
         fill("white");
         text("Not Bad Actually!!! You Win!!!", 125,50)
        }
      }
      if(score < 1999)
      {
         textSize(50);
         fill("white");
         text("Bad Score!!! You Lose!!!", 125,50)
      }
      
      

      if(keyCode === 114)
      {
         gameState = "play";
         turn = 0;
         score = 0;
      }

      
      

   }
}

function mousePressed()
{
   
   console.log(turn);
  if(gameState!=="end")
   {turn = turn+1;
       count++; 
       particle=new Particle(mouseX, 10, 10, 10); 
   }
  if(turn >= 5)
   {
      gameState = "end";
   }
}