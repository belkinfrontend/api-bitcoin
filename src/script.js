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

//            let newObj = Object.entries(data.bpi).slice(0,5).map(entry => {
//               return entry
//            } );
//            
//            console.log(newObj);


            let keys = Object.keys(data.bpi)
            let values = Object.values(data.bpi)
            
            //debugger;


            let ctx = document.getElementById('myChart').getContext('2d');
            let chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
               
                // The data for our dataset
                data: {
                    labels: keys,
                    datasets: [{
                        label: "Bitcoin",
                        backgroundColor: '#17EA00',
                        borderColor: '#212121',
                        data: values,
                    }]
                },

                // Configuration options go here
                options: {}
            });

        }
    );



}