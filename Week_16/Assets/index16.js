/*function sumInput() {
    let numbers = document.getElementsByName('input')[0].value;
    let sorted = sort (numbers);
    
    let sum1 = Number(firstNumber) + Number(secondNumber);
    
    document.getElementsByName('arraysorted')[0].value= sorted;
    
    }*/

    
       

let addButton = document.querySelector('#add');
let suminputButton = document.querySelector('#display');
let numbers = [];

addButton.addEventListener('click', addNumber);
displayButton.addEventListener('click', sortAll);
function sumInput() {
    function addNumber() {
    let record = document.querySelector('#inputtext').value;

    if (!number) {
        return;
    }

    numbers.push(number);
    document.querySelector('#inputtext').value = '';
}

function sortAll() {
    let sortednumbers = numbers.sort(function(a,b)
    {
        return a-b;
    })
    document.getElementsByName('arraysorted')[0].value= sortednumbers;
} 
}