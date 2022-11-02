/**
 * Percentage
 */

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
	
	 $("#sgem_hmhcia_expected_mortgage").on('input', function() {
            $(this).val(function(i, v) {
             return v.replace('%','') + '%';  });
    });  
});


/**
 * Toolt Tip
 */
/* Tippy Tool */
     
tippy('[data-tippy-content]', {  
  arrow: true, 
  theme: 'light-border',
   trigger: 'click',
}); 

  
  
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
    
$(document).ready(function() {
  if ($('.sgem-hmhcia-cal-wrapper').width() < 1024) {
      $('.sgem-hmhcia-cal-left').addClass('sgem-hmhcia-cal-left-add-class');
      $('.sgem-hmhcia-cal-right').addClass('sgem-hmhcia-cal-right-add-class');
  }
  else {
      $('.sgem-hmhcia-cal-left').removeClass('sgem-hmhcia-cal-left-add-class');
      $('.sgem-hmhcia-cal-right').removeClass('sgem-hmhcia-cal-right-add-class');
  }

  if ($('.sgem-hmhcia-cal-main-id').width() < 650) {
      $('.sgem-hmhcia-cal-wrapper').addClass('sgem-hmhcia-wrapper-add-mobile');
  }
  else {
      $('.sgem-hmhcia-cal-wrapper').removeClass('sgem-hmhcia-wrapper-add-mobile');
  }

  $(window).on('resize', function() {
  if ($('.sgem-hmhcia-cal-wrapper').width() < 1024) {
      $('.sgem-hmhcia-cal-left').addClass('sgem-hmhcia-cal-left-add-class');
      $('.sgem-hmhcia-cal-right').addClass('sgem-hmhcia-cal-right-add-class');
  }
  else {
      $('.sgem-hmhcia-cal-left').removeClass('sgem-hmhcia-cal-left-add-class');
      $('.sgem-hmhcia-cal-right').removeClass('sgem-hmhcia-cal-right-add-class');
  }
  }).trigger('resize');

  $(window).on('resize', function() {
     if ($('.sgem-hmhcia-cal-main-id').width() < 650) {
          $('.sgem-hmhcia-cal-wrapper').addClass('sgem-hmhcia-wrapper-add-mobile');
     }
     else {
          $('.sgem-hmhcia-cal-wrapper').removeClass('sgem-hmhcia-wrapper-add-mobile');
     }
  }).trigger('resize');

}); 

// DOCUMENT.READY END


