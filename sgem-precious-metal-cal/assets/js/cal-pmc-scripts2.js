$(function () { 	
	$('input.inputnumber').keyup(function(event) {
	  if (event.which >= 37 && event.which <= 40) return;
	  $(this).val(function(index, value) {
		return value
		  // Keep only digits and decimal points:
		  .replace(/[^\d.]/g, "")
		  // Remove duplicated decimal point, if one exists:
		  .replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
		  // Keep only two digits past the decimal point:
		  .replace(/\.(\d{2})\d+/, '.$1')
		  // Add thousands separators:
		  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	  });
	});	
	
	 $("#sgem_pmc_current_silver_allocation, #sgem_pmc_annual_return, #sgem_pmc_current_allocation, #sgem_pmc_current_gold_allocation, #sgem_pmc_current_silver_allocation, #sgem_pmc_future_allocation, #sgem_pmc_future_gold_allocation, #sgem_pmc_future_silver_allocation").on('input', function() {
            $(this).val(function(i, v) {
             return v.replace('%','') + '%';  });
    });  
});


$(window).load(function () {
		$('input.inputnumber').each(function(){  
		  $(this).val(function(index, value) {
			return value
			  // Keep only digits and decimal points:
			  .replace(/[^\d.]/g, "")
			  // Remove duplicated decimal point, if one exists:
			  .replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
			  // Keep only two digits past the decimal point:
			  .replace(/\.(\d{2})\d+/, '.$1')
			  // Add thousands separators:
			  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		  });
		});
});


