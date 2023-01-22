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
function addComment() {
    
    let comment3 = checkSpam();
    
    

    // for (let i = 0; i < names.length; i++) {
    //     names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    //     console.log(names);
    // }
    let output = document.getElementById('resultsoutput');
    output.innerHTML = output.innerHTML + comment3;
}

function checkSpam() {
    let comment = document.getElementById('comment').value;
    let comment1 = comment.replace(/ +(?= )/g,'');
    let comment2 = comment1.replace(/viagra/g, "***");
    let comment3 = comment2.replace(/xxx/g, "***"); 
    
}

function render (name) {
    return "Name: " +  name[0] + "<br>" + "Middle Name: " + name[1] + "<br>" + "Surname: " + name[2]  +  "<br>";
} 



// let addButton = document.getElementById('input').value;
