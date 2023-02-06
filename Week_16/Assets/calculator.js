"use strict";

Array.from(document.getElementsByTagName("input")).forEach(function(item) {
   item.addEventListener("change", calculateTotal);
});

function saveData() {
    
    let volume = document.querySelector('#volume').value;
    let age = document.querySelector('#age').value;
    let transmission = document.querySelector('#transmission').value;
    let secondhand = document.querySelector('input[name=sh]:checked').value;
    let enginetype = document.querySelector('input[name=eng]:checked').value;

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
