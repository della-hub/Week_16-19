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
    alert(records);
}