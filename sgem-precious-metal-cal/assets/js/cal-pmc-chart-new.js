



/* 
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
'<img src="retirement-investments-logo.png" class="img-class" alt="Retirement calculator Logo" /></a></div></div></div> </div>';                    
 */                 



 function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
              return false;
          }
          return true;
  }
    
function sgem_ConvertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}

function sgem_ConvertToInternationalCurrencySystemRound(labelValue) {
 
        // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
        ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9 ) + " B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6
            ? Math.round(Math.abs(Number(labelValue)) / 1.0e+6 ) + " M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
                ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3 ) + " K"
                : Math.abs(Number(labelValue)); 
}
  
  function sgem_pmc_calculaterminfazcal() {
    
    var pmc_intrest_chart = [];
    var years_invested_so_far_array = [];
    var chart_label_year_array = [];
    var y_axis_array = [];
    var y_axis_nan_array = [];
    var current_age = $('#sgem_pmc_age').val().trim();
    var retirement_age  = $('#sgem_pmc_retirement_age').val().trim();
  
    var annual_rate_of_return2 = $('#sgem_pmc_annual_return').val().trim();
    var annual_rate_of_return1 = annual_rate_of_return2.replace('%', "");
    var annual_rate_of_return = parseFloat(annual_rate_of_return1/100);

    var annual_contribution3 = $('#sgem_pmc_annual_contribution').val().trim();
    var annual_contribution2 = annual_contribution3.replace(/\,/g,'');
    var annual_contribution = parseInt(annual_contribution2,10); 

    var current_savings3 = $('#sgem_pmc_current_savings').val().trim();
    var current_savings2 = current_savings3.replace(/\,/g,'');
    var current_savings = parseInt(current_savings2,10); 

    var pm_current_allocation2 = $('#sgem_pmc_current_allocation').val().trim();
    var pm_current_allocation1 = pm_current_allocation2.replace('%', "");
    var pm_current_allocation = parseFloat(pm_current_allocation1/100);
    
    var gold_current_allocation2 = $('#sgem_pmc_current_gold_allocation').val().trim();
    var gold_current_allocation1 = gold_current_allocation2.replace('%', "");
    var gold_current_allocation = parseFloat(gold_current_allocation1/100);


    var silver_current_allocation2 = $('#sgem_pmc_current_silver_allocation').val().trim();
    var silver_current_allocation1 = silver_current_allocation2.replace('%', "");
    var silver_current_allocation = parseFloat(silver_current_allocation1/100);

    var pm_future_allocation2 = $('#sgem_pmc_future_allocation').val().trim();
    var pm_future_allocation1 = pm_future_allocation2.replace('%', "");
    var pm_future_allocation = parseFloat(pm_future_allocation1/100);

    var gold_future_allocation2 = $('#sgem_pmc_future_gold_allocation').val().trim();
    var gold_future_allocation1 = gold_future_allocation2.replace('%', "");
    var gold_future_allocation = parseFloat(gold_future_allocation1/100);

    var silver_future_allocation2 = $('#sgem_pmc_future_silver_allocation').val().trim();
    var silver_future_allocation1 = silver_future_allocation2.replace('%', "");
    var silver_future_allocation = parseFloat(silver_future_allocation1/100);

   
    var gold_return = parseFloat(10.91/100);
    var silver_return = parseFloat(7.90/100);
    var total_allocation_currently_gold = gold_current_allocation * pm_current_allocation;
    var total_allocation_currently_silver =silver_current_allocation * pm_current_allocation;
    var total_allocation_future_gold = gold_future_allocation * pm_future_allocation;
    var total_allocation_future_silver = silver_future_allocation * pm_future_allocation;
    var number_of_years_contribution = retirement_age - current_age;
    


   

   //General Investments
     //Part one
    var general_investments1 = 1 - pm_current_allocation;
    var general_investments2 = 1 + annual_rate_of_return;
    let general_investments3 = Math.pow(general_investments2, number_of_years_contribution);
    var general_investments4 = general_investments1 * general_investments3;
    var general_investments5 = current_savings * general_investments4;

     //Part two
    var general_investments6 = 1 - pm_future_allocation;
    var general_investments7 = 1 + annual_rate_of_return;
    let general_investments8 = Math.pow(general_investments7, number_of_years_contribution);
    var general_investments9 = general_investments8 - 1;
    var general_investments10 = 1 + annual_rate_of_return;
    var general_investments11 = general_investments10 / annual_rate_of_return;
    var general_investments12 = annual_contribution * general_investments6 * general_investments9 * general_investments11;

    var general_investments = (general_investments5 + general_investments12).toFixed(2);
    
    


    //Gold

    var gold1 = 1 + gold_return;
    let gold2 = Math.pow(gold1, number_of_years_contribution);
    var gold3 = current_savings * total_allocation_currently_gold * gold2

    let gold4 =  gold2 - 1;
    var gold5 =  gold1 / gold_return;
    var gold6 = annual_contribution * total_allocation_future_gold * gold4 * gold5;

    var gold = (gold3 + gold6).toFixed(2);

    //Silver

    var silver1 = 1 + silver_return;
    let silver2 = Math.pow(silver1, number_of_years_contribution);
    var silver3 = current_savings * total_allocation_currently_silver * silver2;

    var silver4 = silver2 - 1;
    var silver5 = silver1 / silver_return;
    var silver6 = annual_contribution * total_allocation_future_silver * silver4 * silver5;
    
    var silver = (silver3 + silver6).toFixed(2);

    // Value at retirement

    var value_at_retirement = (parseFloat(general_investments) + parseFloat(gold) + parseFloat(silver)).toFixed(2);

    
    
    if (isNaN(value_at_retirement) || value_at_retirement < 1){

          $('#sgem_pmc_value_text').text('00.00'); 

      }else{

        $('#sgem_pmc_value_text').text('$' + sgem_ConvertToInternationalCurrencySystem(value_at_retirement).replace(/\B(?=(\d{3})+(?!\d))/g, ",")); 
      }

 
//Chart values section

    //y axis value
    var y_axis_for_nan = 1000000;
    var y_axis_value2 = value_at_retirement;
    var y_axis_value = parseFloat(y_axis_value2).toFixed();
    y_axis_nan_array.push(y_axis_for_nan);
    y_axis_array.push(y_axis_value);

    if (isNaN(value_at_retirement)) {
      
      localStorage.setItem('pcm_y_axis', JSON.stringify(y_axis_nan_array));

    }else {

       localStorage.setItem('pcm_y_axis', JSON.stringify(y_axis_array));
    }
   

    //chart label

           var current_year = new Date().getFullYear();
           var endyear = current_year+number_of_years_contribution;
    
           var display_years_concat = "";
          while(current_year <= endyear){
                var displayyears = current_year++;
                display_years_concat += displayyears+',';
                chart_label_year_array.push(displayyears);
           }
          localStorage.setItem('pcm_label_years', JSON.stringify(chart_label_year_array));
       //alert(display_years_concat);
       // $('#sgemyyear').val(display_years_concat);
        // window.localStorage.setItem('pmc_label_year', display_years_concat); 
    //  alert('pcm_label_years');

    //total capital invested
    var total_invested_first_value = 1;
    var years_invested_so_far ="";
   

        while (total_invested_first_value <= number_of_years_contribution) {
          var total_capital_invested = current_savings+(annual_contribution*total_invested_first_value++);
          years_invested_so_far += total_capital_invested+',';
          years_invested_so_far_array.push(total_capital_invested);
        }

         if (isNaN(value_at_retirement)) {
      
          localStorage.setItem('pcm_values_totalcapital', JSON.stringify(value_at_retirement));

        }else {

         localStorage.setItem('pcm_values_totalcapital', JSON.stringify(years_invested_so_far_array));
        
        }
   
       
      // alert('pcm_values_totalcapital');
        //$('#sgemyyear').text(years_invested_so_far_array);
  
      //interest
       var total_invested_first_value2 = 1;
       var total_invested_first_value3 = 1;
       var total_invested_first_value4 = 1;
       var total_invested_first_value5 = 1;
       var intrest_total ="";
       var final_intrest_array = [];

           while (total_invested_first_value2 <= number_of_years_contribution,total_invested_first_value3 <= number_of_years_contribution,total_invested_first_value4 <= number_of_years_contribution,total_invested_first_value5 <= number_of_years_contribution){

            //Genaral investment
          
             var i_general_investments1 = 1 - pm_current_allocation;
             var i_general_investments2 = 1 + annual_rate_of_return;
             let i_general_investments3 = Math.pow(i_general_investments2, total_invested_first_value2++);
             var i_general_investments4 = i_general_investments1 * i_general_investments3;
             var i_general_investments5 = current_savings * i_general_investments4;

            //Part two
             var i_general_investments6 = 1 - pm_future_allocation;
             var i_general_investments7 = 1 + annual_rate_of_return;
             let i_general_investments8 = Math.pow(i_general_investments7, total_invested_first_value3++);
             var i_general_investments9 = i_general_investments8 - 1;
             var i_general_investments10 = 1 + annual_rate_of_return;
             var i_general_investments11 = i_general_investments10 / annual_rate_of_return;
             var i_general_investments12 = annual_contribution * i_general_investments6 * i_general_investments9 * i_general_investments11;

             var i_general_investments = (i_general_investments5 + i_general_investments12).toFixed(2);

             //Gold

            var i_gold1 = 1 + gold_return;
            let i_gold2 = Math.pow(i_gold1, total_invested_first_value4++);
            var i_gold3 = current_savings * total_allocation_currently_gold * i_gold2

            let i_gold4 =  i_gold2 - 1;
            var i_gold5 =  i_gold1 / gold_return;
            var i_gold6 = annual_contribution * total_allocation_future_gold * i_gold4 * i_gold5;

            var i_gold = (i_gold3 + i_gold6).toFixed(2);


             //Silver

             var i_silver1 = 1 + silver_return;
             let i_silver2 = Math.pow(i_silver1, total_invested_first_value5++);
             var i_silver3 = current_savings * total_allocation_currently_silver * i_silver2;

             var i_silver4 = i_silver2 - 1;
             var i_silver5 = i_silver1 / silver_return;
             var i_silver6 = annual_contribution * total_allocation_future_silver * i_silver4 * i_silver5;
    
             var i_silver = (i_silver3 + i_silver6).toFixed(2);
            
             var i_value_at_retirement = parseFloat(i_general_investments) + parseFloat(i_gold) + parseFloat(i_silver);

            
             
             intrest_total += i_value_at_retirement+',';
             final_intrest_array.push(i_value_at_retirement);


           }

        
             var arrayLength = years_invested_so_far_array.length;

             for (var i = 0; i < arrayLength; i++) {
             //console.log(myStringArray[i]);
             var answer = parseFloat(final_intrest_array[i]) - parseFloat(years_invested_so_far_array[i]);
             pmc_intrest_chart.push(answer.toFixed(0));     
    
             }
            // alert('pcm_values_intrest');
             localStorage.setItem('pcm_values_intrest', JSON.stringify(pmc_intrest_chart));
             pcm_update_chart();
  }

 
   /// new switch

   var switchery = {};
   $.fn.initComponents = function () {
       //Init CheckBox Style
       var searchBy = ".js-switch";
       $(this).find(searchBy).each(function (i, html) {
          
           if (!$(html).next().hasClass("switchery")) {
               switchery[html.getAttribute('id')] = new Switchery(html, $(html).data());
           }
       });
   };


