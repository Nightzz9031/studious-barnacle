// SCHOOLING AGES
// let person = prompt('Age');

// if(isNaN(person)){
//     console.log("Age must be a number")}
//     else if(person  <= 0 || person >= 1000){
//         console.log("DEAD")}
//     else if(person < 6){
//         console.log("Too young for school")}
//         else if(person == 6){
//             console.log("Might be in first grade")}
//     else if(person  >= 7 || person <= 10){
//         console.log("Goes to elementary")}
//         else if(person == 10){
//             console.log("Might be in middle school")}
//     else if(person  >= 11 || person <= 14){
//         console.log("Goes to middle school")}
//         else if(person == 11){
//             console.log("Might still be in elementary")}
//         else if(person == 14){
//             console.log("Might be in high school")}
//     else if(person  >=15 || person <= 18){
//         console.log("Goes to high school")}
//         else if(person == 15){
//             console.log("Might still be in middle school")}
//     else if(person  >= 19){
//         console.log("Finished school")}








// GRADING
// let grade = prompt('Evaluate me')

// if(isNaN(grade))
//     console.log("Grade must be a number!")
//     else if(grade <= 10)
//         console.log("Very bad")
//     else if(grade <= 20)
//         console.log("Bad")
//     else if(grade <= 30)
//         console.log("Decent")
//     else if(grade <= 40)
//         console.log("Good")
//     else if(grade <= 50)
//         console.log("Very good")
  







// STOP LIGHT
// let light = "yellow";

// switch (light) {
//     case "green": 
//         console.log("Go");
//         break;
//     case "yellow": 
//         console.log("Wait");
//         break;
//     case "red": 
//         console.log("Stop");
//         break;
//     default:
//         console.log("ERROR")
// }







// // DOM
// let name;
// let isLogged;
// let time;
// let isBirthday;

// let h1Element = document.querySelector('h1');
// let greeting;

// if(time >= 6 && time <= 12)
//         greeting = 'Good morning ';
//     else if(time >=12 && time <= 18)
//         greeting = 'Good day ';
//     else{
//         greeting = 'Good evening ';
//     }

// if(isLogged === true && isBirthday === true){
//     h1Element.textContent += greeting + name + ' and happy birthday';
// }else if(isLogged === true){
//         h1Element.textContent += greeting + name;
// }else{
//     h1Element.textContent += greeting;
// }

// function greetingFunction(name, isLogged, time, isBirthday){
//     if(time >= 6 && time <= 12)
//         greeting = 'Good morning ';
//     else if(time >=12 && time <= 18)
//         greeting = 'Good day ';
//     else{
//         greeting = 'Good evening ';
//     }

//     if(isLogged === true && isBirthday === true){
//         h1Element.textContent += greeting + name + ' and happy birthday';
//     }else if(isLogged === true){
//             h1Element.textContent += greeting + name;
//     }else{
//         h1Element.textContent += greeting;
//     }
// }

// greetingFunction('John', true, 19, true);









// QUIZ
// console.log("------------ LEVEL 1 ------------")
// let correctAnswer1 = 579;
// let correctAnswer2 = 'Sun';
// let correctAnswer3 = 'Kangaroo';
// let correctAnswer4 = 'Whale';
// let correctAnswer5 = 1;
// let correctAnswer6 = 54;
// let correctAnswer7 = 'New York';

// let playerAnswer1 = 579;
// let playerAnswer2 = 'Sun';
// let playerAnswer3 = 'Kangaroo';
// let playerAnswer4 = 'Whale';
// let playerAnswer5 = 1;
// let playerAnswer6 = 52;
// let playerAnswer7 = 'New York';

// let correctCount = 0;
  
// if(playerAnswer1 == correctAnswer1){
//     correctCount++;
//     console.log('Question 1 = Correct!');}
//     else{
//         console.log('Question 1 = Incorrect');
//     }
// if(playerAnswer2 == correctAnswer2){
//     correctCount++;
//     console.log('Question 2 = Correct!');}
//     else{
//         console.log('Question 2 = Incorrect');
//     }

// console.log('Correct answers = ' + correctCount);
    
// if(correctCount >= 1){
//     console.log('Congratulations! You made it to the 2nd level!')
//     console.log('------------ LEVEL 2 ------------');}
//     else{
//         console.log('Sorry, you did not collect enough points.')
//     }

