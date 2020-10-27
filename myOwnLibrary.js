function bounceOff(rect1,rect2){

    if(rect1.y - rect2.y < rect1.height/2  + rect2.height/2 &&
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
  
        rect1.velocityY = rect1.velocityY * (-1);
        rect2.velocityY = rect2.velocityY * (-1);
  
      }
  
      if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 &&
        rect2.x - rect1.x < rect1.width/2 + rect2.width/2){
    
          rect1.velocityX = rect1.velocityX * (-1);
          rect2.velocityX = rect2.velocityX * (-1);
          // -5 * -1 = +5
          // +5*-1 = -5
    
          // topRect = +5 => right ;;; move it left = > Speed --- -5 => left
          // bottomRect =  -5 => left ;;; move it right  = > speed --- +5 => right
    
     }
  
  }
  
  function isTouching(object1,object2){// isTouching(rect2,rect1)
    //1st = right touch, 2nd = left touch, 3rd = down touch, 4th = up touch
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
  
      return true;
    } 
    else { 
      //boolean data type
      return false;
  
    }
  }