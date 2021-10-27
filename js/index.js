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
                '#d88d3a',
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

function typeQuoteHealth() {
    new TypeIt("#healthQuoteType", {
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
                '#00b7c4',
                '#d88d3a',
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
    const q30Chart = document.getElementById("q30");


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
                '#f04925',
            ],
            hoverOffset: 4
        }]
    };


    const q30Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q30Chart, q30Config);
    return myChart;

}


function createPetChart() {
    const petChart = document.getElementById('pet');

    const petData = {
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

    const petConfig = {
        type: 'bar',
        data: petData,
        options: {
            indexAxis: 'y',
        },
        plugins: [plugin]
    };

    const myChart = new Chart(petChart, petConfig);
    return myChart;
}

function create10Chart() {
    const q10Chart = document.getElementById("q10-12");


    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [243, 14],
            backgroundColor: [
                '#abd037',
                '#f04925',
            ],
            hoverOffset: 4
        }]
    };


    const q10Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q10Chart, q10Config);
    return myChart;

}

function create3Chart() {
    const q3Chart = document.getElementById("q3");
    console.log("q3called");

    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [202, 56],
            backgroundColor: [
                '#ba347c',
                '#edc819',
            ],
            hoverOffset: 4
        }]
    };


    const q3Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q3Chart, q3Config);
    return myChart;

}

function create7Chart() {
    const q7Chart = document.getElementById("q7");


    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [29, 230],
            backgroundColor: [
                '#00b7c4',
                '#d88d3a',
            ],
            hoverOffset: 4
        }]
    };


    const q7Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q7Chart, q7Config);
    return myChart;

}


function create17Chart() {
    const q17Chart = document.getElementById("q17");

    const data = {
        labels: [
            'Yes',
            'No',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [256, 1],
            backgroundColor: [
                '#ba347c',
                '#edc819',
            ],
            hoverOffset: 4
        }]
    };


    const q17Config = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(q17Chart, q17Config);
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
            data: [29, 27],
            backgroundColor: [
                '#abd037',
                '#f04925',
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


function createEthChart() {
    const ethChart = document.getElementById("ethChart");

    const data = {
        labels: [
            'Black or African American',
            'White',
            'Hispanic or Latinx',
            'Asian',
            'Multi-Racial',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 23, 3, 1, 1],
            backgroundColor: [
                '#003851',
                '#00b7c4',
                '#abd037',
                '#edc819',
                '#f04925'
            ],
            hoverOffset: 4
        }]
    };


    const ethConfig = {
        type: 'doughnut',
        data: data,
    };


    const myChart = new Chart(ethChart, ethConfig);
    return myChart;
}

// create29Chart();
// create10Chart();
// create17Chart();
createPetChart();
createPetFoodChart();
create32Chart();
create46Chart();
// create30Chart();
create3Chart();
create7Chart();
createEthChart();

// Must be last due to blocking function
typeHealth();
typeQuoteHealth();