// if(playerAnswer3 == correctAnswer3){
//     correctCount++;
//     console.log('Question 3 = Correct!');}
//     else{
//         console.log('Question 3 = Incorrect');
//     }
// if(playerAnswer4 == correctAnswer4){
//     correctCount++;
//     console.log('Question 4 = Correct!');}
//     else{
//         console.log('Question 4 = Incorrect');
//     }

// console.log('Correct answers so far = ' + correctCount);
// if(correctCount >= 4){
//     console.log('Congratulations! You made it to the 3rd level!')
//     console.log('------------ LEVEL 3 ------------');}
//     else{
//         console.log('Sorry, you did not collect enough points.')
//     }

// if(playerAnswer5 == correctAnswer5){
//     correctCount++;
//     console.log('Question 5 = Correct!');}
//     else{
//         console.log('Question 5 = Incorrect');
//     }
// if(playerAnswer6 == correctAnswer6){
//     correctCount++;
//     console.log('Question 6 = Correct!');}
//     else{
//         console.log('Question 6 = Incorrect');
//     }
// if(playerAnswer7 == correctAnswer7){
//     correctCount++;
//     console.log('Question 7 = Correct!');}
//     else{
//         console.log('Question 7 = Incorrect');
//     }
    
// console.log('Correct answers so far = ' + correctCount);
// if(correctCount >= 6){
//     console.log('Congratulations! You made it to the 4th level!')
//     console.log('------------ LEVEL 4 ------------');}
//     else{
//         console.log('Sorry, you did not collect enough points.')
//     }











// function greet(){
//     console.log('Yo ');
// }
// greet();

// function greetName(name){
//     let text = 'Yo, ' + name;
//     console.log(text);
// }
// greetName('John');
// greetName('Doe');












// //SQUARE AREA
// function square(height, width, units){
//     let unitsText = units;
//     if(!units){
//         unitsText = 'units²';
//     }
//     let area = height * width;
//     let text = 'Square area is ' + area + units;

//     return text;
// }

// console.log(square(10, 20));


// //TRIANGLE AREA 
// function triangle(height, width, units){
//     // //let unitsText = units ? units : 'units';
//     let unitsText;
//     if(units){
//         unitsText = units;
//     }else{
//         unitsText = 'units²';
//     }
        
    
//     let area = height * width / 2;
//     let text = 'Triangle area is ' + area + units;
    
//     return text;
// }

// console.log(triangle(10, 15));


// //BOTH AREA
// function figures(height, width, units = 'units²'){
//     let htmlElement = document.querySelector('h1');
//     rect = square(height, width, units);
//     triangleText = triangle(height, width, units);
    
//     htmlElement.textContent = rect + ' ' + triangleText;
// }

// figures(10, 25);












// // FOR INTRO
// function numbers(){
// for(let i=0; i<11; i++){
//     console.log(i);
//     }
// }
// numbers();


// function numbers(start, count, interval){
// for(let i = start; i>count; i-=interval){
//     console.log(i + '*2 = ' + (i*2))
//     console.log(i + '*5 = ' + (i*5))
//     console.log(i + '+5 = ' + (i+5))
//     console.log(i + '-2 = ' + (i-2))
//     console.log(i + '^2 = ' + (i**2))
//     console.log(i + '^3 = ' + (i**3))
//     console.log('----------------')
//     }
// }
// numbers(100, 0, 5);










// // FIZZ BUZZ
// function fizzBuzz(start, count, interval){
//     let list = document.querySelector('ul');

//     for(let i = start; i<count; i+=interval){
//         let output = '';
//             i % 3 === 0 && (output += 'Fizz');
//             i % 5 === 0 && (output += 'Buzz');
//             i % 7 ===0 && (output += 'Biff');
//             i % 9 === 0 && (output += 'Fuzz');
//             i % 12 === 0 && (output += 'Bizz');
//             output === '' && (output += i);
//         console.log(output);
//         list.innerHTML += `<li>${output}</li>`;
//     }

    // // OR

    // console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') + (i % 7 ? '' : 'Biff') + (i % 9 ? '' : 'Fuzz') + (i % 11 ? '' : 'Buff')|| i)

    // // OR

    // if(i%7 === 0 && i%5 === 0 && i%3 === 0){
    //     console.log('FizzBuzzBiff');
    // }
    // else if(i%3 === 0 && i%5 === 0){
    //     console.log('FizzBuzz');
    // }
    // else if(i%9 === 0){
    //     console.log('Fuzz');
    // }
    // else if(i%7 === 0 && i%5 === 0){
    //     console.log('BuzzBiff');
    // }
    // else if(i%3 === 0){
    //     console.log('Fizz');
    // }
    // else if(i%5 === 0){
    //     console.log('Buzz');
    // }
    // else if(i%7 === 0){
    //     console.log('Biff');
    // }
    // else{
    //     console.log(i);
    // }

