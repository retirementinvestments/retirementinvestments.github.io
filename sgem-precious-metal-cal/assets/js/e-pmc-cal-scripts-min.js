 //window.onload = function() {
 if (!window.jQuery) {  
   var sgemj = document.createElement('script');
   sgemj.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
   document.head.appendChild(sgemj);
 } 
//}
 setTimeout(runCal, 500);

function runCal(){
	
var sgem_pmc_main_contents = '<div class="sgem-pmc-cal-main-id">'+ 
'<div class="sgem-pmc-cal-wrapper">'+
'<div class="sgem-pmc-cal-left">'+
'<div class="sgem-pmc-form sgem-pmc-cal-1">'+
'<div class="sgem-pmc-flex-container">'+
'<div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-years-holder">'+
'<label>My age is</label>'+
'<input type="text" id="sgem_pmc_age" value="35" min="0" max="150" onkeypress="return isNumber(event)"/>'+
'<span class="sgem-pmc-err-msg-age"></span></div>'+
'<div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-years-holder"><label>Retirement age</label>'+
'<input type="text" id="sgem_pmc_retirement_age" value="67" min="0" max="150" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-rmt"></span></div></div>'+
'<div class="sgem-pmc-flex-container">'+
'<div class="sgem-pmc-form-group sgem-pmc-form-flex">'+
'<label>Annual Return <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Total savings in your IRA , 401(k), or other retirement account">?</span></label>'+
'<input type="text" class="inputmove inputnumber"  id="sgem_pmc_annual_return" value="6%" min="0" max="100" onkeypress="return isNumber(event)"/>'+
'<span class="sgem-pmc-err-msg-current"></span></div>'+
'<div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-currency-holder">'+
'<label>Annual contribution </label> <input type="text" class="inputmove inputnumber"  id="sgem_pmc_annual_contribution" value="6,000" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
'<span class="sgem-pmc-err-msg-anucon"></span> </div> </div>'+
'<div class="sgem-pmc-flex-container">'+
'<div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-currency-holder"><label>Current savings </label>'+
'<input type="text"class="inputmove inputnumber" id="sgem_pmc_current_savings" value="30,000" min="0" max="10000000" onkeypress="return isNumber(event)" /> <span class="sgem-pmc-err-msg-income"></span>'+
'</div><div class="sgem-pmc-form-group sgem-pmc-form-flex"></div></div>'+
'<details class="sgem-pmc-input-more-details" open><summary><div><h3 class="sgem-pmc-collapsible-summary-title">Advanced</h3> </div></summary>'+
'<div class="collapsible-content"><div class="sgem-pmc-flex-container"><div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-midtext">Percentage of current savings allocated for precious metal investments</div></div>'+                   
'<span class="sgem-pmc-err-msg-ftallonew"></span><div class="sgem-pmc-flex-container"><div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-full-flex">'+                
'<label>Total Allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Total percentage of portfolio allocated for Precious Metals">?</span></label>'+
'<input type="text" class="sgem-pmc-current-allocation"  id="sgem_pmc_current_allocation" value="10%" min="0" max="100" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-ftallo"></span></div></div>'+                  
'<span class="sgem-pmc-err-msg-both"></span><div class="sgem-pmc-flex-container">'+                   
'<div class="sgem-pmc-form-group sgem-pmc-form-flex"><label>Gold allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Percentage of gold in precious metals portfolio">?</span></label>'+    
'<input type="text" id="sgem_pmc_current_gold_allocation" class="inputnumber" value="70%" min="0" max="100" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-death"></span></div>'+              
'<div class="sgem-pmc-form-group sgem-pmc-form-flex"><label>Silver allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Percentage of silver in precious metals portfolio">?</span></label>'+                 
'<input type="text" id="sgem_pmc_current_silver_allocation" class="inputnumber" value="30%" min="0" max="50" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-per"></span></div></div>'+                    
'<div class="sgem-pmc-flex-container"><div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-midtext">Percentage of future contributions for precious metal investments</div></div>'+                  
'<span class="sgem-pmc-err-msg-ctallonew"></span> <div class="sgem-pmc-flex-container">'+  
'<div class="sgem-pmc-form-group sgem-pmc-form-flex sgem-pmc-full-flex"> <label>Total Allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Total percentage of portfoliio allocated for Precious Metals in the future">?</span></label>'+              
'<input type="text" class="sgem-pmc-future-allocation inputnumber"  id="sgem_pmc_future_allocation" value="10%" min="0" max="100" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-ctallo"></span> </div></div>'+                  
'<span class="sgem-pmc-err-msg-c-both"></span><div class="sgem-pmc-flex-container"><div class="sgem-pmc-form-group sgem-pmc-form-flex">'+  
'<label>Gold allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Percentage of gold in precious metals portfolio">?</span></label>'+        
'<input type="text" id="sgem_pmc_future_gold_allocation" class="inputnumber" value="70%" min="0" max="100" onkeypress="return isNumber(event)"/>'+                    
'<span class="sgem-pmc-err-msg-f-death"></span> </div>'+            
'<div class="sgem-pmc-form-group sgem-pmc-form-flex"><label>Silver allocation <span class="sgem-pmc-info-tooltip tooltip" data-tippy-content="Percentage of silver in precious metals portfolio">?</span></label>'+                  
'<input type="text" id="sgem_pmc_future_silver_allocation" class="inputnumber" value="30%" min="0" max="50" onkeypress="return isNumber(event)"/><span class="sgem-pmc-err-msg-f-per"></span></div></div>'+                   
'</div></details><span class="sgem-pmc-err-msg"></span></div></div>'+                  
'<div class="sgem-pmc-cal-right"><div class="sgem-pmc-cal-1-result-wrapper"><div class="sgem-pmc-cal-1-result-header">'+                   
'<div class="sgem-pmc-value-label"><span class="sgem-pmc-staticvalue-text">YOUR VALUE AT RETIREMENT </span><span id="sgem_pmc_value_text" class="sgem-pmc-value-text">$901,091.05</span></div>'+    
'<div class="sgem-pmc-legendbox"><div class="sgem-pmc-legend-item"> <button id="sgem_pmc_contribution" onClick="toggleData(0)" class="sgem-pmc-contribution"></button>'+              
'<div id="sgem_pmc_contribution_te" onClick="toggleData(0)" class="sgem-pmc-contribution-te"></div></div><div class="sgem-pmc-legend-item">'+         
'<button id="sgem_pmc_investment" onClick="toggleData(1)" class="sgem-pmc-investment"></button><div id="sgem_pmc_investment_te" onClick="toggleData(1)" class="sgem-pmc-investment-te"></div></div></div></div>'+                  
'<div class="sgem-pmc-chartCard"><div class="chartBox"><canvas id="myChart"></canvas></div></div>'+                   
'<div class="sgem-pmc-cal-1-result-footer"><div class="sgem-pmc-content">Get the free gold IRA kit Americans are using to protect their retirement savings</div><div class="sgem-pmc-buttonGet">'+   
'<a href="https://retirementinvestments.com/goldco/" class="sgem-pmc-getStart">Request Your Free Kit</a></div></div></div>'+                    
'<div class="sgem-pmc-logo-center">Precious Metals calculator by<a class="sgem-pmc-logo-image" href="https://retirementinvestments.com/" target="_blank" rel="noopener">'+                   
'<img src="https://retirementinvestments.github.io/sgem-precious-metal-cal/assets/images/retirement-investments-logo.png" class="img-class" alt="Retirement calculator Logo" /></a></div></div></div> </div>';     
	
	 $('#sgem-pmc-cal').html(sgem_pmc_main_contents);
	
	
   let sgemjs = document.createElement('script');
   sgemjs.setAttribute('src','https://retirementinvestments.github.io/sgem-precious-metal-cal/assets/js/e-pmc-scripts-min-all.js');
   document.body.appendChild(sgemjs);
}
