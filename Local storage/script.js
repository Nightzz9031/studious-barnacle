console.log(localStorage);

localStorage.setItem('testStorage', 'Yo');
localStorage.setItem('testStorage', 'Heya');

let testStorage = localStorage.getItem('testStorage');
console.log(testStorage);

localStorage.removeItem('testStorage');
console.log(localStorage.getItem('testStorage'));

let button = document.querySelectorAll('button');
button.addEventListener(`click`, () => {
    let counter = Number(localStorage.getItem('counter'));
    let updatedCounter = counter + 1

    localStorage.setItem('counter', updatedCounter);
});

let input = document.querySelector('input');
input.addEventListener('input', () => {
    console.log('WORKS');

    let inputValue = event.target.value;
    localStorage.setItem('inputStorageValue', inputValue)
});

let h1 = document.querySelector('h1');
h1.textContent = localStorage.getItem('inputStorageValue');
input.value = localStorage.getItem('inputStorageValue');