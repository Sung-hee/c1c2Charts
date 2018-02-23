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
            buttonTheme: {
              fill: 'none',
              stroke: 'none',
              'stroke-width': 0,
              width: 60,
              height: 30,
              r: 8,
              style: {
                  fontSize: "15px"
              }
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
