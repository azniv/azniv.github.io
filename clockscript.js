
window.onload = function(){
    window.setInterval(
     function(){
         var date = new Date();
        
       document.getElementById("nowDate").innerHTML = date.toLocaleDateString();
       document.getElementById("nowClock").innerHTML = date.toLocaleTimeString();
         
     }
   , 1000);
 }