"use strict";

Array.from(document.querySelectorAll("input, select")).forEach(function (item) {
  item.addEventListener("change", saveData);
});

function saveData() {
  let formFilledFlag = true;

  let volume = document.querySelector("#volume").value;
  hideError("#volume");
  if (volume === "2") {
    volume = "10";
  } else if (volume === "3") {
    volume = "20";
  } else if (volume === "4") {
    volume = "30";
  } else if (volume === "5") {
    volume = "40";
  } else if (volume === "1") {
    showError("#volume");
  } else {
    showError("#volume");
    formFilledFlag = false;
  }

  let age = document.querySelector("#age").value;
  hideError("#age");
  if (age === "2") {
    age = "50";
  } else if (age === "3") {
    age = "80";
  } else if (age === "4") {
    volume = "100";
  } else {
    showError("#age");
    formFilledFlag = false;
  }

  hideError("#transmission");
  let transmission = document.querySelector("#transmission").value;
  if (transmission === "2") {
    transmission = "0.5";
  } else if (transmission === "3") {
    transmission = "1";
  } else {
    showError("#transmission");
    formFilledFlag = false;
  }

  let secondhand = document.querySelector("input[name=sh]:checked");
  if (document.querySelectorAll("input[name=sh]:checked").length === 0) {
    showError("input[name=sh]");
    formFilledFlag = false;
    console.log("55");
  } else {
    console.log("57");
    if (secondhand.value === "second hand") {
      secondhand = "0.75";
    } else if (secondhand.value === "no second hand") {
      secondhand = "1";
    }
  }
  let enginetype = document.querySelector("input[name=eng]:checked");
  if (document.querySelectorAll("input[name=eng]:checked").length === 0) {
    showError("input[name=eng]");
    formFilledFlag = false;
  } else {
    if (enginetype === "gasoline") {
      enginetype = "5";
    } else if (enginetype.value === "diesel") {
      enginetype = "3";
    } else if (enginetype.value === "electric") {
      enginetype = "1";
    }
  }

  let cost = document.getElementById("cost");

  if (true === formFilledFlag) {
    cost.innerHTML =
      Number(volume) +
      Number(age) +
      Number(transmission) +
      Number(secondhand) +
      Number(enginetype);
  } else {
    cost.innerHTML = "Please fill all fields";
  }
}

function showError(field) {
  document.querySelector(field).setCustomValidity("Required field");
  document.querySelector(field).classList.add("required");
}

function hideError(field) {
  document.querySelector(field).setCustomValidity("");
  document.querySelector(field).classList.remove("required");
}
