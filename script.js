const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const button = document.getElementById("submit-btn");

const resultA = document.getElementById("result-a");
const resultB = document.getElementById("result-b");
const resultC = document.getElementById("result-c");
const resultD = document.getElementById("result-d");

// console.log(Date.now())
let options = [0, 0, 0, 0];

button.onclick = () => {
  if(optionA.checked){
    options[0]++
  } else if(optionB.checked){
    options[1]++
  } else if(optionC.checked){
    options[2]++
  } else if(optionD.checked){
    options[3]++
  }
  const total = options.reduce((acc, val) => acc+val);
  resultA.style.width = `${options[0] * 100 / total}%`;
  resultB.style.width = `${options[1] * 100 / total}%`;
  resultC.style.width = `${options[2] * 100 / total}%`;
  resultD.style.width = `${options[3] * 100 / total}%`;
}