// fizzBuzz(1, 1000, 1);


// function test(){
//     for(let i=0; i<1000; i++)
//     if(i%7 === 0)
//         console.log(i);
// }
// test();










// // ARRAYS
    // let plants = ['tomato', 'apple', 'banana', 'orange', 'pineapple', true, 323, ['one', 'two', 'three']];
    // console.log(plants);

    // console.log(plants[0]);
    // console.log(plants[1]);
    // console.log(plants[2]);
    // console.log(plants[3]);
    // console.log(plants[4]);
    // console.log(plants[5]);
    // console.log(plants[6]);
    // console.log(plants[7]);
    // console.log(plants[7][0]);
    // console.log(plants[7][1]);
    // console.log(plants[7][2]);

    // console.log(plants[7].length);

    // let array = [1, 2, 3, 4, 5, 6];
    // console.log(array);
    // array[2] = 'three';
    // console.log(array);
    // array[6] = 'seven';
    // console.log(array);

    // let cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];
    // console.log(cities);
    // //remove last
    // let removedCities = cities.pop();
    // console.log('Origingal cities: ' + cities);
    // console.log('Removed cities: ' + removedCities);
    // //remove first
    // let removedFirstCity = cities.shift();
    // console.log('Origingal cities: ' + cities);
    // console.log('Removed cities: ' + removedFirstCity);
    // //add city to last
    // cities.push('Jonava');
    // console.log(cities);
    // //add city to first
    // cities.unshift('Taurage');
    // console.log(cities);
    // //remove anywhere no modify
    // let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany'];
    //     console.log('--------------SLICE-------------')
    // console.log(countries);
    // let slicedCountries = countries.slice(1, 3);
    // console.log(slicedCountries);
    // console.log(countries);









// // ROKAS
// //1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais. (4 funkcijos)
// console.log('1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais.');
// let firstNum = 15;
// let calculator = '+';
// let secondNum = 5;

// switch(calculator){
//     case '+':
//         var result = parseFloat(firstNum) + parseFloat(secondNum);
//         console.log(result);
//         break;
//     case '-':
//         result = firstNum - secondNum;
//         console.log(result);
//         break;
//     case '*':
//         result = firstNum * secondNum;
//         console.log(result);
//         break;
//     case '/':
//         result = firstNum / secondNum;
//         console.log(result);
//         break;
//     }

// //2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
// console.log('2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.');
// let array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
// function arrayDisplay(){
//     console.log(array);
// }
// arrayDisplay();

// //3) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.
// console.log('3) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.');
// let reverseArray = array.reverse();
// function reversedArray(){
//     console.log(reverseArray);
// }
// reversedArray();

// //4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.
// console.log('4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.');
// let sortArray = array.sort();
//     function sortedArray(){
//         console.log(sortArray);
//     }
// sortedArray();

// //5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
// console.log('5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.');
// let numberArray = [9, [3, 4, 5], [2, 6], [7, 8], 1];
// let temporaryArray = [];
// function sortedNumbers(){
//     // const sortNumbers = numberArray.sort().reverse(); 
//     // console.log(sortNumbers);
//     temporaryArray = numberArray.flat(Infinity);
//     const sortNumbers = temporaryArray.sort().reverse();
//     console.log(sortNumbers);
// }
// sortedNumbers();

// //6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro iki antrojo.
// console.log('6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro iki antrojo.');
// let slicedArray = numberArray.slice(0,2);
// function sliceArray(){
//     console.log(slicedArray);
// }
// sliceArray();

