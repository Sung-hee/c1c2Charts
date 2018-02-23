$(function stock(){
  Highcharts.setOptions({
    global : {
      useUTC : false
    }
  });
  function requestData(){
    setInterval(function (){
      $.ajax({
        url: 'http://61.72.187.6/phps/marketPower',
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data){
          _chart.series[0].setData(data);
        },
        cache: false
      });
    }, 5000)
  }
  $.getJSON('http://61.72.187.6/phps/marketPower' , function (data) {

      _chart = new Highcharts.stockChart('container', {

          chart: {
            renderTo: 'container',
            type: 'arearange',
            // marginTop: 20,
            events: {
              load: requestData
            }
          },
          scrollbar : {
            enabled: false
          },
          navigator: {
            enabled: false
          },
          rangeSelector: {
            inputEnabled: false,
            labelStyle: {
                visibility: 'hidden'
            },
            buttonTheme: {
              visibility: 'hidden'
            },
            selected: 1
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          // tooltip: {
          //     valueSuffix: '°C'
          // },
          series: [{
              name: 'MaketPower',
              data: data
          }]
      });
  });
});
