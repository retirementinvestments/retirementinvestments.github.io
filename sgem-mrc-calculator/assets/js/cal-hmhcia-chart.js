// setup 
const data = {
  labels: ['Principle & interest','Property tax','Insurance','PMI'],
  datasets: [{
    label: 'Chart',
    data: [300, 50, 100, 130],
    backgroundColor: [
      '#FFB822',
      '#5C78FF',
      '#FA4380',
      '#36D154'
    ],
    // hoverOffset: 4
  }]
};

var calby = $(".sgem-hmhcia-calculate-by:checked").val();

hmhciaGenerateDochart(calby, data);

function hmhciaGenerateDochart(calby, data) {
  const centerText = {
    id: 'centerText',
    beforeDatasetsDraw(chart, args, options) {
      const {ctx, chartArea: {left, right, top, bottom, width, height}} = 
        chart;

      ctx.save();

      const textTotal = parseFloat(chart.data.datasets[0].data[0]) + 
                        parseFloat(chart.data.datasets[0].data[1]) +
                        parseFloat(chart.data.datasets[0].data[2]) +
                        parseFloat(chart.data.datasets[0].data[3]);

      const totalValue = '$' + textTotal;

      ctx.font = '13px DM SANS';
      ctx.fillStyle = '#A3A3A3';
      ctx.textAlign = 'center';
      ctx.fillText('Total monthly payment', width / 2 ,height / 2 + top);
      ctx.restore();

      ctx.font = '25px DM Serif Display';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.fillText(totalValue, width / 2 ,height / 2 + 30);
      ctx.restore();
    }
  };

  // 
    const config = {
      type: 'doughnut',
      data: data,
        options: {
            cutout: 80,
            plugins: {
            legend: {
              display: false,    
            },
      tooltip: {
        
        backgroundColor: 'white',
              borderColor: 'hsl(210, 3%, 70%)',
              borderWidth: 1,
              usePointStyle: true,
              bodyFont: {
                size: 14,
                family: "'DM Sans'",
              },
              bodySpacing: 1,
              boxWidth: 0,
              boxHeight: 20,
        
        callbacks: {
          labelTextColor: function(context){
            return myChart.data.datasets.borderColor;
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
      },
      plugins: [centerText]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    ); 


    // 
    if (calby == 'income') {
      document.getElementById('sgem_hmhcia_principle_interest').style.backgroundColor = myChart.data.datasets[0].backgroundColor[0];
      document.getElementById('sgem_hmhcia_principle_interest_te').innerText = myChart.data.labels[0];
      document.getElementById('sgem_hmhcia_interest_value').innerText = myChart.data.datasets[0].data[0];

      document.getElementById('sgem_hmhcia_property').style.backgroundColor = myChart.data.datasets[0].backgroundColor[1];
      document.getElementById('sgem_hmhcia_property_te').innerText = myChart.data.labels[1];
      document.getElementById('sgem_hmhcia_property_value').innerText = myChart.data.datasets[0].data[1];

      document.getElementById('sgem_hmhcia_insurance').style.backgroundColor = myChart.data.datasets[0].backgroundColor[2];
      document.getElementById('sgem_hmhcia_insurance_te').innerText = myChart.data.labels[2];
      document.getElementById('sgem_hmhcia_insurance_value').innerText = myChart.data.datasets[0].data[2];

      document.getElementById('sgem_hmhcia_pmi').style.backgroundColor = myChart.data.datasets[0].backgroundColor[3];
      document.getElementById('sgem_hmhcia_pmi_te').innerText = myChart.data.labels[3];
      document.getElementById('sgem_hmhcia_pmi_value').innerText = myChart.data.datasets[0].data[3];
    }
    else {
      document.getElementById('sgem_hmhcia_principle_interest').style.backgroundColor = myChart.data.datasets[0].backgroundColor[0];
      document.getElementById('sgem_hmhcia_principle_interest_te').innerText = myChart.data.labels[0];
      document.getElementById('sgem_hmhcia_interest_value').innerText = myChart.data.datasets[0].data[0];

      document.getElementById('sgem_hmhcia_pmi').style.backgroundColor = myChart.data.datasets[0].backgroundColor[3];
      document.getElementById('sgem_hmhcia_pmi_te').innerText = myChart.data.labels[3];
      document.getElementById('sgem_hmhcia_pmi_value').innerText = myChart.data.datasets[0].data[3];
    }
}






// var sliderData = document.getElementById('sgem-hmhcia-ranger');

sgemGenarateSlider(calby);


function sgemGenarateSlider (calby) {
  
  var ranger = document.getElementById('sgem-hmhcia-ranger');
  var sgemimgpig =  document.getElementById('sgem-hmhcia-image-pig');
  var sgemimghouse =  document.getElementById('sgem-hmhcia-image-house');
  var width = sgemimgpig.width;
  var height = sgemimgpig.height;
  var width = sgemimghouse.width;
  var height = sgemimghouse.height;
  ranger.onchange = function(){
      sgemimgpig.width = width / (ranger.value / 40);
      sgemimgpig.height = height / (ranger.value / 40);

      sgemimghouse.width = width * (ranger.value / 70);
      sgemimghouse.height = height * (ranger.value / 70);
  }
}
 

var hmhciaValueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $hmhciaValueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($hmhciaValueBubble.length) {
    $hmhciaValueBubble[0].style.left = Math.ceil(position) + 'px';
    $hmhciaValueBubble[0].innerHTML = value;
  }
}

$(function() {
  const $inputRange = $('.sgem-hmhcia-range');
     
  $inputRange.rangeslider({
    polyfill: false,
    fillClass: 'rangeslider__fill',

      onInit: function() {
        this.$range.append($(hmhciaValueBubble));
        updateValueBubble(null, null, this);
      },
    
      onSlide: function(pos, value) {
        updateValueBubble(pos, value, this);
      },
  });

  $('.sgem-hmhcia-range').rangeslider('update', true);
  
  //   load values to input
  $('.sgem-hmhcia-range').val(90).change();
});