// //7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro iki trečiojo duotojo parametro.
// console.log('7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro iki trečiojo duotojo parametro.');
// function picker(interval, from, to){
//     for(i=from;i<to;i+=interval)
//         if(to<array.length)
//         console.log(array[i]);
//         else if(to>array.length)
//         console.log('Value exceeds array lenght!')
// }

// picker(2,4,8);
// //extra1) Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras tol kol antrasis parametras liks tuščias.  ?????????????????









// //1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
// let randomArray = ['yes', 'no', 'maybe', 25, 121, 55, 'washington', 'lithuania', 'beer', 'yarn', 'moose', 'baseball', 1525, 'mouse']
// randomArray.forEach(element => console.log(element));
// console.log('1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.');
// for (i = 0; i<randomArray.length; i++)
//     console.log((i+1) + ': ' + randomArray[i]);

// //2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą. 
// console.log('2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą. ');
// for (i = 0; i<randomArray.length; i+=3)
//     console.log(randomArray[i]);

// //3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.    pvz:(ats: function([1,2,3,4,5,6,7], 2) => 2 4 6)
// console.log('3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.');
// function interval(interval){
//     for (i = 0; i<randomArray.length; i+=interval)
//     console.log(randomArray[i]);
// }
// interval(2);

// //4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
// console.log('4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.');
// for (i = 0; i<randomArray.length; i++)
// if(randomArray[i]>=54){
//     console.log(randomArray[i]);
// }

// //5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.   pvz:(ats: function(['labas','ate','labai'], 'l') => 'labas','labai')
// console.log('Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide');
// let tempArray = [];
// function startWith(letter){
//     for(i=0;i<randomArray.length;i++)
//     if(typeof randomArray[i] === 'string'){
//         tempArray.push(randomArray[i]);   
//     }   
//     sorter = tempArray.filter((word) => word.startsWith(letter));
//     console.log(sorter)
// }
// startWith('m');

// //6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
// console.log('6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka.');
// let sortedStrings = array.sort((a,b) => b.length - a.length);
// for(i=0; i<array.length; i++){
//     if(!isNaN(array[i]))
//         delete array[i];
// }
// console.log(sortedStrings);

// //7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.
// console.log('7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.');
// let tmpArray = [];
// function evenSorter(){
//     for(i=0;i<array.length;i++)
//     if(typeof array[i] === 'number'){
//         tmpArray.push(array[i]);
//         tmpArray.sort((a, b) => b - a);
//         console.log(tmpArray);
//     }
// }
// evenSorter();

// //extra 1.1) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 1 iki 100.
// console.log('extra 1.1) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 1 iki 100.');
// let primeArray = [];
// let resultss = [];
// for(i=0;i<100;i++){
//     primeArray.push(i);
// }
// function isPrime(num){
//     if(num === 2){
//         return true;
//     }
//     if(num % 2 === 0){
//         return false;
//     }
//     return true;
// }
// for(i=0;i<primeArray.length;i++){
// if(isPrime(primeArray[i])){
//     resultss.push(primeArray[i]);
//     }
// }
// console.log(resultss);

// //extra 1.2) Parašyti funkciją, kuri atrinktų ir į konsolę išspausdintų tik pirminius skaičius jai nurodytame intervale.
// console.log('extra 1.2) Parašyti funkciją, kuri atrinktų ir į konsolę išspausdintų tik pirminius skaičius jai nurodytame intervale.');
// let primesArray = [];
// let results = [];
// for(i=0;i<100;i++){
//     primesArray.push(i);
// }
// function isPrime(num){
//     if(num === 2){
//         return true;
//     }
//     if(num % 2 === 0){
//         return false;
//     }
//     return true;
// }
// function selectInterval(start, end){
// for(i=start;i<end;i++){
// if(isPrime(primesArray[i])){
//     results.push(primesArray[i]);
//     }
// }
// console.log(results);
// }
// selectInterval(1, 24);








// //1) Pasirašyti / susikurti string kintamąjį.
// let string = 'NonseNsicaL';

// //2) Pasirašyti / susikurti number kintmąjį.
// let number = 92353723132;

// //3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.
// let stringArray = ['apple', 'bee', 'city', 'dent', 'energy', 'flight', 'google', 'hi', 'imaculate', 'junior', 'kibble', 'lemon', 'moon', 'nanoscope', 'opressor', 'protector', 'query', 'root', 'stlye', 'tight', 'uber', 'view', 'we', 'xylophone', 'yes', 'zebra']

