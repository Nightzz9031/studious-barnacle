const divNumbers = document.querySelector('#numbers');

const h3 = document.createElement('h3');
h3.textContent = Number(0);



const plus = document.createElement('button');
const minus = document.createElement('button');
const reset = document.createElement('button');
const add2 = document.createElement('button');
const sub2 = document.createElement('button');
const gradesText = document.createElement('h4');
const gradesList = document.createElement('ul');
const addGrade = document.createElement('button');
const removeGrades = document.createElement('button');
const numberInput =document.createElement('input');

plus.textContent = '+';
minus.textContent = '-';
minus.setAttribute('disabled', true)
reset.textContent = 'RESET';
add2.textContent = '+2';
sub2.textContent = '-2';
sub2.setAttribute('disabled', true)
gradesText.textContent = 'Grades: ';
addGrade.textContent = 'Add grade';
removeGrades.textContent = 'Remove all grades';

numberInput.setAttribute('type', 'number');
numberInput.setAttribute('value', '0');
numberInput.setAttribute('min', '1');
numberInput.setAttribute('max', '10');

divNumbers.append(h3, numberInput, plus, minus, reset, add2, sub2, addGrade);
divNumbers.append(gradesText, gradesList, removeGrades,);

numberInput.addEventListener('change', () => {
    h3.textContent = numberInput.value;
    checkAddData();
    checkSubData();
})

plus.addEventListener('click', () => {
    numberInput.value++;
    h3.textContent++;
    checkAddData();
});
minus.addEventListener('click', () => {
    numberInput.value--;
    h3.textContent--;
    checkSubData();
});
add2.addEventListener('click', () => {
    numberInput.value = Number(numberInput.value) + 2;
    h3.textContent = Number(h3.textContent) + 2;
    checkAddData();
});
sub2.addEventListener('click', () => {
    numberInput.value = Number(numberInput.value) - 2;
    h3.textContent = Number(h3.textContent) - 2;
    checkSubData();
});

reset.addEventListener('click', () => {
    numberInput.value = 0;
    h3.textContent = 0;
    h3.style.color = 'black';
    plus.removeAttribute('disabled')
    minus.setAttribute('disabled', true)
    add2.removeAttribute('disabled')
    sub2.setAttribute('disabled', true)
});

function checkAddData(){
    numberInput.value >= 10 ? plus.setAttribute('disabled', true):null;
    numberInput.value >= 1 ? minus.removeAttribute('disabled'):null;
    numberInput.value >= 9 ? add2.setAttribute('disabled', true):null;
    numberInput.value >= 2 ? sub2.removeAttribute('disabled'):null;
    numberInput.value >= 5 ? h3.style.color = 'green' : h3.style.color = 'red';
    };

function checkSubData(){
    numberInput.value <= 0 ? minus.setAttribute('disabled', true):null;
    numberInput.value < 10 ? plus.removeAttribute('disabled'):null;
    numberInput.value < 9 ? add2.removeAttribute('disabled'):null;
    numberInput.value < 2 ? sub2.setAttribute('disabled', true):null;
    numberInput.value >= 5 ? h3.style.color = 'green' : h3.style.color = 'red';
    };

function resetGrades(){
    let gradeSelect = document.querySelectorAll('li');
    gradeSelect.forEach(grade => {
        grade.remove();   
    });
};

removeGrades.addEventListener('click', () => {
    resetGrades();
});

addGrade.addEventListener('click', () => {
    currentValue = numberInput.value;
    let grades = document.createElement('li');
    grades.textContent = currentValue;

    grades.style.color = h3.style.color;
    // if(numberInput.value < 5){
    //     grades.style.color = 'red';
    // }else{
    //     grades.style.color = 'green';
    // };
    gradesList.prepend(grades);

    grades.addEventListener('click', () => {
        grades.remove();
    })
    
    
});





