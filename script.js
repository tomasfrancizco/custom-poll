const body = document.getElementsByTagName("body")[0];
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitButton = document.getElementById("submit-btn");
const nightButton = document.getElementById("night-mode-btn");

const resultA = document.getElementById("result-a");
const resultB = document.getElementById("result-b");
const resultC = document.getElementById("result-c");
const resultD = document.getElementById("result-d");

const voters = document.getElementById("voters");

let options = [0, 0, 0, 0];

submitButton.onclick = () => {
  if(optionA.checked){
    options[0]++
  } else if(optionB.checked){
    options[1]++
  } else if(optionC.checked){
    options[2]++
  } else if(optionD.checked){
    options[3]++
  } else {
    return
  }
  const total = options.reduce((acc, val) => acc+val);
  resultA.style.width = `${options[0] * 100 / total}%`;
  resultA.innerHTML = `${Math.round((Number(options[0])*100/Number(total)))}%`
  resultB.style.width = `${options[1] * 100 / total}%`;
  resultB.innerHTML = `${Math.round((Number(options[1])*100/Number(total)))}%`
  resultC.style.width = `${options[2] * 100 / total}%`;
  resultC.innerHTML = `${Math.round((Number(options[2])*100/Number(total)))}%`
  resultD.style.width = `${options[3] * 100 / total}%`;
  resultD.innerHTML = `${Math.round((Number(options[3])*100/Number(total)))}%`
  voters.innerHTML = `${options.reduce((acc,val)=>acc+val)}`
}

nightButton.onclick = () => {
  if(body.style.background == "lightblue"){
    body.style.background = "darkslategray"
    body.style.color = "white"

  } else {  
    body.style.background = "lightblue"
  }
}