google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Color', 'Perc'],
    ['Whites', 41],
    ['Greys', 10],
    ['Yellows', 15],
    ['Teals', 34]
  ]);

  var options = {
    title: '',
    titleTextStyle: {color: '#fff', fontSize: 30, fontName: 'Open Sans'},
    pieHole: 0.4,
    backgroundColor: 'transparent',
    pieSliceBorderColor: 'transparent',
    pieSliceText: 'percentage',
    pieSliceTextStyle: {color: '#242424', fontName: 'Open Sans', fontSize: 12},
    chartArea:{width:'97%',height:'100%'},
    fontName: 'Open Sans',
    colors: ['#ffffff', '#cacaca', '#edec93', '#4db2ac'],
    legend: {
      position: 'right',
      alignment: 'center',
      maxLines: 4,
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  $(window).smartresize(function () {
     chart.draw(data, options);
  });
}
