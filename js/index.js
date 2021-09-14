function create32Chart() {
    const q32Chart = document.getElementById('q32');

    const q32Data = {
        labels: ["Someone to talk to", "A sense of safety and security", "A link to get more support if I need it"],
        datasets: [{
            label: 'My First Dataset',
            data: [124, 125, 128],
            backgroundColor: [
                '#00b7c4',
                '#abd037',
                '#003851',
            ],
            borderWidth: 1
        }]
    };

    const q32Config = {
        type: 'doughnut',
        data: q32Data,
    };

    const myChart = new Chart(q32Chart, q32Config);
    return myChart;
}

function create46Chart() {

    const q46Chart = document.getElementById('q46');

    const q46Data = {
        labels: ["Less Isolated", "Connected", "Happy", "Safe", "All of the above"],
        datasets: [{
            label: 'Weekly Wellness Calls',
            data: [52, 151, 95, 74, 27],
            minBarLength: 100,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
            ]
        }]
    };

    let plugin = {
        legend: {
            reverse: true
        },
    }

    const q46Config = {
        type: 'bar',
        data: q46Data,
        options: {
            indexAxis: 'y',
        },
        plugins: [plugin]
    };

    const myChart = new Chart(q46Chart, q46Config);
    return myChart;
}

function typeHealth() {
    new TypeIt("#healthType", {
        speed: 50,
        cursor: false,
    })
        .go();

}

create32Chart();
create46Chart();
typeHealth();





