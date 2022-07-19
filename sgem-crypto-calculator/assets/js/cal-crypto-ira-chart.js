 
 
 // setup 
 const data = {
  labels: ['2020 Year','Year 2021', 'Year 2022', 'Year 2023', 'Year 2024', 'Year 2025', 'Year 2026', 'Year 2027', 'Year 2028', 'Year 2029','2030 year', 'Year 2031', 'Year 2032', 'Year 2033', 'Year 2034', 'Year 2035', 'Year 2036', 'Year 2037', 'Year 2038', 'Year 2039', '2040 Year'],
  datasets: [{ //[0]
  label: 'Contribution',
  backgroundColor: "#1569B0",
    labels:  ['Total Capital invested'],
  data: [230000,250000,260000,270000,290000,300000,310000,330000,340000,360000,370000,390000,400000,420000,440000,450000,470000,490000,510000,520000,540000],
},  { // [1]
  label: 'Investment return',
  backgroundColor: "#FEB929",
  labels:  ['Total Interest accumulated'],
  data: [310000,350000,390000,410000,450000,490000,510000,550000,590000,610000,650000,690000,710000,750000,790000,810000,850000,890000,910000,950000,990000],
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
        max: 3000000,
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
                                                        } ). format(value);            
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
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  ); 

document.getElementById('sgem_crypto_ira_contribution').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
          document.getElementById('sgem_crypto_ira_investment').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('sgem_crypto_ira_contribution_te').innerText = myChart.data.datasets[0].label;
 
 document.getElementById('sgem_crypto_ira_investment_te').innerText = myChart.data.datasets[1].label;

function toggleData(value){
  const visibilityData = myChart.isDatasetVisible(0);
  if (visibilityData === true ){
    myChart.hide(value);
  }
   if (visibilityData === false ){
    myChart.show(value);
  } 
}

