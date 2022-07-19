 

 function isNumber(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
              return false;
          }
          return true;
  }
    

  
  function sgem_pmc_calculaterminfazcal() {
    
    var pmc_intrest_chart = [];
    var years_invested_so_far_array = [];
    var chart_label_year_array = [];
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

    var death  = $('#sgem_pmc_my_life_expectancy').val().trim();
    var gold_return = parseFloat(10.91/100);
    var silver_return = parseFloat(7.90/100);
    var total_allocation_currently_gold = gold_current_allocation * pm_current_allocation;
    var total_allocation_currently_silver =silver_current_allocation * pm_current_allocation;
    var total_allocation_future_gold = gold_future_allocation * pm_future_allocation;
    var total_allocation_future_silver = silver_future_allocation * pm_future_allocation;
    var number_of_years_contribution = retirement_age - current_age;
    var expected_years_of_retirement = death - retirement_age;


   

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

    var value_at_retirement = parseFloat(general_investments) + parseFloat(gold) + parseFloat(silver);

    $('#sgem_pmc_value_text').text('$' + value_at_retirement); 
    
    
//Chart values section




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


    //total capital invested
    var total_invested_first_value = 1;
    var years_invested_so_far ="";
   

        while (total_invested_first_value <= number_of_years_contribution) {
          var total_capital_invested = current_savings+(annual_contribution*total_invested_first_value++);
          years_invested_so_far += total_capital_invested+',';
          years_invested_so_far_array.push(total_capital_invested);
        }
       localStorage.setItem('pcm_values_totalcapital', JSON.stringify(years_invested_so_far_array));
       
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
             
             localStorage.setItem('pcm_values_intrest', JSON.stringify(pmc_intrest_chart));
             pcm_load_chart();
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


  $('.sgem-pmc-cal-left').slimScroll({
      height: '700px',
    });
   
 if($('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation,sgem_pmc_my_life_expectancy').length > 0) {
      $('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation,sgem_pmc_my_life_expectancy').on('keyup', function () {
        sgem_pmc_calculaterminfazcal();
      });
 }
    
    
    //============================================================
       //tippy('[data-tippy-content]');
      
      tippy('.sgem-pmc-info-tooltip', {  
        arrow: true, theme: 'light-border',
        trigger: 'click', 
      });
  
  

         



    if($('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation,sgem_pmc_my_life_expectancy').length > 0) {
      $('#sgem_pmc_age,#sgem_pmc_retirement_age,#sgem_pmc_annual_return,#sgem_pmc_annual_contribution,#sgem_pmc_current_savings,#sgem_pmc_current_allocation,#sgem_pmc_current_gold_allocation,#sgem_pmc_current_silver_allocation,#sgem_pmc_future_allocation,#sgem_pmc_future_gold_allocation,#sgem_pmc_future_silver_allocation,sgem_pmc_my_life_expectancy').on('keyup', function () {
      pcm_load_chart();


      });
 }      
   
  
  }); // DOCUMENT.READY END

function toggleData(value){
  const visibilityData = myChart.isDatasetVisible(0);
  if (visibilityData === true ){
    myChart.hide(value);
  }
   if (visibilityData === false ){
    myChart.show(value);
  } 
}

function pcm_load_chart(){

   // setup 
const data_pmc_intrest =  JSON.parse(localStorage.getItem('pcm_values_intrest')),
        data_pmc_totalcapital =  JSON.parse(localStorage.getItem('pcm_values_totalcapital')),
        data_pmc_labels =  JSON.parse(localStorage.getItem('pcm_label_years'));
        

 const ctx = document.getElementById("myChart").getContext("2d");     
 const data = {
    labels:  data_pmc_labels,
    datasets: [{ //[0]
    label: 'Contribution',
    backgroundColor: "#1569B0",
      labels:  ['Total Capital invested'],
    data: data_pmc_totalcapital,
  },  { // [1]
    label: 'Investment return',
    backgroundColor: "#FEB929",
    labels:  ['Total Interest accumulated'],
    data: data_pmc_intrest,
  }],
  };

  // config 
  const config = {
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
          max: 1000000,
          grid: {
              borderDash: [4],
              color: "#A3A3A3"
          },
          stacked: true,
          ticks:{
            color: '#000',
            callback: (value, index, values) => { return '$' + value / 1e6 + 'M';
  return new Intl.NumberFormat('en-US', {style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 3
            }). format(value);            
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
              return context.dataset.labels + ': ' + context.dataset.data[context.dataIndex]
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

  // render init block
  let myChart = new Chart(
  document.getElementById("myChart"),
    config
  ); 
 myChart.destroy();

let myChart = new Chart(
  document.getElementById("myChart"),
    config
  ); 


 


document.getElementById('sgem_pmc_contribution').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
document.getElementById('sgem_pmc_investment').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('sgem_pmc_contribution_te').innerText = myChart.data.datasets[0].label;
document.getElementById('sgem_pmc_investment_te').innerText = myChart.data.datasets[1].label;


}




