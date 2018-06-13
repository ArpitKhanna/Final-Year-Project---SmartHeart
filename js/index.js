

$.ajax({
    type:'GET',
    url:'https://api.thingspeak.com/channels/478544/feeds.json?results=10',
    success:function(data){
        console.log(data);
         var main = [];
         var dates = [];
        for(i=0; i<10; i++){
            dates.push(data.feeds[i].created_at);
            main.push(parseInt(data.feeds[i].field6));
        }
         console.log(main);
         createChart(dates, main);
    }
});


function createChart(d, m){

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: d,
        datasets: [{
            label: 'ECG',
            data: m,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
   });

}



