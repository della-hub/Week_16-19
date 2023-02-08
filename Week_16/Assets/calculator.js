"use strict";

Array.from(document.querySelectorAll("input, select")).forEach(function(item) {
   item.addEventListener("change", saveData);
});

function saveData() {
    
    let volume = document.querySelector('#volume').value;
    hideError('#volume');
    if (volume === "2") {
        volume = "10";
    } else if (volume === "3") {
        volume = "20";
    } else if (volume === "4") {
        volume = "30";
    } else if (volume === "5") {
        volume = "40";
    } else if (volume==="1") {
        showError("#volume");
    }
    else {
        showError("#volume");
    } 

    let age = document.querySelector('#age').value;
    hideError('#age');
    if (age === "2") {
        age = "50";
    } else if (age === "3") {
        age = "80";
    } else if (age === "4") {
        volume = "100";
    } else {
        showError("#age");
    } 

    hideError('#transmission');
    let transmission = document.querySelector('#transmission').value;
    if (transmission === "2") {
        transmission = "0.5";
    } else if (transmission === "3") {
        transmission = "1";
    } else {
        showError("#transmission");
    }
    
    if (document.querySelectorAll('input[name=sh]:checked').length === 0) {
        alert("please confirm if the car is new");
        return;
    } 
    let secondhand = document.querySelector('input[name=sh]:checked').value;
    if (secondhand === "second hand") {
        secondhand = "0.75";
    } else if (secondhand === "no second hand") {
        secondhand = "1";
    }
    
    if (document.querySelectorAll('input[name=eng]:checked').length === 0) {
        showError("input[name=eng]");
        return;
    } 
    let enginetype = document.querySelector('input[name=eng]:checked').value;
    if (enginetype === "gasoline") {
        enginetype = "5";
    } else if (enginetype === "diesel") {
        enginetype = "3";
    } else if (enginetype === "electric") {
        enginetype = "1";
    } 


    let cost = document.getElementById("cost");

    cost.innerHTML = Number(volume) + Number(age) + Number(transmission) + Number(secondhand) + Number(enginetype);

    // $('input, select').each(function() {
    //     if($(this).val() == ''){
    //         alert('Cannot be blank!');
    //     }
    //     else{
    //        alert('Being calculated..')
           
    //     }
    // })

    // let record = document.querySelector('#inputtext').value;
    // if (!record) {
    //     return;
    // }

    // records.push(record);
    // document.querySelector('#inputtext').value = '';
}

function showError(field) {
    document.querySelector(field).setCustomValidity("Required field")
    document.querySelector(field).classList.add("required");
}

function hideError(field) {
    document.querySelector(field).setCustomValidity("")
    document.querySelector(field).classList.remove("required");
}
