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

var sgem_pmc_head  = document.getElementsByTagName('head')[0];var sgem_pmc_style  = document.createElement('link');sgem_pmc_style.id   = 'sgem-re-cal-styles';
sgem_pmc_style.rel  = 'stylesheet';sgem_pmc_style.type = 'text/css';sgem_pmc_style.href = 'https://retirementinvestments.github.io/sgem-precious-metal-cal/assets/css/pmc-styles.css';
sgem_pmc_style.media = 'all';sgem_pmc_head.appendChild(sgem_pmc_style);
   
 setTimeout(runCal, 500);
 
function runCal(){ 
   let sgemjs = document.createElement('script');
   sgemjs.setAttribute('src','https://retirementinvestments.github.io/sgem-precious-metal-cal/assets/js/e-pmc-scripts-min-all.js?v=2');
   document.body.appendChild(sgemjs);
} 