// //4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// //5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
// let mixedArray = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j', 10];

// //6) Išvesti pirmąją 1'os užduoties kintamojo raidę.
// console.log(string.charAt(0));

// //7) Išvesti paskutinę 1'os užduoties kintamojo raidę.
// console.log('7) Išvesti paskutinę 1os užduoties kintamojo raidę.');
// console.log(string.charAt(string.length - 1));

// //8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.
// console.log('8) Išvesti viduriniąją 1os užduoties kintamojo raidę.');
// console.log(string.charAt(string.length / 2));

// //9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").
// console.log('9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę');
// function selector(select){
//     console.log(string.charAt(select));
//     }
// selector('3');

// //10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.
// //11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.
// console.log('10) Patikrinti ar 2os užduoties kintamasis yra lyginis skaičius. 11) Patikrinti ar 2os užduoties kintamasis yra nelyginis skaičius.');
// if(number % 2 === 0)
//     console.log('Number is even');
//     else{
//         console.log('Number is not even');
//     }

// //12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.
// console.log('12) Patikrinti ar 2os užduoties kintamasis yra sveikasis skaičius.');
// if(Number.isInteger(number))
//     console.log('Number is a whole number');
//     else{
//         console.log('Number is not a whole number');
//     }

// //13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius.   Pvz.: (uzd13(5) => nelyginis);
// console.log('13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius.');
// function evenChecker(number){
//     if(number % 2 === 0)
//     console.log('Number is even');
//     else{
//         console.log('Number is not even');
//     }
// }
// evenChecker(7);

// //14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
// console.log('14) Iš 3čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.');
// for(i=0;i<stringArray.length;i++)
//     if(stringArray[i].length > 5)
//         console.log(stringArray[i]);      

// //15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
// console.log('15) Iš 3čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.');
// for(i=0;i<stringArray.length;i++)
//     if(stringArray[i].length < 8)
//         console.log(stringArray[i]);

// //16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
// console.log('16+) Parašyti funkciją, kuri iš 3čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.');
// function firstLetters(){
//     for(i=0;i<stringArray.length;i++)
//         console.log(stringArray[i].charAt(0));
// }
// firstLetters();

// //17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.
// console.log('17+) Parašyti funkciją, kuri iš 3čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.');
// function lastLetters(){
//     for(i=0;i<stringArray.length;i++)
//         console.log(stringArray[i].charAt(stringArray[i].length - 1));
// }
// lastLetters();

// //18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
// console.log('18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B.');
// function wordSelector(over, under){
// for(i=0;i<stringArray.length;i++)
//     if(stringArray[i].length > over && stringArray[i].length < under)
//         console.log('Words over ' + over + " but under " + under + ": " + stringArray[i]); 
// }
// wordSelector('4', '6')

// //19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
// console.log('19) Sudėti visus 4tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.');
// let sum = 0;
// for(i=0;i<numbersArray.length;i++)
//     sum = sum + numbersArray[i];
// console.log('Sum of your array is: ' + sum);

// //20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
// console.log('20) Sudėti kas antrą 4tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.');
// let sumnth = 0;
// for(i=0;i<numbersArray.length;i+=2)
//     sumnth = sumnth + numbersArray[i];
// console.log('Sum of your arrays every 2nd element is: ' + sumnth);

// //21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
// console.log('21+) Parašyti funkciją, kuriai padavus 4tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.');
// let sumPicked = 0;
// function chooseInterval(interval){
// for(i=0;i<numbersArray.length;i+=interval)
//     sumPicked = sumPicked + numbersArray[i];
// console.log('Sum of your arrays every ' + interval + ' element is: ' + sumPicked);
// }
// chooseInterval(5);

// //22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)
// console.log('22++) Parašyti funkciją, kuriai padavus 4tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę.');
// let sumEvens = 0;
// function chooseIntervalEven(intervals){
// for(i=0;i<numbersArray.length;i+=intervals)
// if(intervals % 2 === 0 || !intervals % 2 === 0)
//     sumEvens = sumEvens + numbersArray[i];
// console.log('Sum of your arrays every ' + intervals + ' element is: ' + sumEvens);
// }
// chooseIntervalEven(3);

