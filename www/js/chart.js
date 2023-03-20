var xValues = ["Kenia", "Fancja", "Hiszpania", "Chorwacja", "Włochy"];
var yValues = [22, 15, 12, 10, 9];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Zestawienie najczęstszych kierunków podróży"
        }
    }
});