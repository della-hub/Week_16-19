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

if (customerName !== null && customerName.value === "") {
    alert("name should not be empty");
} else if (Number(customerAge<18) {
    alert("you must be older than 18 to register on this site");
} else if () {
    alert("please enter 'male', 'female' or 'other'");
} else if (customerCity=="") {
    alert ("city name must be entered");
} else if () {
    alert ("are you sure it is a real color");
} else {
    alert("Welcome"+","+customerName);
}



};

function plusFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    let sum1 = Number(firstNumber) + Number(secondNumber);
    alert(sum1);
    document.getElementsByName('summarize').value=sum1;
    
};
function minusFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) - Number(secondNumber));
};
function multiFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    alert(Number(firstNumber) * Number(secondNumber));
};
function divFunction()
{
    let firstNumber = document.getElementById('firstnumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    if(secondNumber==0){
        alert("No division possible");
    } else {
        alert(Number(firstNumber) / Number(secondNumber));
    }
    
};