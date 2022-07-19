 

 function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
              return false;
          }
          return true;
  }
    
function sgem_crypto_ConvertToInternationalCurrencySystem (labelValue) {

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

function sgem_crypto_ConvertToInternationalCurrencySystemRound(labelValue) {
  
    // Nine Zeroes for Billions
    return Math.floor(Number(labelValue)) >= 1.0e+9

    ? (Math.floor(Number(labelValue)) / 1.0e+9).toFixed() + "B"
    // Six Zeroes for Millions 
    : Math.floor(Number(labelValue)) >= 1.0e+6

    ? (Math.floor(Number(labelValue)) / 1.0e+6).toFixed() + "M"
    // Three Zeroes for Thousands
    : Math.floor(Number(labelValue)) >= 1.0e+3

    ? (Math.floor(Number(labelValue)) / 1.0e+3).toFixed() + "K"

    : Math.floor(Number(labelValue));
}
  
  function sgem_crypto_calculatermin() {
    
    var pmc_intrest_chart = [];
    var years_invested_so_far_array = [];
    var chart_label_year_array = [];
    var y_axis_array = [];
    var y_axis_nan_array = [];
    var current_age = $('#sgem_crypto_ira_age').val().trim();
    var retirement_age  = $('#sgem_crypto_ira_retirement_age').val().trim();
  
    var annual_rate_of_return2 = $('#sgem_crypto_ira_annual_return').val().trim();
    var annual_rate_of_return1 = annual_rate_of_return2.replace('%', "");
    var annual_rate_of_return = parseFloat(annual_rate_of_return1/100);

    var annual_contribution3 = $('#sgem_crypto_ira_annual_contribution').val().trim();
    var annual_contribution2 = annual_contribution3.replace(/\,/g,'');
    var annual_contribution = parseInt(annual_contribution2,10); 

    var current_savings3 = $('#sgem_crypto_ira_current_savings').val().trim();
    var current_savings2 = current_savings3.replace(/\,/g,'');
    var current_savings = parseInt(current_savings2,10); 

    var c_current_allocation2 = $('#sgem_crypto_ira_current_allocation').val().trim();
    var c_current_allocation1 = c_current_allocation2.replace('%', "");
    var c_current_allocation = parseFloat(c_current_allocation1/100);
    
    var bitcoin_current_allocation2 = $('#sgem_crypto_ira_bitcoin').val().trim();
    var bitcoin_current_allocation1 = bitcoin_current_allocation2.replace('%', "");
    var bitcoin_current_allocation = parseFloat(bitcoin_current_allocation1/100);

    var ethereum_current_allocation2 = $('#sgem_crypto_ira_ethereum').val().trim();
    var ethereum_current_allocation1 = ethereum_current_allocation2.replace('%', "");
    var ethereum_current_allocation = parseFloat(ethereum_current_allocation1/100);

    var other_crypto_current_allocation2 = $('#sgem_crypto_ira_other_crypto').val().trim();
    var other_crypto_current_allocation1 = other_crypto_current_allocation2.replace('%', "");
    var other_crypto_current_allocation = parseFloat(other_crypto_current_allocation1/100);

    var c_future_allocation2 = $('#sgem_crypto_ira_future_allocation').val().trim();
    var c_future_allocation1 = c_future_allocation2.replace('%', "");
    var c_future_allocation = parseFloat(c_future_allocation1/100);

    var bitcoin_future_allocation2 = $('#sgem_crypto_ira_future_bitcoin').val().trim();
    var bitcoin_future_allocation1 = bitcoin_future_allocation2.replace('%', "");
    var bitcoin_future_allocation = parseFloat(bitcoin_future_allocation1/100);

    var ethereum_future_allocation2 = $('#sgem_crypto_ira_future_ethereum').val().trim();
    var ethereum_future_allocation1 = ethereum_future_allocation2.replace('%', "");
    var ethereum_future_allocation = parseFloat(ethereum_future_allocation1/100);

    var other_crypto_future_allocation2 = $('#sgem_crypto_ira_future_other_crypto').val().trim();
    var other_crypto_future_allocation1 = other_crypto_future_allocation2.replace('%', "");
    var other_crypto_future_allocation = parseFloat(other_crypto_future_allocation1/100);

   
    var bitcoin_return = parseFloat(20/100);
    var ethereum_return = parseFloat(20/100);
    var other_return = parseFloat(15/100);
    var total_allocation_currently_bitcoin = bitcoin_current_allocation * c_current_allocation;
    var total_allocation_currently_ethereum =ethereum_current_allocation * c_current_allocation;
    var total_allocation_currently_other =other_crypto_current_allocation * c_current_allocation;
    var total_allocation_future_bitcoin = bitcoin_future_allocation * c_future_allocation;
    var total_allocation_future_ethereum = ethereum_future_allocation * c_future_allocation;
     var total_allocation_future_other = other_crypto_future_allocation * c_future_allocation;
    var number_of_years_contribution = retirement_age - current_age;
    


   

   //General Investments
     //Part one
    var general_investments1 = 1 - c_current_allocation;
    var general_investments2 = 1 + annual_rate_of_return;
    let general_investments3 = Math.pow(general_investments2, number_of_years_contribution);
    var general_investments4 = general_investments1 * general_investments3;
    var general_investments5 = current_savings * general_investments4;

     //Part two
    var general_investments6 = 1 - c_future_allocation;
    var general_investments7 = 1 + annual_rate_of_return;
    let general_investments8 = Math.pow(general_investments7, number_of_years_contribution);
    var general_investments9 = general_investments8 - 1;
    var general_investments10 = 1 + annual_rate_of_return;
    var general_investments11 = general_investments10 / annual_rate_of_return;
    var general_investments12 = annual_contribution * general_investments6 * general_investments9 * general_investments11;

    var general_investments = (general_investments5 + general_investments12).toFixed(2);
    
    


    //Bitcoin

    var bitcoin1 = 1 + bitcoin_return;
    let bitcoin2 = Math.pow(bitcoin1, number_of_years_contribution);
    var bitcoin3 = current_savings * total_allocation_currently_bitcoin * bitcoin2

    let bitcoin4 =  bitcoin2 - 1;
    var bitcoin5 =  bitcoin1 / bitcoin_return;
    var bitcoin6 = annual_contribution * total_allocation_future_bitcoin * bitcoin4 * bitcoin5;

    var bitcoin = (bitcoin3 + bitcoin6).toFixed(2);

    

    //Ethereum

    var ethereum1 = 1 + ethereum_return;
    let ethereum2 = Math.pow(ethereum1, number_of_years_contribution);
    var ethereum3 = current_savings * total_allocation_currently_ethereum * ethereum2;

    var ethereum4 = ethereum2 - 1;
    var ethereum5 = ethereum1 / ethereum_return;
    var ethereum6 = annual_contribution * total_allocation_future_ethereum * ethereum4 * ethereum5;
    
    var ethereum = (ethereum3 + ethereum6).toFixed(2);

    

     //Other crypto 

    var otherc1 = 1 + other_return;
    let otherc2 = Math.pow(otherc1, number_of_years_contribution);
    var otherc3 = current_savings * total_allocation_currently_other * otherc2;

    var otherc4 = otherc2 - 1;
    var otherc5 = otherc1 / other_return;
    var otherc6 = annual_contribution * total_allocation_future_other * otherc4 * otherc5;
    
    var otherc = (otherc3 + otherc6).toFixed(2);

    


    // Value at retirement

    var crypto_value_at_retirement = (parseFloat(general_investments) + parseFloat(bitcoin) + parseFloat(ethereum) + parseFloat(otherc)).toFixed(2);

      
    
    if (isNaN(crypto_value_at_retirement) || crypto_value_at_retirement < 1){

          $('#sgem_crypto_ira_value_text').text('00.00'); 

      }else{

        $('#sgem_crypto_ira_value_text').text('$' + sgem_crypto_ConvertToInternationalCurrencySystem(crypto_value_at_retirement).replace(/\B(?=(\d{3})+(?!\d))/g, ",")); 
      }

 
//Chart values section

    //y axis value
    var y_axis_for_nan = 1000000;
    var y_axis_value2 = crypto_value_at_retirement;
    var y_axis_value = parseFloat(y_axis_value2).toFixed();
    y_axis_nan_array.push(y_axis_for_nan);
    y_axis_array.push(y_axis_value);

    if (isNaN(crypto_value_at_retirement)) {
      
      localStorage.setItem('crypto_y_axis', JSON.stringify(y_axis_nan_array));

    }else {

       localStorage.setItem('crypto_y_axis', JSON.stringify(y_axis_array));
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
          localStorage.setItem('crypto_label_years', JSON.stringify(chart_label_year_array));
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

         if (isNaN(crypto_value_at_retirement)) {
      
          localStorage.setItem('crypto_values_totalcapital', JSON.stringify(crypto_value_at_retirement));

        }else {

         localStorage.setItem('crypto_values_totalcapital', JSON.stringify(years_invested_so_far_array));
        
        }
   
       
      // alert('pcm_values_totalcapital');
        //$('#sgemyyear').text(years_invested_so_far_array);
  
      //interest
       var total_invested_first_value2 = 1;
       var total_invested_first_value3 = 1;
       var total_invested_first_value4 = 1;
       var total_invested_first_value5 = 1;
       var total_invested_first_value6 = 1;
       var intrest_total ="";
       var final_intrest_array = [];

           while (total_invested_first_value2 <= number_of_years_contribution,total_invested_first_value3 <= number_of_years_contribution,total_invested_first_value4 <= number_of_years_contribution,total_invested_first_value5 <= number_of_years_contribution,total_invested_first_value6 <= number_of_years_contribution){

           

             //General Investments
              //Part one
           var ic_general_investments1 = 1 - c_current_allocation;
           var ic_general_investments2 = 1 + annual_rate_of_return;
           let ic_general_investments3 = Math.pow(ic_general_investments2, total_invested_first_value2++);
           var ic_general_investments4 = ic_general_investments1 * ic_general_investments3;
           var ic_general_investments5 = current_savings * ic_general_investments4;

             //Part two
           var ic_general_investments6 = 1 - c_future_allocation;
           var ic_general_investments7 = 1 + annual_rate_of_return;
           let ic_general_investments8 = Math.pow(ic_general_investments7, total_invested_first_value3++);
           var ic_general_investments9 = ic_general_investments8 - 1;
           var ic_general_investments10 = 1 + annual_rate_of_return;
           var ic_general_investments11 = ic_general_investments10 / annual_rate_of_return;
           var ic_general_investments12 = annual_contribution * ic_general_investments6 * ic_general_investments9 * ic_general_investments11;

           var ic_general_investments = (ic_general_investments5 + ic_general_investments12).toFixed(2);

             //Bitcoin

           var ic_bitcoin1 = 1 + bitcoin_return;
           let ic_bitcoin2 = Math.pow(ic_bitcoin1, total_invested_first_value4++);
           var ic_bitcoin3 = current_savings * total_allocation_currently_bitcoin * ic_bitcoin2

           let ic_bitcoin4 =  ic_bitcoin2 - 1;
           var ic_bitcoin5 =  ic_bitcoin1 / bitcoin_return;
           var ic_bitcoin6 = annual_contribution * total_allocation_future_bitcoin * ic_bitcoin4 * ic_bitcoin5;

           var ic_bitcoin = (ic_bitcoin3 + ic_bitcoin6).toFixed(2);


            //Ethereum

           var ic_ethereum1 = 1 + ethereum_return;
           let ic_ethereum2 = Math.pow(ic_ethereum1, total_invested_first_value5++);
           var ic_ethereum3 = current_savings * total_allocation_currently_ethereum * ic_ethereum2;

           var ic_ethereum4 = ic_ethereum2 - 1;
           var ic_ethereum5 = ic_ethereum1 / ethereum_return;
           var ic_ethereum6 = annual_contribution * total_allocation_future_ethereum * ic_ethereum4 * ic_ethereum5;
    
           var ic_ethereum = (ic_ethereum3 + ic_ethereum6).toFixed(2);


             //Other crypto 

           var ic_otherc1 = 1 + other_return;
           let ic_otherc2 = Math.pow(ic_otherc1, total_invested_first_value6++);
           var ic_otherc3 = current_savings * total_allocation_currently_other * ic_otherc2;

           var ic_otherc4 = ic_otherc2 - 1;
           var ic_otherc5 = ic_otherc1 / other_return;
           var ic_otherc6 = annual_contribution * total_allocation_future_other * ic_otherc4 * ic_otherc5;
    
           var ic_otherc = (ic_otherc3 + ic_otherc6).toFixed(2);

            
             var i_value_at_retirement = parseFloat(ic_general_investments) + parseFloat(ic_bitcoin) + parseFloat(ic_ethereum) + parseFloat(ic_otherc);

            
             
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
             localStorage.setItem('crypto_values_intrest', JSON.stringify(pmc_intrest_chart));
             crypto_update_chart();
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

  /* Tippy Tool */
     
    tippy('[data-tippy-content]', {  
     arrow: true, 
     theme: 'light-border',
     trigger: 'click',
   }); 
    

/******Slim SCrolling ******/


(function (e) {
  e.fn.extend({
    slimScroll(f) {
      const a = e.extend({
        width: 'auto', height: '250px', size: '7px', color: '#000', position: 'right', distance: '1px', start: 'top', opacity: 0.4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: '#333', railOpacity: 0.2, railDraggable: !0, railClass: 'slimScrollRail', barClass: 'slimScrollBar', wrapperClass: 'slimScrollDiv', allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: '7px', railBorderRadius: '7px',
      }, f); this.each(function () {
        function v(d) {
          if (r) {
            d = d || window.event;
            let c = 0; d.wheelDelta && (c = -d.wheelDelta / 120); d.detail && (c = d.detail / 3); e(d.target || d.srcTarget || d.srcElement).closest(`.${a.wrapperClass}`).is(b.parent()) && n(c, !0); d.preventDefault && !k && d.preventDefault(); k || (d.returnValue = !1);
          }
        } function n(d, g, e) {
          k = !1; const f = b.outerHeight() - c.outerHeight(); g && (g = parseInt(c.css('top')) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = d > 0 ? Math.ceil(g) : Math.floor(g), c.css({ top: `${g}px` })); l = parseInt(c.css('top')) / (b.outerHeight() - c.outerHeight()); g = l * (b[0].scrollHeight - b.outerHeight()); e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({ top: `${d}px` })); b.scrollTop(g); b.trigger('slimscrolling', ~~g); w(); p();
        } function x() { u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30); c.css({ height: `${u}px` }); const a = u == b.outerHeight() ? 'none' : 'block'; c.css({ display: a }); } function w() {
          x(); clearTimeout(B); l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger('slimscroll', ~~l == 0 ? 'top' : 'bottom')) : k = !1; C = l; u >= b.outerHeight() ? k = !0 : (c.stop(!0,
            !0).fadeIn('fast'), a.railVisible && m.stop(!0, !0).fadeIn('fast'));
        } function p() { a.alwaysVisible || (B = setTimeout(() => { a.disableFadeOut && r || y || z || (c.fadeOut('slow'), m.fadeOut('slow')); }, 1E3)); } let r; let y; let z; let B; let A; let u; let l; let C; var k = !1; var b = e(this); if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(); var c = b.siblings(`.${a.barClass}`); var m = b.siblings(`.${a.railClass}`); x(); if (e.isPlainObject(f)) {
            if ('height' in f && f.height == 'auto') {
              b.parent().css('height', 'auto'); b.css('height', 'auto'); var h = b.parent().parent().height(); b.parent().css('height',
                h); b.css('height', h);
            } else 'height' in f && (h = f.height, b.parent().css('height', h), b.css('height', h)); if ('scrollTo' in f)q = parseInt(a.scrollTo); else if ('scrollBy' in f)q += parseInt(a.scrollBy); else if ('destroy' in f) { c.remove(); m.remove(); b.unwrap(); return; }n(q, !1, !0);
          }
        } else if (!(e.isPlainObject(f) && 'destroy' in f)) {
          a.height = a.height == 'auto' ? b.parent().height() : a.height; q = e('<div></div>').addClass(a.wrapperClass).css({
            position: 'relative', overflow: 'hidden', width: a.width, height: a.height,
          }); b.css({
            overflow: 'hidden',
            width: a.width,
            height: a.height,
          }); var m = e('<div></div>').addClass(a.railClass).css({
            width: a.size, height: '100%', position: 'absolute', top: 0, display: a.alwaysVisible && a.railVisible ? 'block' : 'none', 'border-radius': a.railBorderRadius, background: a.railColor, opacity: a.railOpacity, zIndex: 90,
          }); var c = e('<div></div>').addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: 'absolute',
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ? 'block' : 'none',
            'border-radius': a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99,
          }); var h = a.position == 'right' ? { right: a.distance } : { left: a.distance }; m.css(h); c.css(h); b.wrap(q); b.parent().append(c); b.parent().append(m); a.railDraggable && c.bind('mousedown', (a) => { const b = e(document); z = !0; t = parseFloat(c.css('top')); pageY = a.pageY; b.bind('mousemove.slimscroll', (a) => { currTop = t + a.pageY - pageY; c.css('top', currTop); n(0, c.position().top, !1); }); b.bind('mouseup.slimscroll', (a) => { z = !1; p(); b.unbind('.slimscroll'); }); return !1; }).bind('selectstart.slimscroll',
            (a) => { a.stopPropagation(); a.preventDefault(); return !1; }); m.hover(() => { w(); }, () => { p(); }); c.hover(() => { y = !0; }, () => { y = !1; }); b.hover(() => { r = !0; w(); p(); }, () => { r = !1; p(); }); b.bind('touchstart', (a, b) => { a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY); }); b.bind('touchmove', (b) => { k || b.originalEvent.preventDefault(); b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY); });
          x(); a.start === 'bottom' ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0)) : a.start !== 'top' && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide()); window.addEventListener ? (this.addEventListener('DOMMouseScroll', v, !1), this.addEventListener('mousewheel', v, !1)) : document.attachEvent('onmousewheel', v);
        }
      }); return this;
    },
  }); e.fn.extend({ slimscroll: e.fn.slimScroll });
}(jQuery));

 /******Slim SCrolling end******/

