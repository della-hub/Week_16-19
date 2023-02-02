let Randomnumbers = Array(10).fill(0);

function generateRandomNumbers() {
    clear('array'); 
    Randomnumbers = Randomnumbers.map(
        () => { return Number(Math.round((Math.random()*(10 - (-10)) + (-10)))) }
    );
    printResult('Array', Randomnumbers, "array")
}

function calculate() {
    clear('output')
    printResult('Max number', Math.max(...Randomnumbers));
    printResult('Min number', Math.min(...Randomnumbers));
    printResult('Multi', Randomnumbers.reduce((total, num) => { return total * num }, 1));
    let sum = Randomnumbers.reduce((total, num) => { return total + num }, 0);
    printResult('Sum', sum);
    printResult('Average', sum / Randomnumbers.length);
}

function printResult(descr, result, field="output") {
    let randomOutput = document.getElementById(field);
    randomOutput.innerHTML = randomOutput.innerHTML + `${descr} ${result}<br>`;
}

function clear(field) {
    document.getElementById(field).innerHTML = "";
}
