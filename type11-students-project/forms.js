const studentForm = document.querySelector('form');
let editedStudent = null;
let itKnowledgeInputElement = document.querySelector('#rating');
let itKnowledgeOutputElement = document.querySelector('#rating-output');

itKnowledgeInputElement.addEventListener('input', () => {
    itKnowledgeOutputElement.textContent = rating.value;
});

const INITIAL_STUDENT_DATA = [
    {
        name: 'Name1',
        surname:'Surname1',
        age:1,
        phone:1,
        email:'1@1.cc',
        group:1,
        itKnowledge:1,
        interests:['1', '1.1'],        
    },
    {
        name: 'Name2',
        surname:'Surname2',
        age:2,
        phone:2,
        email:'2@2.cc',
        group:2,
        itKnowledge:2,
        interests:['2', '2.2'], 
    },
    {
        name: 'Name3',
        surname:'Surname3',
        age:3,
        phone:3,
        email:'3@3.cc',
        group:3,
        itKnowledge:3,
        interests:['3', '3.3'], 
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

        if(input.name === 'name' && input.value.length < 3){
            validForm = false;
    
            let alertText = `Fill out the required fields!`;
            alertMessage(alertText, `error-alert`);
    
            input.classList.add('input-error');
    
            input.style.borderColor = 'red';
    
            let inputError = document.createElement('span');
            inputError .textContent = 'Field needs to be at least 3 symbols!';
            inputError.classList.add('input-error-message');
    
            input.after(inputError);
            return;
        }
        if(!validForm){
            return;
        }

        return;
    }
    })

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
    showTel.setAttribute('type', 'button');
    telElement.append(showTel);
    showTel.textContent = 'Show student phone number';

        showTel.addEventListener('click', () => {
            telElement.innerHTML = `<strong>Tel.: </strong>${studentTel}`;
            let hideTel = document.createElement('button');
            hideTel.textContent = 'Hide student phone number';
            telElement.append(hideTel);
            hideTel.setAttribute('type', 'button');
        
        hideTel.addEventListener('click', () => {
            telElement.innerHTML = `<strong>Tel.: </strong>${telAsterisk}`;
            let showTel = document.createElement('button');
            showTel.setAttribute('type', 'button');
            telElement.append(showTel);
            showTel.textContent = 'Show student phone number';
        })
    });

    // function showTelFunction(){
    //     let showTelText = `<strong>Tel.: </strong>${studentTel}`;

    //     telElement.innerHTML = showTelText;
    //     let hideTel = document.createElement('button');
    //     telElement.append(hideTel);
    //     hideTel.setAttribute('type', 'button');
    //     hideTel.textContent = 'Hide student phone number';
    // }

    // function hideTelFunction(){
    //     let hideTelText = `<strong>Tel.: </strong>${telAsterisk}`;

    //     telElement.innerHTML = hideTelText;
    //     let showTel = document.createElement('button');
    //     showTel.setAttribute('type', 'button');
    //     telElement.append(showTel);
    //     showTel.textContent = 'Show student phone number';
    // }

    let emailElement = document.createElement('p');
    let emailAsterisk = studentEmail.replace(/./gi, '*');
    emailElement.innerHTML = `<strong>E-mail: </strong>${emailAsterisk}`;
    let showEmail = document.createElement('button');
    showEmail.setAttribute('type', 'button');
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
    deleteStudentButton.setAttribute('type', 'button');
    deleteStudentButton.textContent = 'Remove student';
    let submitButton = document.querySelector('#submit');
    submitButton.after(deleteStudentButton);

    deleteStudentButton.addEventListener('click', () => {
        studentsItem.remove();
        let messageText = `Student deleted (${studentName} ${studentSurname})`;
        alertMessage(messageText);
    })

    let editStudentButton = document.createElement('button');
    editStudentButton.setAttribute('type', 'button');
    editStudentButton.textContent = 'Edit';
   

    editStudentButton.addEventListener('click', () => {
        console.dir(studentForm.elements.group.value);
        studentForm.elements.group.value = 'type 2';

        // document.querySelector('#student-name').value = studentName;
        studentForm.elements.name.value = studentName;
        // document.querySelector('#student-surname').value = studentSurname;
        studentForm.elements.surname.value = studentSurname;
        // document.querySelector('#age').value = studentAge;
        studentForm.elements.age.value = studentAge;
        // document.querySelector('tel').value = studentTel;
        studentForm.elements.tel.value = studentTel;
        // document.querySelector('#email').value = studentEmail;
        studentForm.elements.email.value = studentEmail;
        // document.querySelector('#group').value = studentGroup;
        studentForm.elements.group.value = studentGroup;
        // document.querySelector('#rating').value = studentRating;
        studentForm.elements.rating.value = studentRating;
        document.querySelector('#rating').value = studentRating;
        studentForm.elements['rating'].value = studentRating;

        studentForm.elements.planguage.forEach(formPlanguage => {
            formPlanguage.checked = false;

            // studentPlang.forEach(studentPlang => {
            //     if(studentPlang.value === formPlanguage){
            //         formPlanguage.checked = true;
            //     }
            // })
        });

        console.log(studentForm.querySelector(`[type='submit]`));
        studentForm.querySelector('[type="submit"]').value = 'Save changes';
        studentPlang.forEach(planguage => {
            studentForm.elements.planguage.forEach((formPlang) => {
                if(planguage.value === formPlang.value){
                    formPlang.checked = true;
                }else{
                    formPlang.checeked = false;
                }
            })
        })
    editedStudent = studentsItem;
    });

    console.log(editedStudent);
    console.log(studentsItem);

    studentsItem.append(nameElement, surnameElement, ageElement, telElement, emailElement, ratingElement, groupElement, planguageListElement, deleteStudentButton, editStudentButton,);

    if(editedStudent){
        console.log('Editing student');

        // editedStudent.innerHTML = studentsItem.innerHTML;
        editedStudent.replaceWith(studentsItem);
        editedStudent = null;

        let alertText = `Student edited: (${studentName} ${studentSurname})`;
    alertMessage(alertText);
    studentForm.querySelector('[type="submit"]').value = 'Submit';
    }else{
        console.log('Creating student');

        studentsList.prepend(studentsItem);
        
        let alertText = `Student created: (${studentName} ${studentSurname})`;

        alertMessage(alertText);
    }

    studentForm.reset();

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














