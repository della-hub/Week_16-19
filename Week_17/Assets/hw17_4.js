let Randomnumbers = Array(10).fill(0);

function generateRandomNumbers() {
    Randomnumbers = Randomnumbers.map(
        () => { return Number(Math.round((Math.random()*(10 - (-10)) + (-10)))) }
    );
}

function calculate() {
    let max = Math.max(...Randomnumbers);
    let min = Math.min(...Randomnumbers);
    let sum = Randomnumbers.reduce((total, num) => { return total + num }, 0);
    let multi = Randomnumbers.reduce((total, num) => { return total * num }, 1);
    let avg = sum / Randomnumbers.length;

    let randomOutput = document.getElementById('output');
    randomOutput.innerHTML = randomOutput.innerHTML + `Array ${Randomnumbers}<br>Max number ${max} <br>Min number ${min} <br>Sum of all values ${sum} <br>Average of all values ${avg} <br>Multiplication of all values ${multi}`;
}
