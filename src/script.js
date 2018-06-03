$(document).ready(function () {
    //getRate();
    //getHistoryRate();
    $('input[type="date"]').on('input', getHistoryRate);

});

//let getRate = () => {
//    
//    $.get(
//        "https://api.coindesk.com/v1/bpi/currentprice.json",
//        (data) => {
//            data = JSON.parse(data);
//            console.log(data);
//        }
//    );
//}

function getHistoryRate() {

    $.get(
        "https://api.coindesk.com/v1/bpi/historical/close.json", {
            "start": $('#date1').val(),
            "end": $('#date2').val()
        },
        function (data) {
            data = JSON.parse(data);
            console.log(data.bpi);
            //document.getElementById("out").innerHTML = JSON.stringify(data.bpi);
            document.getElementById("out").innerHTML = "go to console =>";



            let ctx = document.getElementById('myChart').getContext('2d');
            let chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45],
                    }]
                },

                // Configuration options go here
                options: {}
            });

        }
    );



}