// //23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.
// console.log('23) Iš 5tos užduoties masyvo atrinkite skaičius į vieną masyvą, o stringus į kitą.');
// let emptyArrayforNumbers = [];
// let emptyArrayforStrings = [];
// for(i=0;i<mixedArray.length;i++)
//     if(typeof mixedArray[i] === 'string'){
//         emptyArrayforStrings.push(mixedArray[i]);
//     }
//     else if(typeof mixedArray[i] === 'number'){
//         emptyArrayforNumbers.push(mixedArray[i]);
//     }

// console.log('New array with strings from main array: ' + emptyArrayforStrings);
// console.log('New array with numbers from main array: ' + emptyArrayforNumbers);










// console.log('=================================');
// let movieList = ['Chocolate factory', 'World of warcraft', 'Pirates of the carribean', 'Lord of the rings', 'Star wars', 'Beetlejuice', 'Fear and Loathing in Los Vegas', 'Spiderman', 'Harry Potter', 'The Rum Diary'];
// let movieReleaseDate = [1990, 1997, 2000, 2003, 2006, 2009, 2013, 2014, 2016, 2017, 2019];

// function connect(movieList, movieReleaseDate){
//     if(movieList.length === movieReleaseDate.length){
//         for(i=0;i<movieList.length;i++){
//             console.log(movieList[i] + ' was released in ' + (movieReleaseDate[i]));
//         }
//     }
//     else{
//         console.error('Dates amount does not match movie amount!')
//     }
// }
// connect(movieList, movieReleaseDate);







// console.log('=====================================================');
// let movies = [
//     ['movie1', 1999],
//     ['movie2', 2001],
//     ['movie3', 2004],
//     ['movie4', 2005],
//     ['movie5', 2006],
//     ['movie6'],
//     ['movie7', 2009],
//     ['movie8', 2012],
//     ['movie9', 2015],
//     ['movie10', 2017],
// ]

// function listMovies(movieArr){
//     for(let i=0;i<movieArr.length;i++){
//         let movieName = movieArr[i][0];
//         let movieYear = movieArr[i][1] ? `(${movieArr[i][1]})` : '';
//         // if(!movieYear){
//         //     movieYear = '';
//         // }
//             console.log(`${i+1}. ${movieName}, ${movieYear}`);

//     }
// }
// listMovies(movies);








// console.log('====================================================');
// let movies1 = ['Chocolate Factory', 'World of warcraft', 'Pirates of the carribean', 'Lord of the rings', 'Star wars', 'Beetlejuice', 'Fear and Loathing in Los Vegas', 'Spiderman', 'Harry Potter', 'The Rum Diary'];
// let movies2 = ['Fast and the Furious', 'Avatar', 'Pulp Fiction'];
// let allMovies = [movies1, movies2];

// function nestedArray(moviesArr){
//     for(let i = 0; i < moviesArr.length; i++){
//         let innerMoviesArr = moviesArr[i]; 
//         console.log(innerMoviesArr);
//         for(let j = 0; j < innerMoviesArr.length; j++){
//             console.log(innerMoviesArr[j]);
//         }
//     }
// }
// nestedArray(allMovies);








// // SIMPLE FUNCTION
// function simple(){
//     return 2 + 2;
// }
// console.log(simple());
// // SIMPLE FUNCTION WITH ARGS
// function simpleArg(num1, num2){
//     return num1 + num2;
// }
// console.log(simpleArg(2, 3));

// let func = function(num1, num2){
//     return num1 + num2;
// }
// console.log(func(1,5));

// //ARROW FUNCTION
// // 1. Create variable
// // 2. Give it sense
// // 2.1 Simple brackets
// // 2.2 Arrow (=>)
// // 2.3 Diamond brackets
// let arrowFunc1 = () => {
//     return 3 + 3;
// }
// console.log(arrowFunc1());

// let arrowFunc2 = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(arrowFunc2(5,5));

// let arrowFunc3 = (num) => {
//     return num**2;
// }
// console.log(arrowFunc3(5));

// let arrowFunc4 = num => {
//     return num**2;
// }
// console.log(arrowFunc4(7));
// // If function actions are in one line we don't need to write return or {}(diamond brackets)
// let arrowFunc5 = (num) => num**2;


// console.log(arrowFunc4(6));

