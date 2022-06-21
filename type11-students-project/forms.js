const studentForm = document.querySelector('form');

let itKnowledgeInputElement = document.querySelector('#rating');
let itKnowledgeOutputElement = document.querySelector('#rating-output');

itKnowledgeInputElement.addEventListener('input', () => {
    itKnowledgeOutputElement.textContent = rating.value;
});

const INITIAL_STUDENT_DATA = [
    {
        name: 'Name1',
    },
    {

    },
    {

    },
]

function renderInitialData(students){
    students.map(student => {
        console.log(student);
    })
}

renderInitialData(INITIAL_STUDENT_DATA);

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // const studentNameInput = document.querySelector('#student-name');
    const studentName = document.querySelector('#student-name').value;
    const studentSurname = document.getElementById('student-surname').value;
    // const studentAge = studentForm.querySelector('#age').value;
    const studentAge = event.target.querySelector('#age').value;
    // const studentPhone = studentForm.querySelector('[name=tel]').value;
    const studentGroup = event.target.elements.group.value;
    const studentTel = event.target.elements.tel.value;
    const studentEmail = event.target.elements.email.value;
    const studentRating = event.target.elements.rating.value;
    const studentPlang = document.querySelectorAll('input[name="planguage"]:checked');

    const studentsList = document.querySelector('#students-list');
    const studentsItem = document.createElement('div');

    let requiredInputs = document.querySelectorAll('input.required');
    

    // let studentNameInput = document.querySelector('#student-name');
    // studentNameInput.style.borderColor = '';

    let validForm = true;

    document.querySelectorAll('.input-error-message').forEach(input => {
        input.remove();
    })
    
 
    requiredInputs.forEach(input => {
        input.classList.remove('input-error');

        if(!input.value){
        validForm = false;

        let alertText = `Fill out the required fields!`;
        alertMessage(alertText, `error-alert`);

            input.classList.add('input-error');

        input.style.borderColor = 'red';

        let inputError = document.createElement('span');
        inputError .textContent = 'This field is required!';
        inputError.classList.add('input-error-message');

        input.after(inputError);

        return;
    }
    })
    if(!validForm){
        return;
    }
    

    studentsItem.classList.add('student-item');

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>Name: </strong>${studentName}`;
    
    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `<strong>Last name: </strong>${studentSurname}`;
    
    let ageElement = document.createElement('p');
    ageElement.innerHTML = `<strong>Age: </strong>${studentAge}`;
    
    let telElement = document.createElement('p');
    let telAsterisk = studentTel.replace(/./gi, '*');
    telElement.innerHTML = `<strong>Tel.: </strong>${telAsterisk}`;
    let showTel = document.createElement('button');
    telElement.append(showTel);
    showTel.textContent = 'Show student phone number';

        showTel.addEventListener('click', () => {
        telElement.innerHTML = `<strong>Tel.: </strong>${studentTel}`;
        let showTel = document.createElement('button');
        showTel.textContent = 'Show student phone number';
    });

    let emailElement = document.createElement('p');
    let emailAsterisk = studentEmail.replace(/./gi, '*');
    emailElement.innerHTML = `<strong>E-mail: </strong>${emailAsterisk}`;
    let showEmail = document.createElement('button');
    emailElement.append(showEmail);
    showEmail.textContent = 'Show student e-mail';

        showEmail.addEventListener('click', () => {
        emailElement.innerHTML = `<strong>E-mail: </strong>${studentEmail}`;
        let showEmail = document.createElement('button');
        showEmail.textContent = 'Hide student e-mail';
    });
    
    let ratingElement = document.createElement('p');
    ratingElement.innerHTML = `<strong>Rating: </strong>${studentRating}`;
   
    let groupElement = document.createElement('p');
    groupElement.innerHTML = `<strong>Group name: </strong>${studentGroup}`;
    
    let planguageListElement = document.createElement('ul');

    let plangTitleElement = document.createElement('p');
    plangTitleElement.innerHTML = `<strong>Programming languages: </strong>`;
    planguageListElement.prepend(plangTitleElement);

    studentPlang.forEach(planguage => {
        let planguageItemElement = document.createElement('li');
        planguageItemElement.textContent = planguage.value;
        planguageListElement.append(planguageItemElement);
    })

    let deleteStudentButton = document.createElement('button');
    deleteStudentButton.textContent = 'Remove student';
    let submitButton = document.querySelector('#submit');
    submitButton.after(deleteStudentButton);

    deleteStudentButton.addEventListener('click', () => {
        studentsItem.remove();
        let messageText = `Student deleted (${studentName} ${studentSurname})`;
        alertMessage(messageText);
    })

    studentsItem.append(nameElement, surnameElement, ageElement, telElement, emailElement, ratingElement, groupElement, planguageListElement);

    studentsList.prepend(studentsItem);

    studentForm.reset();

    let alertText = `Student created: (${studentName} ${studentSurname})`;
    alertMessage(alertText);

});

function alertMessage(text, elementClass){
    const alertElement = document.querySelector('#alert');
    alertElement.textContent = text;
    
    if(elementClass){
        alertElement.classList.add(elementClass);
    }
    setTimeout(() => {
        alertElement.textContent = '';
        if(elementClass){        
            alertElement.classList.remove(elementClass);
        }
    }, 5000);
}














