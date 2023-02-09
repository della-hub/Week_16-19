function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) { errors.push('Field ' + input.placeholder + ' not filled out'); }
    if (validity.patternMismatch) { errors.push('Wrong format'); }
    if (validity.rangeOverflow) { let max = getAttributeValue(input, 'max'); errors.push('Max value can not be more than ' + max); }
    if (validity.rangeUnderflow) { let min = getAttributeValue(input, 'min'); errors.push('Min value can not be less than ' + min); }
}
 function checkAll() {
    errors = []; 
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById('errorsInfo').innerHTML=errors.join('.<br>');
 }

 let mailformat = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
 if (emailField.value.match(mailformat)) {
    return true;
 } else {
    return false;
 }