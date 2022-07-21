 //window.onload = function() {
 if (!window.jQuery) {  
   var sgemj = document.createElement('script');
   sgemj.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
   document.head.appendChild(sgemj);
 } 
//}
var sgem_head  = document.getElementsByTagName('head')[0];var sgem_xs  = document.getElementsByTagName('head')[0];var sgem_style  = document.createElement('link');sgem_style.id   = 'sgem-re-cal-styles';
sgem_style.rel  = 'stylesheet';sgem_style.type = 'text/css';sgem_style.href = 'https://retirementinvestments.github.io/sgem-investment-cal/assets/css/styles.min.css';
sgem_style.media = 'all';sgem_head.appendChild(sgem_style);

 setTimeout(runCal, 1000);

function runCal(){
   let sgemjs = document.createElement('script');
   sgemjs.setAttribute('src','https://retirementinvestments.github.io/sgem-investment-cal/assets/js/e-cal-scripts-min-all.js');
   document.body.appendChild(sgemjs);
}