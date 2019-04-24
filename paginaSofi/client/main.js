import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import Chart from 'chart';
GRAFICOS=new Mongo.Collection("datosGraficos");
import './main.html';

var datos = GRAFICOS.find({proyecto:"/^D/"});
console.log(datos); 
Template.graficos.topGenresChart = function() {
  return {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: this.username + "'s top genres"
      },
      tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  },
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'genre',
          data: [
              ['Action',       26.8],
              ['Ecchi',   12.8],
              ['Comedy',    8.5],
              ['Yuri',     6.2]
          ]
      }]
  };
};