// let arrowFunc6 = (num1, num2) => num1*num2;
// console.log(arrowFunc6(4,4));



// let cities = ['Vilnius', 'Alytus', 'Klaipeda', 'Siauliai', 'Panevezys', 'Taurage', 'Marijampole'];

// for (let i = 0; i<cities.length; i++){
//     console.log('For cycle: ' + cities[i]);
//     console.log(i);
// }


// cities.map(function(city, index, array){
//     console.log('Map cycle: ' + city);
//     console.log(index);
// })


// cities.map(city => console.log('Map cycle + arrow function: ' + city));


// cities.forEach((city, index) => {
//     console.log('Foreach cycle: ' + city);
//     console.log(index);
// });


// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numArray);

// let mapArray = numArray.map(number => number * number);

// console.log('Original: ', numArray);
// console.log('Map array: ', mapArray);


// let forEachArr = numArray.forEach(number => number * number);
// console.log('Original: ', numArray);
// console.log('ForEach array: ', mapArray);


// //FILTER
// let filteredArray = numArray.filter(number => number >= 5);
// console.log(numArray);
// console.log(filteredArray);




// let filterArray = [-12, -54, -100, -5, 0, 4, 7, 10, 50, 34, 23, 24, 25, 26, 27, 40]
// let moreThan = filterArray.filter(numbers => numbers >=20);
// console.log(moreThan);
// let negative = filterArray.filter(numbers => numbers < 0);
// console.log(negative);
// let mods = filterArray.filter(numbers => numbers % 3 === 0 && numbers % 4 === 0 ? numbers: '');
// console.log(mods);
// let moreLess = filterArray.filter(numbers => numbers % 4 === 0 && numbers > 12 ? numbers: '');
// console.log(moreLess);


// let reduceArray = [1, 2, 3, 4, 5, 6];

// let arraySum = reduceArray.reduce((sum,current, index) => {
//     console.log(`-------------`);
//     console.log(index);
//     console.log('Suma: ', sum);
//     console.log('Current: ', current);
//     return sum + current;
// });
// console.log(arraySum);
// console.log('=====================');


// let stringArray = ['apple', 'bee', 'city', 'dent', 'energy', 'flight', 'google', 'hi', 'imaculate', 'junior', 'kibble', 'lemon', 'moon', 'nanoscope', 'opressor', 'protector', 'query', 'root', 'style', 'tight', 'uber', 'view', 'we', 'xylophone', 'yes', 'zebra', 'badass', 'plaster'];
// let lastChar = stringArray.filter(string => string.trimEnd().endsWith('e'));
// console.log('Last character is "e": ', lastChar);

// let overEight = stringArray.filter(words => words.trimEnd().length >= 8);
// console.log('Has over 8 characters: ', overEight);

// let notDivisible = stringArray.filter(words => !words.trimEnd().length % 2 === 0 ? words : '');
// console.log('Word length not divisible by 2: ', notDivisible);

// let hasAs = stringArray.filter(words => words.trimEnd().includes('as'));
// console.log('Word includes "as" in it: ', hasAs);


// let countries = ['Lithuania', 'Greece', 'Italy', 'France', 'Germany', 'Finland', 'Austria', 'Slovenia', 'Macedonia', 'Czech Republic']

// let tangle = countries.reduce((allCountries, currentCountry, currentIndex) => {
//     let lastIndex = countries.length - 1

//     if(currentIndex === lastIndex){
//     return allCountries + ', ' + currentCountry + '. '
//     } 
//     else{
//         return allCountries + ', ' + currentCountry
//     }
// });

// console.log(tangle);


// let joinedCountries = 'Countries: ' + countries.join(', ') + '.';
// console.log(joinedCountries);




// let mapMovies = ['Chocolate Factory', 'World of Warcraft', 'Pirates of the carribean', 'Lord of the rings', 'Star wars', 'Beetlejuice', 'Fear and Loathing in Los Vegas', 'Spiderman', 'Harry Potter', 'The Rum Diary']

// function listMoviesMap1(movies){
//     let moviesListElement = document.querySelector('ol');
//     console.log(mapMovies);
//     movies.map(movie => {
//         moviesListElement.innerHTML += `<li>${movie}</li>`;
//     })
// }
// listMoviesMap1(mapMovies);