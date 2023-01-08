function saveData() {
    let record = document.querySelector('#inputtext').value;

    if (!record) {
        return;
    }

    records.push(record);
    document.querySelector('#inputtext').value = '';
}

function calculateTotal() {
    var total = 0;//
    var list = document.getElementsByClassName("inputtext");
    var values = [];
    for(var i = 0; i < list.length; ++i) {
        values.push(parseFloat(list[i].value));
    }
    total = values.reduce(function(previousValue, currentValue, index, array){
        return previousValue + currentValue;
    });
    document.getElementById("total").value = total;    
}
