 //window.onload = function() {
 if (!window.jQuery) {  
   var sgemj = document.createElement('script');
   sgemj.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
   document.head.appendChild(sgemj);
 } 
//}
 setTimeout(runCal, 1000);

function runCal(){
   let sgemjs = document.createElement('script');
   sgemjs.setAttribute('src','https://sumithharshan.github.io/sgem-investment-cal/assets/js/e-cal-scripts-min-all.js');
   document.body.appendChild(sgemjs);
}
