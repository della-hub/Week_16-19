/*let addButton = document.querySelector('#add');
let suminputButton = document.querySelector('#display');
let namefull = [];

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
}*/
function addRecord() {
    
    let names = document.getElementById('namefull').value;
    let namesarray = names.split(" ");
alert (namesarray);
}

let addButton = document.getElementById('input').value;
