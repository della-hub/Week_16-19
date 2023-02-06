"use strict";

Array.from(document.getElementsByTagName("input")).forEach(function(item) {
   item.addEventListener("change", calculateTotal);
});

function saveData() {
    
    let volume = document.querySelector('#volume').value;
    if (volume === "2") {
        volume = "10";
    } else if (volume === "3") {
        volume = "20";
    } else if (volume === "4") {
        volume = "30";
    } else if (volume === "5") {
        volume = "40";
    }
    else {
        alert("select an engine volume");
    } 
    let age = document.querySelector('#age').value;
    if (age === "2") {
        age = "50";
    } else if (age === "3") {
        age = "80";
    } else if (age === "4") {
        volume = "100";
    } else {
        alert("select an initial registration timeframe");
    } 
    let transmission = document.querySelector('#transmission').value;
    if (transmission === "2") {
        transmission = "0.5";
    } else if (transmission === "3") {
        transmission = "1";
    } else {
        alert("select a transmission type");
    } 
    let secondhand = document.querySelector('input[name=sh]:checked').value;
    if (secondhand === "second hand") {
        secondhand = "0.75";
    } else if (secondhand === "no second hand") {
        secondhand = "1";
    } else {
        alert("please confirm if the car is new");
    }
    let enginetype = document.querySelector('input[name=eng]:checked').value;
    if (enginetype === "gasoline") {
        enginetype = "5";
    } else if (enginetype === "diesel") {
        enginetype = "3";
    } else if (enginetype === "electric") {
        enginetype = "1";
    } else {
        alert("select your engine");
    }

    let cost = document.getElementById("cost");
    cost.innerHTML = cost.innerHTML + volume + age + transmission + secondhand + enginetype;

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

function calculateTotal() {
    console.log('28');
    // var total = 0;
    // var list = document.getElementsByClassName("inputtext");
    // var values = [];
    // for(var i = 0; i < list.length; ++i) {
    //     values.push(parseFloat(list[i].value));
    // }
    // total = values.reduce(function(previousValue, currentValue, index, array){
    //     return previousValue + currentValue;
    // });
    // document.getElementById("total").value = total;    
}
