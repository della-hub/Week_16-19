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

let now = new Date();
function addDate() {
    let output = document.getElementById('datenow');
    output.innerHTML = output.innerHTML + now;
    
    console.log(now);
    
}

function formatDate() {
    let newDate = new Date();
    console.log(newDate);
    let compared = document.getElementById('comparison');
    let diff = newDate - now;
    console.log(diff);
    

    if (diff < 1000) {
        compared.innerHTML = compared.innerHTML + "right now" + "<br>";
    } else if (diff < 60000) {
        compared.innerHTML = compared.innerHTML + Number(diff)/1000 + " seconds" + "<br>";
    } else if (diff < 3600000) {
        compared.innerHTML = compared.innerHTML + Number(diff)/360000 + "<br>";
    } 
    
    else {
        compared.innerHTML = compared.innerHTML + newDate - 86400 * 4 * 1000 + "<br>";
    } 
        
    }

    
    

// function addRecord() {
//     let name = document.getElementById('namefull').value;
//     name = name.trim();
//     name = name.replace(/,/g, '')
//     name = name.replace(/ +(?= )/g,'');
//     name = name.toLowerCase();
//     let names = name.split(" ");

//     for (let i = 0; i < names.length; i++) {
//         names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
//         console.log(names);
//     }
//     let output = document.getElementById('resultsoutput');
//     output.innerHTML = output.innerHTML + render(names);
// }

// function render (name) {
//     return "Name: " +  name[0] + "<br>" + "Middle Name: " + name[1] + "<br>" + "Surname: " + name[2]  +  "<br>";
// } 



// let addButton = document.getElementById('input').value;
