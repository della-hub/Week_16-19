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
    let name = document.getElementById('namefull').value;
    name = name.trim();
    name = name.replace(/,/g, '')
    name = name.replace(/ +(?= )/g,'');
    name = name.toLowerCase();
    let names = name.split(" ");

    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names);
    }
    let output = document.getElementById('resultsoutput');
    output.innerHTML = output.innerHTML + render(names);
}

function render (name) {
    return "Name: " +  name[0] + "<br>" + "Middle Name: " + name[1] + "<br>" + "Surname: " + name[2]  +  "<br>";
} 



// let addButton = document.getElementById('input').value;
