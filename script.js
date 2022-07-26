const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const select = document.getElementById('dropdown');
const resultContainer = document.querySelector('.result-container');

for (i=1;i<=100;i++){
    select.innerHTML += `<option value=${i}>${i}</option>`;
}


btn.addEventListener('click',(event) => {
    event.preventDefault();
    let heightEl = height.value;
    let weightEl = weight.value;
    let selectEl = select.value;
    let height_in_meter = heightEl * 0.01;
    let bmiSum = (weightEl / (height_in_meter*height_in_meter));
    let bmi = Math.round(bmiSum*100) / 100;
    if(heightEl !== '' && weightEl !== '' && selectEl != '') {
        BMI_Calculator(bmi);
    }
    else {
        alert("Please fill the given details")
    }
    heightEl='';
    weightEl='';
})

function BMI_Calculator (bmi) {
    let result;
    if(bmi < 18.5){
        result = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        result = "Normal weight";
    }
    else if(bmi >= 25.0 && bmi <= 29.9 ){
        result = "Pre-obesity";
    }
    else if(bmi >= 30.0 && bmi <= 34.9){
        result = "Obesity class 1";
    }
    else if(bmi >= 35.0 && bmi <= 39.9) {
        result = "Obesity class 2";
    }
    else {
        result = "Obesity class 3";
    }
    console.log(bmi);
    console.log(result);
    render(bmi,result);
}

function render(bmi,result) {
    form.classList.add('frm');
    resultContainer.innerHTML = `<div class="result">
                                    <h1>BMI: ${bmi}</h1>
                                    <h2>${result}</h2>
                                    <button class="btn" onclick="backBtn()">Back</button>
                                </div>
                                `;
}

function backBtn() {
    window.location.reload();
}