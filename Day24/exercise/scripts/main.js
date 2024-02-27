const massInput = document.getElementById('mass');
const weightText = document.querySelector('.weightText');
const image = document.querySelector('.planet-image');
const push = document.querySelector('.push');
const number = document.querySelector('.number');
const selectElement = document.getElementById('select');

document.addEventListener('DOMContentLoaded', () => {
    push.style.display = 'none';
    document.querySelector(".image").style.alignItems = "center";
});

function getOptionValue() {
    let selectedOption = selectElement.value;
    return selectedOption;
}

function calculateWeight() {
    let select = getOptionValue();
    let numMass = parseFloat(massInput.value);

    if (isNaN(numMass) || massInput.value === '') {
        hideImageAndDisplayMessage('Please enter a valid mass');
        return;
    }

    if (select === 'none') {
        hideImageAndDisplayMessage('Please select a planet');
        return;
    }

    let gravityValues = {
        'MERCURY': 3.7,
        'VENUS': 8.87,
        'EARTH': 9.8,
        'MOON': 1.625,
        'JUPITER': 24.79,
        'SATURN': 10.44,
        'URANUS': 8.69,
        'NEPTUNE': 11.15,
        'PLUTO': 0.62
    };
    let weight = gravityValues[select] * numMass;
    let imagePath = `./images/${select.toLowerCase()}.png`
    showImageAndDisplayWeight(`The weight of the object on <b>${select}</b>`, weight.toFixed(2) + ' N', imagePath);
}

function hideImageAndDisplayMessage(message) {
    image.style.display = 'none';
    push.style.display = 'block';
    push.style.height = '25%';
    weightText.innerHTML = message;
}
function showImageAndDisplayWeight(weightMessage, weightValue, imgSrc) {
    image.style.display = 'block';
    image.src = imgSrc
    push.style.display = 'block';
    push.style.height = '55%';
    weightText.innerHTML = weightMessage;
    number.innerHTML = weightValue;
    number.style.backgroundColor = 'rgba(153, 146, 146, 0.432)'
}