$(function () { 
  $("body").initComponents();
 
  sgem_pmc_calculaterminfazcal();
  
   // Scorlll
if (window.innerWidth > 1024) { 
  $(function(){
    $('.sgem-pmc-cal-left').slimScroll({
      height: '700px',
    });
  });
}
   
 if($('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation').length > 0) {
      $('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation').on('keyup', function () {
        sgem_pmc_calculaterminfazcal();
      //pcm_init_chart(); 

       // Removing front zero
      this.value=this.value.replace(/^0+/, '');
        // Keep only digits and decimal points:
      this.value=this.value.replace(/[^\d.]/g, "")
      // Remove duplicated decimal point, if one exists:
      this.value=this.value.replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
      // Keep only two digits past the decimal point:
      this.value=this.value.replace(/\.(\d{0})\d+/, '')
      // Add thousands separators:
      this.value=this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      });
 }
 
 
    
    // Current age validation
    $('#sgem_pmc_age').on('keyup', function () {
       var retirement_age7     = $('#sgem_pmc_retirement_age').val().trim();
       var x = parseFloat(retirement_age7);
      var val = this.value;
      var y = parseFloat(val);
      if (isNaN(y) || y.length>2 || y < 0 || y > x){
         
         this.value ='';
         $('.sgem-pmc-err-msg-age').html('Age cannot be more than 100 and retirement age').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-pmc-err-msg-age').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });


    // Retirement age validation
    $('#sgem_pmc_retirement_age').on('keyup', function () {
      var current_age7     = $('#sgem_pmc_age').val().trim();
      var val = this.value;
      if ($(this).val().length>2 || val < current_age7){    
         this.value ='';
         $('.sgem-pmc-err-msg-rmt').html('Retirement age should be between your age '+current_age7+' and 100').fadeIn();      
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      }); 
    
       
  }else{
     $('.sgem-pmc-err-msg-rmt').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }   
    });

 

    // current saving validation
    $('#sgem_pmc_current_savings').on('keyup', function () {
      var val = this.value;
      var xc = parseInt(val);
      if (isNaN(xc) || $(this).val().length>11){
         
         this.value ='';
         $('.sgem-pmc-err-msg-income').html('Must be at most $900,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-pmc-err-msg-income').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });
  
   // annual con validation
    $('#sgem_pmc_annual_contribution').on('keyup', function () {
      var val = this.value;
       var rc = parseInt(val);
      if (isNaN(rc) || $(this).val().length>11){
         
         this.value ='';
         $('.sgem-pmc-err-msg-anucon').html('Must be at most $900,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('.sgem-pmc-err-msg-anucon').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

    // annual rate validtion
    $('#sgem_pmc_annual_return').on('keyup', function () {
       var val = this.value;
      var w = parseFloat(val);
      if (isNaN(w) || $(this).val().length>3 || w >= 101){
         
         this.value ='';
         $('.sgem-pmc-err-msg-current').html('Annual return cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('.sgem-pmc-err-msg-current').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });
  
   // current total allocation
    $('#sgem_pmc_current_allocation').on('keyup', function () {
      var vala = this.value;
      var g = parseInt(vala);
      if (isNaN(g) || $(this).val().length>3 || g >= 101){
         this.value ='';
         $('.sgem-pmc-err-msg-ftallo').html('Total allocation cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('.sgem-pmc-err-msg-ftallo').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

     // future total allocation
    $('#sgem_pmc_future_allocation').on('keyup', function () {
      var valu = this.value;
      var h = parseFloat(valu);
       if (isNaN(h) || $(this).val().length>3 || h >= 101){         
         this.value ='';
         $('.sgem-pmc-err-msg-ctallo').html('Total allocation cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('.sgem-pmc-err-msg-ctallo').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

   // current total allocation 0 val
    $('#sgem_pmc_current_allocation').on('keyup', function () {
       var futureall72     = $('#sgem_pmc_future_allocation').val().trim();
       var futureall7      = parseFloat(futureall72);
       var val = this.value;
       var j = parseFloat(val);
      //this.value ='';
      if (j==0 && futureall7==0) {
        //this.value ='0';
           $('.sgem-pmc-err-msg-ftallonew').html('Current and Future Total Allocation both fields cannot be 0').fadeIn(); 
       
      }else{
        $('.sgem-pmc-err-msg-ftallonew').html('').fadeOut(); 
        
      }
      
    });

      // future total allocation 0 val
    $('#sgem_pmc_future_allocation').on('keyup', function () {
       var currentall72     = $('#sgem_pmc_current_allocation').val().trim();
       var currentall7      = parseFloat(currentall72);
       var val = this.value;
       var k = parseFloat(val);
       //this.value ='';
      if (currentall7==0 && k==0){
         //this.value ='0'; 
         $('.sgem-pmc-err-msg-ctallonew').html('Current and Future Total Allocation both fields cannot be 0').fadeIn();  
    
       
  }else {
     $('.sgem-pmc-err-msg-ctallonew').html('').fadeOut();  
   
  }    
    }); 

 // current gold and silver comb
    $('#sgem_pmc_current_gold_allocation').on('keyup', function () {
      var current_silver_allocation2 = $('#sgem_pmc_current_silver_allocation').val().trim();
       var current_silver_allocation = parseFloat(current_silver_allocation2);
       var current_gold_allocation2 = $('#sgem_pmc_current_gold_allocation').val().trim();
       var current_gold_allocation = parseFloat(current_gold_allocation2);
      //var val = this.value;
      var total = current_gold_allocation + current_silver_allocation;
      if (total!=100){
         
         $('.sgem-pmc-err-msg-both').html('Both Gold allocation and Silver allocation fields value combined should be 100%').fadeIn();  
               
  }else{
     $('.sgem-pmc-err-msg-both').html('').fadeOut();  
   
  }    
    });

    // current gold and silver comb
    $('#sgem_pmc_current_silver_allocation').on('keyup', function () {
      var current_silver_allocation2 = $('#sgem_pmc_current_silver_allocation').val().trim();
       var current_silver_allocation = parseFloat(current_silver_allocation2);
       var current_gold_allocation2 = $('#sgem_pmc_current_gold_allocation').val().trim();
       var current_gold_allocation = parseFloat(current_gold_allocation2);
      //var val = this.value;
      var total = current_gold_allocation + current_silver_allocation;
      if (total!=100){
         
         $('.sgem-pmc-err-msg-both').html('Both Gold allocation and Silver allocation fields value combined should be 100%').fadeIn();  
               
  }else{
     $('.sgem-pmc-err-msg-both').html('').fadeOut();  
   
  }    
    });

    

    // current gold allocation 100%
    $('#sgem_pmc_current_gold_allocation').on('keyup', function () {
      var val = this.value;
      var a = parseFloat(val);
       if (isNaN(a) || $(this).val().length>3 || a >= 101){
        this.value ='';    
         $('.sgem-pmc-err-msg-death').html('This cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

               
  }else{
     $('.sgem-pmc-err-msg-death').html('').fadeOut(); 
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      });  
   
  }    
    });

     // current silver allocation 100%
    $('#sgem_pmc_current_silver_allocation').on('keyup', function () {
      var val = this.value;
      var q = parseFloat(val);
       if (isNaN(q) || $(this).val().length>3 || q >= 101){
        this.value ='';    
         $('.sgem-pmc-err-msg-per').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('.sgem-pmc-err-msg-per').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });
   


 // future gold and silver comb
    $('#sgem_pmc_future_gold_allocation').on('keyup', function () {
      var future_silver_allocation2 = $('#sgem_pmc_future_silver_allocation').val().trim();
       var future_silver_allocation = parseFloat(future_silver_allocation2);
       var future_gold_allocation2 = $('#sgem_pmc_future_gold_allocation').val().trim();
       var future_gold_allocation = parseFloat(future_gold_allocation2);
      //var val = this.value;
      var total = future_gold_allocation + future_silver_allocation;
      if (total!=100){
         
         $('.sgem-pmc-err-msg-c-both').html('Both Gold allocation and Silver allocation fields value combined should be 100%').fadeIn();  
               
  }else{
     $('.sgem-pmc-err-msg-c-both').html('').fadeOut();  
   
  }    
    });

    // future gold and silver comb
    $('#sgem_pmc_future_silver_allocation').on('keyup', function () {
      var future_silver_allocation2 = $('#sgem_pmc_future_silver_allocation').val().trim();
       var future_silver_allocation = parseFloat(future_silver_allocation2);
       var future_gold_allocation2 = $('#sgem_pmc_future_gold_allocation').val().trim();
       var future_gold_allocation = parseFloat(future_gold_allocation2);
      //var val = this.value;
      var total = future_gold_allocation + future_silver_allocation;
      if (total!=100){
         
         $('.sgem-pmc-err-msg-c-both').html('Both Gold allocation and Silver allocation fields value combined should be 100%').fadeIn();  
               
  }else{
     $('.sgem-pmc-err-msg-c-both').html('').fadeOut();  
   
  }    
    });

    // future gold allocation 100%
    $('#sgem_pmc_future_gold_allocation').on('keyup', function () {
      var val = this.value;
      var t = parseFloat(val);
       if (isNaN(t) || $(this).val().length>3 || t >= 101){
        this.value ='';    
         $('.sgem-pmc-err-msg-f-death').html('This cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

               
  }else{
     $('.sgem-pmc-err-msg-f-death').html('').fadeOut(); 
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      });  
   
  }    
    });

     // future silver allocation 100%
    $('#sgem_pmc_future_silver_allocation').on('keyup', function () {
      var val = this.value;
      var u = parseFloat(val);
       if (isNaN(u) || $(this).val().length>3 || u >= 101){
        this.value ='';    
         $('.sgem-pmc-err-msg-f-per').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('.sgem-pmc-err-msg-f-per').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });
   
$('#sgem_pmc_annual_return,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation').on('keyup', function() {
            $(this).val(function(i, v) {
             return v.replace('%','') + '%';  });
    }); 
   
    //============================================================
       //tippy('[data-tippy-content]');
      
      tippy('.sgem-pmc-info-tooltip', {  
        arrow: true, theme: 'light-border',
        trigger: 'click', 
      });
     
     //pcm_init_chart();

  
  }); // DOCUMENT.READY END

 
var data_pmc_intrest =  JSON.parse(localStorage.getItem('pcm_values_intrest')),
        data_pmc_totalcapital =  JSON.parse(localStorage.getItem('pcm_values_totalcapital')),
        data_pmc_labels =  JSON.parse(localStorage.getItem('pcm_label_years')),
        data_pmc_yaxis =  JSON.parse(localStorage.getItem('pcm_y_axis'));
        

   var ctx = document.getElementById("myChart").getContext("2d");


 var data = {
    labels:  data_pmc_labels,
    datasets: [
      { //[0]
        label: 'Contribution',
        backgroundColor: "#1569B0",
          labels:  ['Total Capital Invested'],
        data: data_pmc_totalcapital,
      },  { // [1]
        label: 'Investment return',
        backgroundColor: "#FEB929",
        labels:  ['Total Interest Accumulated'],
        data: data_pmc_intrest,
      }
    ],
  };

var config = {
    type: 'bar',
    data,
    options: {
      
      local:'en-US',
      responsive: true, 
      interaction: {
            mode:'index'
    },
      scales: {
        x: {
          ticks: {
            color: '#000',
            maxTicksLimit: 3,
            maxRotation: 0,
            lineWidth: 2,
          font: {
            size: 14
          },
        },
          grid: {
                display: false
             },
              stacked: true,
             },
        
        y: {
          min:0,
          max: 2000000,
          grid: {
              borderDash: [4],
              color: "#A3A3A3"
          },
          stacked: true,
          ticks:{
            color: '#000',
            callback: (value, index, values) => { 
				return sgem_ConvertToInternationalCurrencySystemRound(value);
				return new Intl.NumberFormat('en-US', {
				style: 'currency',
					currency: 'USD',
					maximumSignificantDigits: 3
			    }). format(value);    
			//console.log(value);
            },
            font: {
              size: 13,
              family: "'DM Sans'",
            }
          },
          beginAtZero: false           
        }    
      },
      plugins: {
        legend: {
          display: false    
        },
        tooltip: {
          backgroundColor: 'white',
          yAlign: 'bottom',
          borderColor: 'hsl(210, 3%, 70%)',
          borderWidth: 1,
          usePointStyle: true,
          bodyFont: {
            size: 14,
            family: "'DM Sans'",
          },
          titleFont: {
              size: 14,
              family: "'DM Sans'"
          },
          bodySpacing: 1,
          titleColor: '#757575',
          boxWidth: 0,
          boxHeight: 30,
          callbacks: {
            labelTextColor: function(context){
              return myChart.data.datasets.borderColor;
            }, 
            label: function(context) {
              return context.dataset.labels + ': ' + sgem_ConvertToInternationalCurrencySystem(context.dataset.data[context.dataIndex])
            },
            labelPointStyle: function(context) {
              return {
                  pointStyle: 'triangle',
                  rotation: 0
              };
          }
          } 
        }
      }
    }
  };
  
  var myChart = new Chart(ctx, config); 
  

  document.getElementById('sgem_pmc_contribution').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
  document.getElementById('sgem_pmc_investment').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
  document.getElementById('sgem_pmc_contribution_te').innerText = myChart.data.datasets[0].label;
  document.getElementById('sgem_pmc_investment_te').innerText = myChart.data.datasets[1].label;
 
 //console.log('init');

//****************************************************************
 

function pcm_update_chart(){
  //console.log('pcm_update_chart');
  myChart.data.datasets[0].data = JSON.parse(localStorage.getItem('pcm_values_totalcapital'));
  
  myChart.data.labels = JSON.parse(localStorage.getItem('pcm_label_years'));

  myChart.options.scales.y.max = JSON.parse(localStorage.getItem('pcm_y_axis'));
  
  myChart.data.datasets[1].data = JSON.parse(localStorage.getItem('pcm_values_intrest'));  
  
  myChart.update();  

}

 
function toggleData(value){
  const visibilityData = myChart.isDatasetVisible(0);
  if (visibilityData === true ){
    myChart.hide(value);
  }
   if (visibilityData === false ){
    myChart.show(value);
  } 
}