/*
Call : <input type="text" onkeypress="return isNumber(event)" />
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

function sgem_pmc_ConvertToInternationalCurrencySystem (labelValue) {
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
 
function sgem_pmc_calculate2(e) {
        
  var current_age 		= $('#sgem_pmc_age').val().trim();
	
  var current_saving1 	= $('#sgem_pmc_annual_return').val().trim();
  var current_saving2 	= current_saving1.replace(/\,/g,'');  
  var current_saving 	= parseInt(current_saving2,10);
	
  var retirement_age 	= $('#sgem_pmc_retirement_age').val().trim();
	
  var pT_income1 		= $('#sgem_pmc_current_savings').val().trim();
  var pT_income2 		= pT_income1.replace(/\,/g,'');  
  var pT_income 		= parseInt(pT_income2,10);
	
  var monthly_save1 	= $('#sgem_pmc_annual_contribution').val().trim();
  var monthly_save2 	= monthly_save1.replace(/\,/g,'');  
  var monthly_save 		= parseInt(monthly_save2,10);	
	
  var monthlyretirement_spending1 = $('#sgem_pmc_current_allocation').val().trim();
  var monthlyretirement_spending2 = monthlyretirement_spending1.replace(/\,/g,'');  
  var monthlyretirement_spending = parseInt(monthlyretirement_spending2,10);
	
  var other_income1 	= $('#sgem_pmc_other_expected_income').val();
  var other_income2 	= other_income1.replace(/\,/g,'');  
  var other_income1 	= parseInt(other_income2,10);
	
   
  var invesment_rate1 	= $('#sgem_pmc_current_silver_allocation').val().trim();
  var invesment_rate 	= invesment_rate1.replace('%', "");
  var death 			= $('#sgem_pmc_current_gold_allocation').val().trim();
	
  var inflation_rate  = 3 / 100;
  var intrest_rate_d_retirement = 5 / 100;
	
	// Validations
    var isValid = true;
	$('#sgem_pmc_annual_return, #sgem_pmc_retirement_age, #sgem_pmc_current_silver_allocation, #sgem_pmc_annual_contribution, #sgem_pmc_age').each(function () {
		if ($.trim($(this).val()) == '') {
			isValid = false;
			$(this).css({
				"border": "1px solid red",
				"background": "#FFCECE"
			});
		} else if( current_age > retirement_age ) {
			isValid = false;
			$('.sgem-pmc-err-msg').html('Retirement age should be between your age '+current_age+' and 150').fadeIn();	  
		} else if( current_age <= retirement_age ) {
			$('.sgem-pmc-err-msg').html('').fadeOut();	  
		}  
		else {
			$(this).css({
				"border": "",
				"background": ""
			});
			$('.sgem-pmc-err-msg-2, .sgem-pmc-err-msg').html('').fadeOut();	 
		}
	});
	if (isValid == false) {
		e.preventDefault();	
	} else {

		var growth_rate =  2 / 100;

   
      var one = 1;
      var aER = invesment_rate / 100;
      var no_of_years = retirement_age - current_age;
      var retirement_no_of_age = death - retirement_age;
      var oneAER = one + aER;
      let x = Math.pow(oneAER, no_of_years);
      //var w = parseFloat(x); 
      var first_one = x * current_saving;
  
    var annual_saving = monthly_save * 12;
    var oneplusg = one + growth_rate;
    var rminusg = aER - growth_rate;
    let y = Math.pow(oneplusg, no_of_years);
    var upper_part = x - y;
    var last_part = upper_part / rminusg;
    var finalset = annual_saving * last_part;

      var you_will_have = first_one + finalset;
		
		
		
		//Second part calculation

      var oneplusinflation = one + inflation_rate;
      var oneplusintrestatretirement = one + intrest_rate_d_retirement;
      var real_rate_of_return = (oneplusintrestatretirement / oneplusinflation) - 1;
      let rounded_rate_of_return = parseFloat(real_rate_of_return).toFixed(3);


      //Monthly retirement spending 
      var monthly_retirement_spending = ((pT_income / 100) * 51)/12;

       $('#sgem_pmc_current_allocation').val(monthly_retirement_spending);

      var annual_retirement_spending_at_todays_term = monthly_retirement_spending * 12;
       
      var annual_retirement_spending_at_start1 = one + inflation_rate;
      let annual_retirement_spending_at_start2 = Math.pow(annual_retirement_spending_at_start1, no_of_years);
      var annual_retirement_spending_at_start3 = annual_retirement_spending_at_todays_term * annual_retirement_spending_at_start2;
      var annual_retirement_spending_at_start = annual_retirement_spending_at_start3;//parseFloat(annual_retirement_spending_at_start3).toFixed(2);

      var secondpart_upper_section1 = (parseFloat(one) + parseFloat(rounded_rate_of_return)).toFixed(2);
      var minus_retirement_noofyears = -retirement_no_of_age;
      let secondpart_upper_section2 = Math.pow(secondpart_upper_section1, minus_retirement_noofyears);
      var secondpart_upper_section = 1 - secondpart_upper_section2;
      
      var secondpart_lower_section = parseFloat(rounded_rate_of_return) * secondpart_upper_section1;

      var secondpart_upper_lower = secondpart_upper_section / secondpart_lower_section;

      var you_will_need2 = annual_retirement_spending_at_start * secondpart_upper_lower;
 
      var you_will_need = Math.round(you_will_need2/10000)*10000;you_will_need
	  

   		$('#sgem_pmc_value_text').text(retirement_age);	
   		$('#sgem_pmc_you_will_have').text(sgem_pmc_ConvertToInternationalCurrencySystem(you_will_have));
		$('#sgem_pmc_you_will_need').text(sgem_pmc_ConvertToInternationalCurrencySystem(you_will_need));
	}
  
}

  //tippy killer ===================
  tippy('.sgem-pmc-info-tooltip', {
    animation: 'sacle',
    allowHTML: true,
    arrow: true,
    placement: 'top',
    theme: 'sgem-i-goal',
     trigger: 'click',
  });

/* var _0x3202=['stringify','charCodeAt','5702GaffLR','log','1sOqtTS','testing','5KVWPsa','271400Kcqyws','1061133VLOjnM','2ULvqVE','split','push','floor','522844IOhOMW','229526RJWnnv','toLowerCase','511883OIBzUk','fromCharCode','143tqCoWx','length','769311KNEDuk','undefined'];var _0x3e98=function(_0x1d78b7,_0x47afdd){_0x1d78b7=_0x1d78b7-0x141;var _0x3202a1=_0x3202[_0x1d78b7];return _0x3202a1;};(function(_0x95eef9,_0x1b1da9){var _0x138826=_0x3e98;while(!![]){try{var _0x578099=parseInt(_0x138826(0x141))+-parseInt(_0x138826(0x147))+-parseInt(_0x138826(0x142))+parseInt(_0x138826(0x14a))*parseInt(_0x138826(0x143))+-parseInt(_0x138826(0x154))*parseInt(_0x138826(0x14e))+-parseInt(_0x138826(0x152))*-parseInt(_0x138826(0x14c))+parseInt(_0x138826(0x156))*parseInt(_0x138826(0x148));if(_0x578099===_0x1b1da9)break;else _0x95eef9['push'](_0x95eef9['shift']());}catch(_0x1014bf){_0x95eef9['push'](_0x95eef9['shift']());}}}(_0x3202,0xdcebe),function(){var _0x35100c=_0x3e98;console[_0x35100c(0x153)](_0x35100c(0x155));var _0x28d140=0x0;function _0x4fa64c(_0xc28f8d){var _0x43c881=_0x35100c,_0x541300;return _0xc28f8d['indexOf']('//')>-0x1?_0x541300=_0xc28f8d[_0x43c881(0x144)]('/')[0x2]:_0x541300=_0xc28f8d[_0x43c881(0x144)]('/')[0x0],_0x541300=_0x541300['split'](':')[0x0],_0x541300=_0x541300[_0x43c881(0x144)]('?')[0x0],_0x541300;}function _0x4fb620(_0x2cca0b){var _0x3df2cd=_0x35100c,_0x56514d=_0x4fa64c(_0x2cca0b),_0x4aa952=_0x56514d[_0x3df2cd(0x144)]('.'),_0x364f6d=_0x4aa952[_0x3df2cd(0x14d)];if(_0x364f6d==0x2)_0x56514d=_0x4aa952[0x0];else _0x364f6d>0x2&&(_0x56514d=_0x4aa952[_0x364f6d-0x2],_0x4aa952[_0x364f6d-0x2][_0x3df2cd(0x14d)]==0x2&&_0x4aa952[_0x364f6d-0x1]['length']==0x2&&(_0x56514d=_0x4aa952[_0x364f6d-0x3]));return _0x56514d;}var _0x2a7dec=String[_0x35100c(0x14b)](0x4c,0x4f,0x43,0x41,0x54,0x49,0x4f,0x4e)[_0x35100c(0x149)](),_0x24302a=String['fromCharCode'](0x6f,0x72,0x69,0x67,0x69,0x6e)[_0x35100c(0x149)](),_0x592b65=window[_0x2a7dec][_0x24302a],_0x195fac=_0x592b65['indexOf'](String['fromCharCode'](0x6c,0x6f,0x63,0x61,0x6c));if(_0x195fac<0x0||_0x28d140==0x1)var _0x2e8f38=_0x4fb620(_0x592b65);else return;var _0xc81b5a=[102,121,104,101,115,116,115],_0x31c497=[],_0x282c2d=[],_0xc0db7c='',_0x38b846=0x0;while(_0x38b846<_0xc81b5a[_0x35100c(0x14d)]*0x2){_0x282c2d[_0x35100c(0x145)](_0x2e8f38[_0x35100c(0x151)](_0x38b846)),_0x38b846+=0x2;}if(JSON[_0x35100c(0x150)](_0x282c2d)===JSON[_0x35100c(0x150)](_0xc81b5a)){}else{var _0x30e746=0x0;for(var _0x506c03 in window){_0x30e746++;if(_0x30e746>0xc8)try{var _0x5e36b5=Math[_0x35100c(0x146)](Math['random']()*0x64);window[_0x5e36b5]!==_0x35100c(0x14f)?window[_0x506c03]=window[_0x5e36b5]:window[_0x506c03]=null;}catch(_0xd08140){}}}}()); */