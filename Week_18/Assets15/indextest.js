function changecolor(select) {
    let color = select.options[select.selectedIndex].textContent;
    document.body.style.backgroundColor=color;
}

function myFunction()
{
    let elem=document.getElementById('elem');
    elem.style.background='red';
};

function myotherFunction()
{
    let elem=document.getElementById('elem1');
    elem.style.background='green';
};
function myFunction2()
{

let customerName = document.getElementById('name').value;
let customerAge = document.getElementById('age').value;
let customerCity = document.getElementById('city').value;
let customerSex = document.getElementById('sex').value;
let customerColor = document.getElementById('color').value;

if (customerName == "") {
    alert("name should not be empty");
} else if (Number(customerAge)<18) {
    alert("you must be older than 18 to register on this site");
} else if (customerSex == "") {
    alert("please enter 'male', 'female' or 'other'");
} else if (customerCity == "") {
    alert("enter your city name");
} else if (customerColor == "") {
    alert("are you sure this is a real color?");
} else {
    alert("Welcome"+","+customerName);
}
};

function sumFunction() {
    let firstNumber = document.getElementsByName('firstnumber')[0].value;
    let secondNumber = document.getElementsByName('secondnumber')[0].value;
    let sum1 = Number(firstNumber) + Number(secondNumber);
    
    document.getElementsByName('sumoutput')[0].value= sum1;
    
    }

function minusFunction() {
        let firstNumber = document.getElementsByName('firstnumber')[0].value;
        let secondNumber = document.getElementsByName('secondnumber')[0].value;
        let red1 = Number(firstNumber) - Number(secondNumber);
        
        document.getElementsByName('redoutput')[0].value= red1;
        
    }

function multiFunction() {
            let firstNumber = document.getElementsByName('firstnumber')[0].value;
            let secondNumber = document.getElementsByName('secondnumber')[0].value;
            let multi1 = Number(firstNumber) * Number(secondNumber);
            
            document.getElementsByName('multoutput')[0].value= multi1;
            
    }

    function divFunction() {
        let firstNumber = document.getElementsByName('firstnumber')[0].value;
        let secondNumber = document.getElementsByName('secondnumber')[0].value;
        let div1 = Number(firstNumber) / Number(secondNumber);
        if(secondNumber==0){
            alert("No division possible");
        } else {
        document.getElementsByName('divoutput')[0].value= div1;
        }
}