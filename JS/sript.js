function myfun()
{
   var elem=document.getElementById("animate");
   var x=0;
   var requestAnimationFrame= window.requestAnimationFrame||
                              window.mozRequestAnimationFrame||
                              window.webkitRequestAnimationFrame||
                              window.msRequestAnimationFrame;
   function frame()
   {
      if(x>=700)
      {
         x=0;
      }
         x++;
         if((x>=175)&&(x<350))
         {
            elem.style.top=x+"px";
            elem.style.left=525-x+"px";
         }
         else if((x>=350)&&(x<525))
         {
            elem.style.top=700-x+"px";
            elem.style.left=525-x+"px";
         }
         else if(x>=525)
         {
            elem.style.top=700-x+"px";
            elem.style.left=x-525+"px";
         }
         else
         {
            elem.style.top=x+"px";
            elem.style.left=175+x+"px";
         }

      requestAnimationFrame(frame);
   } 
   frame();
}