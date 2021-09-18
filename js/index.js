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
        speed: 20,
        cursor: false,
    })
        .go();

}

function create29Chart() {
    const q29Chart = document.getElementById("q29");


    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            data: [86, 158],
            backgroundColor: [
                '#abd037',
                '#edc819',
            ],
            hoverOffset: 4
        }]
    };


    const q29Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q29Chart, q29Config);
    return myChart;

}

function create30Chart() {
    const q29Chart = document.getElementById("q30");


    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [119, 65],
            backgroundColor: [
                '#abd037',
                '#e6e7e8',
            ],
            hoverOffset: 4
        }]
    };


    const q29Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q29Chart, q29Config);
    return myChart;

}


function createPetChart() {
    const q46Chart = document.getElementById('pet');

    const q46Data = {
        labels: ["Dog", "Cat", "Other"],
        datasets: [{
            label: 'Pets',
            data: [36, 27, 5],
            minBarLength: 100,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                '#00b7c4'
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

function create10Chart() {
    const q29Chart = document.getElementById("q10-12");


    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [94.55, 5.45],
            backgroundColor: [
                '#abd037',
                '#e6e7e8',
            ],
            hoverOffset: 4
        }]
    };


    const q29Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q29Chart, q29Config);
    return myChart;

}

function create17Chart() {
    const q29Chart = document.getElementById("q17");

    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [99.61, 0.39],
            backgroundColor: [
                '#abd037',
                '#e6e7e8',
            ],
            hoverOffset: 4
        }]
    };


    const q29Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q29Chart, q29Config);
    return myChart;
}

function createPetFoodChart() {
    const petFoodChart = document.getElementById("petfeeding");

    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [52, 48],
            backgroundColor: [
                '#abd037',
                '#e6e7e8',
            ],
            hoverOffset: 4
        }]
    };

    const petFoodConfig = {
        type: 'doughnut',
        data: data,
    };

    const myChart = new Chart(petFoodChart, petFoodConfig);
    return myChart;

}

create29Chart();
create10Chart();
create17Chart();
createPetChart();
createPetFoodChart();
create32Chart();
create46Chart();
create30Chart();

// Must be last due to blocking function
typeHealth();





