const datos_graficos={
    chart1:[12, 19, 3, 5, 2, 3],
    chart2:[70,12,18],
    chart3:[50,10,40]
};
function inicio(){
    document.querySelector(".btn").addEventListener("click",cambiar);
    generarGraficos();
}
function generarGraficos(){ 
const CHART1 = document.getElementById('chart1').getContext('2d');
const CHART2 = document.getElementById('chart2').getContext('2d');
const CHART3 = document.getElementById('chart3').getContext('2d');

const myChart = [new Chart(CHART1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: datos_graficos.chart1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}),
new Chart(CHART2, {
    type: 'pie',
    data: {
        labels: ["Finalizado" , "En Proceso" , "Pendientes"],
        datasets: [{

            data: datos_graficos.chart2,
            backgroundColor: [
                'rgba(60, 255, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 50, 86, 1)'
            ],
            
        }]
    },
    options: {
        
    }
}),new Chart(CHART3, {
    type: 'polarArea',
    data: {
        labels: ["Finalizado" , "En Proceso" , "Pendientes"],
        datasets: [{
            label: '# of Votes',
            data: datos_graficos.chart3,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }]
    },
    options: {
    }
})];
}

function cambiar () {
    let datos = [];
    while(datos.length<3){
        let dato = Math.random()*100;
        let acumulado = datos.reduce((t,d)=>t+d,0);
        if(acumulado+dato<100)
            datos.push(dato);
        else
            datos.push(100-acumulado);
    }
    datos_graficos.chart2 = datos;
    generarGraficos();
}

/*setInterval(()=>{
    if(datos_graficos.chart3[1]>0 && datos_graficos.chart3[1]>0){
        datos_graficos.chart3[0]++;
        datos_graficos.chart3[1]--;
    }
    else if(datos_graficos.chart3[1]==0 && datos_graficos.chart3[2]>0){
        datos_graficos.chart3[1]++;
        datos_graficos.chart3[2]--;
    }
    cambiar();
    generarGraficos();
},1000);

*/