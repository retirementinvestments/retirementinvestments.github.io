 //window.onload = function() {
 if (!window.jQuery) {  
   var sgemj = document.createElement('script');
   sgemj.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
   document.head.appendChild(sgemj);
 } 
//}
var sgem_pmc_head1  = document.getElementsByTagName('head')[0];
let sgemjs3 = document.createElement('script');
   sgemjs3.setAttribute('src','https://cdn.jsdelivr.net/npm/chart.js');
  sgem_pmc_head1.appendChild(sgemjs3);
   
 setTimeout(runCal, 500);
 
function runCal(){ 
   let sgemjs = document.createElement('script');
   sgemjs.setAttribute('src','https://retirementinvestments.github.io/sgem-precious-metal-cal/assets/js/e-pmc-scripts-min-all.js?v=2');
   document.body.appendChild(sgemjs);
} 