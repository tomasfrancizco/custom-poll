const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const button = document.getElementById("submit-btn");

const resultA = document.getElementById("result-a");
const resultB = document.getElementById("result-b");
const resultC = document.getElementById("result-c");
const resultD = document.getElementById("result-d");

button.onclick = () => {
  if(optionA.checked){
    resultA.style.width = "100%";
    resultB.style.width = "0";
    resultC.style.width = "0";
    resultD.style.width = "0";
  } else if(optionB.checked){
    resultA.style.width = "0";
    resultB.style.width = "100%";
    resultC.style.width = "0";
    resultD.style.width = "0";
  } else if(optionC.checked){
    resultA.style.width = "0";
    resultB.style.width = "0";
    resultC.style.width = "100%";
    resultD.style.width = "0";
  } else if(optionD.checked){
    resultA.style.width = "0";
    resultB.style.width = "0";
    resultC.style.width = "0";
    resultD.style.width = "100%";
  }
}