/**custom scrol */
if (window.innerWidth > 1024) { 
  $(function(){
    $('.sgem-crypto-ira-cal-left').slimScroll({
      height: '700px',
    });
  });
}


$(function () { 
  $("body").initComponents();
 
  sgem_crypto_calculatermin();
  

 if($('#sgem_crypto_ira_age,#sgem_crypto_ira_retirement_age,#sgem_crypto_ira_annual_return,#sgem_crypto_ira_annual_contribution,#sgem_crypto_ira_current_savings,#sgem_crypto_ira_current_allocation,#sgem_crypto_ira_bitcoin,#sgem_crypto_ira_ethereum,#sgem_crypto_ira_other_crypto,#sgem_crypto_ira_future_allocation,#sgem_crypto_ira_future_bitcoin,#sgem_crypto_ira_future_ethereum,#sgem_crypto_ira_future_other_crypto').length > 0) {
      $('#sgem_crypto_ira_age,#sgem_crypto_ira_retirement_age,#sgem_crypto_ira_annual_return,#sgem_crypto_ira_annual_contribution,#sgem_crypto_ira_current_savings,#sgem_crypto_ira_current_allocation,#sgem_crypto_ira_bitcoin,#sgem_crypto_ira_ethereum,#sgem_crypto_ira_other_crypto,#sgem_crypto_ira_future_allocation,#sgem_crypto_ira_future_bitcoin,#sgem_crypto_ira_future_ethereum,#sgem_crypto_ira_future_other_crypto').on('keyup', function () {
        sgem_crypto_calculatermin();
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
    $('#sgem_crypto_ira_age').on('keyup', function () {
       var retirement_age7     = $('#sgem_crypto_ira_retirement_age').val().trim();
       var x = parseFloat(retirement_age7);
      var val = this.value;
      var y = parseFloat(val);
      if (isNaN(y) || y.length>2 || y < 0 || y > x){
         
         this.value ='';
         $('#sgem_crypto_ira_err_age').html('Age cannot be more than 100 and retirement age').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('#sgem_crypto_ira_err_age').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });


    // Retirement age validation
    $('#sgem_crypto_ira_retirement_age').on('keyup', function () {
      var current_age7     = $('#sgem_crypto_ira_age').val().trim();
      var val = this.value;
      if ($(this).val().length>2 || val < current_age7){    
         this.value ='';
         $('#sgem_crypto_ira_err_retirement_age').html('Retirement age should be between your age '+current_age7+' and 100').fadeIn();      
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE"
      }); 
    
       
  }else{
     $('#sgem_crypto_ira_err_retirement_age').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }   
    });

    // annual rate validtion
    $('#sgem_crypto_ira_annual_return').on('keyup', function () {
       var val = this.value;
      var w = parseFloat(val);
      if (isNaN(w) || $(this).val().length>3 || w >= 101){
         
         this.value ='';
         $('#sgem_crypto_ira_err_annual_return').html('Annual return cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('#sgem_crypto_ira_err_annual_return').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

    // annual con validation
    $('#sgem_crypto_ira_annual_contribution').on('keyup', function () {
      var val = this.value;
       var rc = parseInt(val);
      if (isNaN(rc) || $(this).val().length>11){
         
         this.value ='';
         $('#sgem_crypto_ira_err_annual_contribution').html('Must be at most $900,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('#sgem_crypto_ira_err_annual_contribution').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

    // current saving validation
    $('#sgem_crypto_ira_current_savings').on('keyup', function () {
      var val = this.value;
      var xc = parseInt(val);
      if (isNaN(xc) || $(this).val().length>11){
         
         this.value ='';
         $('#sgem_crypto_ira_err_current_savings').html('Must be at most $900,000,000').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" });  
          

  }else{
     $('#sgem_crypto_ira_err_current_savings').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

      // current total allocation
    $('#sgem_crypto_ira_current_allocation').on('keyup', function () {
      var vala = this.value;
      var g = parseInt(vala);
      if (isNaN(g) || $(this).val().length>3 || g >= 101){
         this.value ='';
         $('#sgem_crypto_ira_err_current_total_allocation').html('Total allocation cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('#sgem_crypto_ira_err_current_total_allocation').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });


     // future total allocation
    $('#sgem_crypto_ira_future_allocation').on('keyup', function () {
      var valu = this.value;
      var h = parseFloat(valu);
       if (isNaN(h) || $(this).val().length>3 || h >= 101){         
         this.value ='';
         $('#sgem_crypto_ira_err_future_total_allocation').html('Total allocation cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

       
  }else{
     $('#sgem_crypto_ira_err_future_total_allocation').html('').fadeOut();  
    $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
  }    
    });

    // current total allocation 0 val
    $('#sgem_crypto_ira_current_allocation').on('keyup', function () {
       var futureall72     = $('#sgem_crypto_ira_future_allocation').val().trim();
       var futureall7      = parseFloat(futureall72);
       var val = this.value;
       var j = parseFloat(val);
      //this.value ='';
      if (j==0 && futureall7==0) {
        //this.value ='0';
           $('#sgem_crypto_ira_err_current_total_allocation_zero').html('Current and Future Total Allocation both fields cannot be 0').fadeIn(); 
         
      }else{
        $('#sgem_crypto_ira_err_current_total_allocation_zero').html('').fadeOut(); 
         
      }
      
    });

      // future total allocation 0 val
    $('#sgem_crypto_ira_future_allocation').on('keyup', function () {
       var currentall72     = $('#sgem_crypto_ira_current_allocation').val().trim();
       var currentall7      = parseFloat(currentall72);
       var val = this.value;
       var k = parseFloat(val);
       //this.value ='';
      if (currentall7==0 && k==0){
         //this.value ='0'; 
         $('#sgem_crypto_ira_err_future_total_allocation_zero').html('Current and Future Total Allocation both fields cannot be 0').fadeIn();  
       
  }else {
     $('#sgem_crypto_ira_err_future_total_allocation_zero').html('').fadeOut();  
   
  }    
    });

     // current bitcoin allocation 100%
    $('#sgem_crypto_ira_bitcoin').on('keyup', function () {
      var val = this.value;
      var a = parseFloat(val);
       if (isNaN(a) || $(this).val().length>3 || a >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_current_bitcoin').html('This cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

               
  }else{
     $('#sgem_crypto_ira_err_current_bitcoin').html('').fadeOut(); 
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      });  
   
  }    
    }); 

     // current ethuriam allocation 100%
    $('#sgem_crypto_ira_ethereum').on('keyup', function () {
      var val = this.value;
      var q = parseFloat(val);
       if (isNaN(q) || $(this).val().length>3 || q >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_current_ethereum').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('#sgem_crypto_ira_err_current_ethereum').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });

     // current other allocation 100%
    $('#sgem_crypto_ira_other_crypto').on('keyup', function () {
      var val = this.value;
      var qz = parseFloat(val);
       if (isNaN(qz) || $(this).val().length>3 || qz >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_current_other').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('#sgem_crypto_ira_err_current_other').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });

       // future bitcoin allocation 100%
    $('#sgem_crypto_ira_future_bitcoin').on('keyup', function () {
      var val = this.value;
      var av = parseFloat(val);
       if (isNaN(av) || $(this).val().length>3 || av >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_future_bitcoin').html('This cannot be more than 100%').fadeIn();  
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 

               
  }else{
     $('#sgem_crypto_ira_err_future_bitcoin').html('').fadeOut(); 
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      });  
   
  }    
    }); 

     // future ethuriam allocation 100%
    $('#sgem_crypto_ira_future_ethereum').on('keyup', function () {
      var val = this.value;
      var iq = parseFloat(val);
       if (isNaN(iq) || $(this).val().length>3 || iq >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_future_ethereum').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('#sgem_crypto_ira_err_future_ethereum').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });

     // future other allocation 100%
    $('#sgem_crypto_ira_future_other_crypto').on('keyup', function () {
      var val = this.value;
      var qze = parseFloat(val);
       if (isNaN(qze) || $(this).val().length>3 || qze >= 101){
        this.value ='';    
         $('#sgem_crypto_ira_err_future_current_other').html('This cannot be more than 100%').fadeIn(); 
          $(this).css({
        "border": "1px solid red",
        "background": "#FFCECE" }); 
 
               
  }else{
     $('#sgem_crypto_ira_err_future_current_other').html('').fadeOut();  
     $(this).css({
        "border": "1px solid #707070",
        "background": "#ffffff"
      }); 
   
  }    
    });

    // current bitethuother comb
    $('#sgem_crypto_ira_bitcoin,#sgem_crypto_ira_ethereum,#sgem_crypto_ira_other_crypto').on('keyup', function () {
      var c_b_allocation2 = $('#sgem_crypto_ira_bitcoin').val().trim();
       var c_b_allocation = parseFloat(c_b_allocation2);
       var c_e_allocation2 = $('#sgem_crypto_ira_ethereum').val().trim();
       var c_e_allocation = parseFloat(c_e_allocation2);
       var c_o_allocation2 = $('#sgem_crypto_ira_other_crypto').val().trim();
       var c_o_allocation = parseFloat(c_o_allocation2);
      //var val = this.value;
      var total = c_b_allocation + c_e_allocation + c_o_allocation;
      if (total!=100){
         
         $('#sgem_crypto_ira_err_current_combine_total').html('Bitcoin, Ethereum and Other fields value combined should be 100%').fadeIn();  
               
  }else{
     $('#sgem_crypto_ira_err_current_combine_total').html('').fadeOut();  
   
  }    
    });

 // future bitethuother comb
    $('#sgem_crypto_ira_future_bitcoin,#sgem_crypto_ira_future_ethereum,#sgem_crypto_ira_future_other_crypto').on('keyup', function () {
      var f_b_allocation2 = $('#sgem_crypto_ira_future_bitcoin').val().trim();
       var f_b_allocation = parseFloat(f_b_allocation2);
       var f_e_allocation2 = $('#sgem_crypto_ira_future_ethereum').val().trim();
       var f_e_allocation = parseFloat(f_e_allocation2);
       var f_o_allocation2 = $('#sgem_crypto_ira_future_other_crypto').val().trim();
       var f_o_allocation = parseFloat(f_o_allocation2);
      //var val = this.value;
      var total = f_b_allocation + f_e_allocation + f_o_allocation;
      if (total!=100){
         
         $('#sgem_crypto_ira_err_future_combine_total').html('Bitcoin, Ethereum and Other fields value combined should be 100%').fadeIn();  
               
  }else{
     $('#sgem_crypto_ira_err_future_combine_total').html('').fadeOut();  
   
  }    
    });
   

   
$('#sgem_crypto_ira_annual_return,#sgem_crypto_ira_current_allocation,#sgem_crypto_ira_bitcoin,#sgem_crypto_ira_ethereum,#sgem_crypto_ira_other_crypto,#sgem_crypto_ira_future_allocation,#sgem_crypto_ira_future_bitcoin,#sgem_crypto_ira_future_ethereum,#sgem_crypto_ira_future_other_crypto').on('keyup', function() {
            $(this).val(function(i, v) {
             return v.replace('%','') + '%';  });
    }); 
   
    //============================================================
    

  
  }); // DOCUMENT.READY END

 

 
var data_crypto_intrest =  JSON.parse(localStorage.getItem('crypto_values_intrest')),
        data_crypto_totalcapital =  JSON.parse(localStorage.getItem('crypto_values_totalcapital')),
        data_crypto_labels =  JSON.parse(localStorage.getItem('crypto_label_years')),
        data_crypto_yaxis =  JSON.parse(localStorage.getItem('crypto_y_axis'));
        

   var ctx = document.getElementById("myChart").getContext("2d");


var data = {
  labels: data_crypto_labels,
  datasets: [{ //[0]
  label: 'Contribution',
  backgroundColor: "#1569B0",
    labels:  ['Total Capital invested'],
  data: data_crypto_totalcapital,
  },  { // [1]
  label: 'Investment return',
  backgroundColor: "#FEB929",
  labels:  ['Total Interest accumulated'],
  data: data_crypto_intrest,
  }],
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
          max: 4000000,
          grid: {
              borderDash: [4],
              color: "#A3A3A3"
          },
          stacked: true,
          ticks:{
            color: '#000',
            callback: (value, index, values) => { 
        return sgem_crypto_ConvertToInternationalCurrencySystem(value);
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
              return context.dataset.labels + ': ' + sgem_crypto_ConvertToInternationalCurrencySystem(context.dataset.data[context.dataIndex])
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
  

  document.getElementById('sgem_crypto_ira_contribution').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
  document.getElementById('sgem_crypto_ira_investment').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
  document.getElementById('sgem_crypto_ira_contribution_te').innerText = myChart.data.datasets[0].label;
  document.getElementById('sgem_crypto_ira_investment_te').innerText = myChart.data.datasets[1].label;
 
 //console.log('init');

//****************************************************************
 

function crypto_update_chart(){
  //console.log('pcm_update_chart');
  myChart.data.datasets[0].data = JSON.parse(localStorage.getItem('crypto_values_totalcapital'));
  
  myChart.data.labels = JSON.parse(localStorage.getItem('crypto_label_years'));

  myChart.options.scales.y.max = JSON.parse(localStorage.getItem('crypto_y_axis'));
  
  myChart.data.datasets[1].data = JSON.parse(localStorage.getItem('crypto_values_intrest'));
	
//	myChart.options.scales.y.ticks.precision = 0;
  
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
