$(function () { 
  
    if($('#sgem_hmhcia_mortgage_term_years').length > 0) {
      $('#sgem_hmhcia_mortgage_term_years').on('keyup', function () {
        sgem_hmhcia_calculaterminfazcal();
        show_valueonfield();
  
        // Removing front zero
        this.value=this.value.replace(/^0+/, '');
          // Keep only digits and decimal points:
        this.value=this.value.replace(/[^d.]/g, "")
        // Remove duplicated decimal point, if one exists:
        this.value=this.value.replace(/^(d*.)(.*).(.*)$/, '$1$2$3')
        // Keep only two digits past the decimal point:
        this.value=this.value.replace(/.(d{0})d+/, '')
        // Add thousands separators:
        this.value=this.value.replace(/B(?=(d{3})+(?!d))/g, ",");
        
      });
    }
  
    if($('#sgem_hmhcia_mortgage_term_years,#sgem_hmhcia_age,#sgem_hmhcia_annual_return,#sgem_hmhcia_retirement_age,#sgem_hmhcia_current_allocation,#sgem_hmhcia_other_expected_income,#sgem_hmhcia_ethereum,#sgem_hmhcia_expected_mortgage,#sgem_hmhcia_rent_payment').length > 0) {
      $('#sgem_hmhcia_mortgage_term_years,#sgem_hmhcia_age,#sgem_hmhcia_annual_return,#sgem_hmhcia_retirement_age,#sgem_hmhcia_current_allocation,#sgem_hmhcia_other_expected_income,#sgem_hmhcia_ethereum,#sgem_hmhcia_expected_mortgage,#sgem_hmhcia_rent_payment').on('keyup', function () {
        sgem_hmhcia_calculaterminfazcal();
  
       // Removing front zero
        this.value=this.value.replace(/^0+/, '');
          // Keep only digits and decimal points:
        this.value=this.value.replace(/[^d.]/g, "")
        // Remove duplicated decimal point, if one exists:
        this.value=this.value.replace(/^(d*.)(.*).(.*)$/, '$1$2$3')
        // Keep only two digits past the decimal point:
        this.value=this.value.replace(/.(d{0})d+/, '')
        // Add thousands separators:
        this.value=this.value.replace(/B(?=(d{3})+(?!d))/g, ",");
      
      });
    }
  
  // Empty field validation
      $('#sgem_hmhcia_mortgage_term_years,#sgem_hmhcia_annual_return,#sgem_hmhcia_current_allocation,#sgem_hmhcia_ethereum,#sgem_hmhcia_expected_mortgage,#sgem_hmhcia_rent_payment').on('keyup', function () {
        var val = this.value;
        if ($.trim($(this).val()) == ''){      
           this.value ='';
           $('.sgem-hmhcia-err-msg').html('Field cannot be empty').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE"
        });   
  
    }else{
       $('.sgem-hmhcia-err-msg').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
      // other expected field validation
      $('#sgem_hmhcia_other_expected_income').on('keyup', function () {
        var val = this.value;
        if ($.trim($(this).val()) == ''){      
           this.value ='';
  
    }    
      });
  
  // current saving validation
      $('#sgem_hmhcia_annual_return').on('keyup', function () {
        var val = this.value;
        if ($(this).val().length>11){
           
           this.value ='';
           $('.sgem-hmhcia-err-msg-current').html('Must be at most $900,000,000').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE" });  
            
  
    }else{
       $('.sgem-hmhcia-err-msg-current').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
  // pre income validation
      $('#sgem_hmhcia_mortgage_term_years').on('keyup', function () {
        var val = this.value;
        if ($(this).val().length>9){
           
           this.value ='';
           $('.sgem-hmhcia-err-msg-income').html('Must be at most $9,000,000').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE" });  
            
  
    }else{
       $('.sgem-hmhcia-err-msg-income').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
  // Investment rate validtion
      $('#sgem_hmhcia_ethereum').on('keyup', function () {
        var val = this.value;
        if (val > 15 ){
           
           this.value ='';
           $('.sgem-hmhcia-err-msg-per').html('Investment rate of return connot be more than 15%').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE" }); 
  
         
    }else{
       $('.sgem-hmhcia-err-msg-per').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
  // Death age validation
      $('#sgem_hmhcia_expected_mortgage').on('keyup', function () {
         var retirement_age7     = $('#sgem_hmhcia_retirement_age').val().trim();
        var val = this.value;
        if ($(this).val().length>2 || val < retirement_age7){
           
           this.value ='';
           $('.sgem-hmhcia-err-msg-death').html('Life expectancy cannot be more than 100 and less than retirement age').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE" });  
            
  
    }else{
       $('.sgem-hmhcia-err-msg-death').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
  // Current age validation
      $('#sgem_hmhcia_age').on('keyup', function () {
         var retirement_age7     = $('#sgem_hmhcia_retirement_age').val().trim();
        var val = this.value;
        if ($(this).val().length>2 || val < 0 || val > retirement_age7){
           
           this.value ='';
           $('.sgem-hmhcia-err-msg-age').html('Age cannot be more than 100 and retirement age').fadeIn();  
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE" });  
            
  
    }else{
       $('.sgem-hmhcia-err-msg-age').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }    
      });
  
  // Retirement age validation
      $('#sgem_hmhcia_retirement_age').on('keyup', function () {
        var current_age7     = $('#sgem_hmhcia_age').val().trim();
        var val = this.value;
        if ($(this).val().length>2 || val < current_age7){    
           this.value ='';
           $('.sgem-hmhcia-err-msg-rmt').html('Retirement age should be between your age '+current_age7+' and 100').fadeIn();      
            $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE"
        }); 
      
         
    }else{
       $('.sgem-hmhcia-err-msg-rmt').html('').fadeOut();  
      $(this).css({
          "border": "1px solid #707070",
          "background": "#ffffff"
        }); 
    }   
      });
    
    
    
    //============================================================
       //tippy('[data-tippy-content]');
      
      tippy('.sgem-hmhcia-tooltip', {  
        arrow: true, theme: 'light-border',
        trigger: 'click', 
      });
  
  
   /*$('input.inputnumber').keyup(function(event) {
        if (event.which >= 37 && event.which <= 40) return;
        $(this).val(function(index, value) {
          return value
            // Keep only digits and decimal points:
            .replace(/[^d.]/g, "")
            // Remove duplicated decimal point, if one exists:
            .replace(/^(d*.)(.*).(.*)$/, '$1$2$3')
            // Keep only two digits past the decimal point:
            .replace(/.(d{2})d+/, '.$1')
            // Add thousands separators:
            .replace(/B(?=(d{3})+(?!d))/g, ",")
        });
      }); */
      
  
  }); // DOCUMENT.READY END
  
  
    function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
              return false;
          }
          return true;
  }
    
    
  function sgem_hmhcia_ConvertToInternationalCurrencySystem (labelValue) {
  
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
  
  function show_valueonfield(){
  
    var pT_income3    = $('#sgem_hmhcia_mortgage_term_years').val().trim();
    var pT_income4 = pT_income3.replace(/,/g,'');  
    var pT_income5 = parseInt(pT_income4,10);
  
      var monthly_save = (((pT_income5 / 12) / 100 ) * 10).toFixed();
  
        if (isNaN(monthly_save)){
  
            $('#sgem_hmhcia_rent_payment').text('0'); 
  
        }else{
  
          $('#sgem_hmhcia_rent_payment').val(monthly_save);
        
        }
  
         
  
   //Monthly retirement spending 
      var monthly_retirement_spending = ((pT_income5 / 100) * 51)/12;
  
        if (isNaN(monthly_retirement_spending)){
  
            $('#sgem_hmhcia_current_allocation').text('0'); 
  
        }else{
  
          $('#sgem_hmhcia_current_allocation').val(monthly_retirement_spending);
        
        }
  
      
  
  }
  
  function sgem_hmhcia_calculaterminfazcal() {
          
     var current_age     = $('#sgem_hmhcia_age').val().trim();
    
    var current_saving1   = $('#sgem_hmhcia_annual_return').val().trim();
    var current_saving2 = current_saving1.replace(/,/g,'');  
    var current_saving = parseInt(current_saving2,10);
    
    var retirement_age  = $('#sgem_hmhcia_retirement_age').val().trim();
    
    var pT_income1    = $('#sgem_hmhcia_mortgage_term_years').val().trim();
    var pT_income2 = pT_income1.replace(/,/g,'');  
    var pT_income = parseInt(pT_income2,10);
    
    var monthly_save1     = $('#sgem_hmhcia_rent_payment').val().trim();
    var monthly_save2 = monthly_save1.replace(/,/g,'');
      var monthly_saver = parseInt(monthly_save2,10);    
    
    
    var monthlyretirement_spending1 = $('#sgem_hmhcia_current_allocation').val().trim();
    var monthlyretirement_spending2 = monthlyretirement_spending1.replace(/,/g,'');  
    var monthlyretirement_spending = parseInt(monthlyretirement_spending2,10);
    
    var other_income1     = $('#sgem_hmhcia_other_expected_income').val();
    var other_income2 = other_income1.replace(/,/g,'');  
    var other_income = parseInt(other_income2,10);
    
     
    var invesment_rate1   = $('#sgem_hmhcia_ethereum').val().trim();
    var invesment_rate  = invesment_rate1.replace('%', "");
  
    var inflation_rate  = 3 / 100;
    var intrest_rate_d_retirement = 5 / 100;
    var death       = $('#sgem_hmhcia_expected_mortgage').val().trim();
    
   /*   var isValid = true;
    $('#sgem_hmhcia_annual_return, #sgem_hmhcia_retirement_age, #sgem_hmhcia_ethereum, #sgem_hmhcia_age').each(function () {
      if ($.trim($(this).val()) == '') {
        isValid = false;
        $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE"
        });
      } else if( current_age > retirement_age ) {
      console.log(111);
        isValid = false;
        $('.sgem-hmhcia-err-msg').html('Retirement age should be between your age '+current_age+' and 150').fadeIn();    
      } else if( current_age <= retirement_age ) {
        $('.sgem-hmhcia-err-msg').html('').fadeOut();    
      } else if( retirement_age > 150 ) {
      isValid = false;
        $('.sgem-hmhcia-err-msg').html('Cannot be more than 150').fadeIn();   
      }
      else {
        $(this).css({
          "border": "",
          "background": ""
        });
        $('.sgem-hmhcia-err-msg-2, .sgem-hmhcia-err-msg').html('').fadeOut();  
      }
    });
    if (isValid == false) {
      e.preventDefault(); 
    } else { */
        
  
        var growth_rate =  2 / 100;
  
     
        var one = 1;
        var aER = invesment_rate / 100;
        var no_of_years = retirement_age - current_age;
        var retirement_no_of_age = death - retirement_age;
        var oneAER = one + aER;
        let x = Math.pow(oneAER, no_of_years);
        //var w = parseFloat(x); 
        var first_one = x * current_saving;
    
        var annual_saving = monthly_saver * 12;
        var oneplusg = one + growth_rate;
        var rminusg = aER - growth_rate;
        let y = Math.pow(oneplusg, no_of_years);
        var upper_part = x - y;
        var last_part = upper_part / rminusg;
        var finalset = annual_saving * last_part;
  
        var you_will_have = first_one + finalset;
  
  
      
      //*********************************** Second part calculation ******************************************
  
        var oneplusinflation = one + inflation_rate;
        var oneplusintrestatretirement = one + intrest_rate_d_retirement;
        var real_rate_of_return = (oneplusintrestatretirement / oneplusinflation) - 1;
        let rounded_rate_of_return = parseFloat(real_rate_of_return).toFixed(3);
  
  
        var annual_retirement_spending_at_todays_term = (monthlyretirement_spending - other_income) * 12;
         
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
   
        var you_will_need = Math.round(you_will_need2/10000)*10000;
  
        
      // *********************************** Result in percentage ***********************************
        var percentage_result = ((you_will_have / you_will_need) * 100).toFixed();
      
   
        $('#sgem_hmhcia_age_text').text(retirement_age); 
  
       
  
     // NaN & 100 Percentage cap validation 
        
        if (isNaN(you_will_have)){
  
            $('#sgem_hmhcia_you_will_have').text('00.00M'); 
  
        }else{
  
          $('#sgem_hmhcia_you_will_have').text(sgem_hmhcia_ConvertToInternationalCurrencySystem(you_will_have));
        }
  
        if (isNaN(you_will_need)){
  
            $('#sgem_hmhcia_you_will_need').text('00.00M'); 
  
        }else{
  
              $('#sgem_hmhcia_you_will_need').text(sgem_hmhcia_ConvertToInternationalCurrencySystem(you_will_need));
        }
    
        if (isNaN(percentage_result)){
  
            $('#sgem_hmhcia_goal_value').text('0%'); 
  
        }else if (percentage_result > 100) {
  
           $('#sgem_hmhcia_goal_value').text('100%'); 
  
        }else if (percentage_result < 0) {
  
           $('#sgem_hmhcia_goal_value').text('0%'); 
  
        }else{
  
           $('#sgem_hmhcia_goal_value').text(percentage_result + '%'); 
        }
    
    
      
        if (percentage_result >= 95){
  
           var percentage4 = ((percentage_result / 100)*100);
         var percentage5 = (1 * percentage4);
         $('.sgem-hmhcia-precentage-arrow').css("left", percentage5+"%");
  
       }else if ( percentage_result >= 80){
  
         var percentage1 = ((percentage_result / 95)*100);
         var percentage2 = (0.85 * percentage1);
         $('.sgem-hmhcia-precentage-arrow').css("left", percentage2+"%");
       
       }else if ( percentage_result >= 66){
  
           var percentage6 = ((percentage_result / 80)*100);
         var percentage7 = (0.65 * percentage6);
         $('.sgem-hmhcia-precentage-arrow').css("left", percentage7+"%");
  
       }else if(percentage_result <= 65){
               var percentage8 = ((percentage_result / 65)*100);
         var percentage9 = (0.38 * percentage8);
         $('.sgem-hmhcia-precentage-arrow').css("left", percentage9+"%");
  
  
       }
  
  
  // *********************************** Color bar in percentage message ***********************************
     var mainmessage;
  
    
    if (percentage_result >= 95) {
            document.getElementById("mainmessage").style.color = '#4BCC8C';
    } 
    else if (percentage_result >= 80) {
           document.getElementById("mainmessage").style.color = '#1E96FC';
    } 
    else if (percentage_result >= 65) {
               document.getElementById("mainmessage").style.color = '#FFC12E';
    } 
    else {
            document.getElementById("mainmessage").style.color = '#FF5964';
    }
  
    var messageBox = document.getElementById('mainmessage');
    messageBox.innerHTML= mainmessage;
      
      var message;
      var messagetitle;
      var mainmessage;
    
    if (percentage_result >= 95) {
           messagetitle = "You're rocking it. Can you "; 
           mainmessage = "boost it even more?";
         message = "Could your future be any brighter? Let’s find out. Create an account to see opportunities to grow your savings, detect hidden fees and track your future wealth.";
    } 
    else if (percentage_result >= 80) {
           messagetitle = "You're close. Let's "; 
           mainmessage = "get you on track.";
         message = "Just a few finishing touches and you'll be on your way. Create an account to project your wealth and find opportunities to grow your dough.";
    } 
    else if (percentage_result >= 65) {
              messagetitle = "Solid start, but let's "; 
              mainmessage = "close the gap";
          message = "You’re off to the races, but have some catching up to do. Sign up for Retirement Investment to get a detailed forecast, a personalized plan and notifications to stay on top of your finances.";
    } 
    else {
           messagetitle = "Let's get Future You "; 
           mainmessage = "out of the red.";
         message = "There are a few steps you could take to jumpstart your retirement savings. Create an account to reduce your bills, eliminate debt and grow your money.";
    }
      
    var messageBox = document.getElementById('messagetitle');
    messageBox.innerHTML= messagetitle;
    var messageBox = document.getElementById('mainmessage');
    messageBox.innerHTML= mainmessage;
    var messageBox = document.getElementById('message');
    messageBox.innerHTML= message;
    }



    