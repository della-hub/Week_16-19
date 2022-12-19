"use strict";

let addButton = document.querySelector('#add');
let displayButton = document.querySelector('#display');
let records = [];

addButton.addEventListener('click', addRecord);
displayButton.addEventListener('click', displayAll);

function addRecord() {
    let record = document.querySelector('#inputtext').value;

    if (!record) {
        return;
    }

    records.push(record);
    document.querySelector('#inputtext').value = '';
}

function displayAll() {
    records.sort(function(a, b) {
        return a - b;
      });
    
    document.getElementsByName('redoutput')[0].value= records;
    /*
    const InitialValue = 0;
    const sum = records.reduce((acc, current) => acc + current, InitialValue );
    document.getElementsByName('sumoutput')[0].value= sum;
    */
    let sum = 0;
    //const numbers = [65, 44, 12, 4];
    records.forEach(myFunction);
    
    document.getElementById("demo").innerHTML = sum;
    
    function myFunction(item) {
      sum += item;
    }
    document.getElementsByName('sumoutput')[0].value= sum;
}