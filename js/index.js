function createPetChart() {
    const petChart = document.getElementById('pet');

    const petData = {
        labels: ["Dog", "Cat", "Other"],
        datasets: [{
            label: 'Pets',
            data: [81, 47, 5],
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
                '#02B7C4',
                '#ABD037',

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

function animateValue(id, start, end, duration, unit) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = `<strong>${current} ${unit}</strong>`;

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const intterval = setInterval(() => {
    if ($('#saferPercent').visible(true)) {
        // The element is visible, do something
        animateValue("saferPercent", 50, 93, 2000, "%");
        console.log("bruh");
        clearInterval(intterval);
    } else {
        // The element is NOT visible, do something else

    }
}, 500);

createPetChart();
createPetFoodChart();
createEthChart();