let array1 = ["js", "css", "html"];
let array2 = [0, 1, false, 2, undefined, "", 3, null];
let array3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
let result1 = array1[0];
const result2 = array2.filter(Number.isFinite);

const result3 = array3.findIndex((element) => element.length > 3);

function arrOutput() {
  let output = document.getElementById("output");
  output.innerHTML =
    output.innerHTML + result1 + "<br>" + result2 + "<br>" + result3;
}
