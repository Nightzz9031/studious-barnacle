let studentObj = {
    name: 'Jonas',
    'second name': 'Jonauskas',
    surname: 'Jonauskas',
    age: 25,
    group: 'type25',
    city: 'Vilnius',
}

console.log(studentObj);

console.log(studentObj['name']);
console.log(studentObj['surname']);
console.log(studentObj['age']);
console.log(studentObj['second name']);
console.log('========================');

let propertyName = 'city';
console.log(studentObj[propertyName]);
console.log('========================');

console.log(studentObj.name);
console.log(studentObj.surname);
console.log(studentObj.age);
console.log('========================');

studentObj.active = true;
studentObj.stipendija = 1000;
console.log(studentObj);

studentObj['birth city'] = 'Klaipeda';
console.log(studentObj['birth city']);

delete studentObj.stipendija;
console.log(studentObj.stipendija);
console.log('========================');

let studentHobbies = ['Football', 'Golf', 'Gaming'];
studentObj.hobbies = studentHobbies;

console.log(studentObj.hobbies[0]);

studentObj.hobbies.push('Yoga');

studentObj.hobbies.map((hobby) => console.log('Map: ', hobby));
console.log('========================');
// // 1 variant
// let studentAddress = {
//     city: 'Vilnius',
//     street: 'Vilniaus st.',
//     houseNr: 15,
//     aptNr: 5,
// }

// studentObj.address = studentAddress;

// console.log(studentObj);
// // 2 variant
// studentObj.address = {
//     city: 'Vilnius',
//     street: 'Vilniaus st.',
//     houseNr: 15,
//     aptNr: 5,
// }

// console.log(studentObj);
// 3 variant
studentObj.address = new Object(); // {};
studentObj.address.city = 'Vilnius';
studentObj.address.street = 'Vilniaus st';
studentObj.address.houseNr = 15;
studentObj.address.aptNr = 5;

console.log(studentObj);

for(let key in studentObj){
    let value = studentObj[key];    
    console.log(key + ': ' +  value);
}




let company = new Object();

company.name = 'Example ex';
company.opened = 2022;
company.code = 2315235;
company.employees = 35;
company.CEO = 'Petras Petrauskas';
company.NVO = false;
    company.contacts  = new Object();
    company.contacts.phone = '+37066545466';
    company.contacts.email = "testest@gmail.com";
        company.contacts.address = new Object();
        company.contacts.address.country = 'Lithuania';
        company.contacts.address.city = 'Vilnius';
        company.contacts.address.street = 'Vilniaus st';
        company.contacts.address.apt = 15;

let workingLocation = ['Vilnius', 'Klaipeda']
company.workingLocation = workingLocation;
let activityAreas = ['IT', 'Design']
company.activityAreas = activityAreas;

let company2 = {
    name: 'Example2',
    opened: '2022',
    code: 12341254,
    employees: 15,
    ceo: 'Jonas Jonaitis',
    nvo: true,
}

company2.activityAreas = activityAreas;
company2.workingLocation = workingLocation;

company2.contacts  = new Object();
    company2.contacts.phone = '+370662362366';
    company2.contacts.email = "testest235@gmail.com";
        company2.contacts.address = new Object();
        company2.contacts.address.country = 'Lithuania';
        company2.contacts.address.city = 'Klaipeda';
        company2.contacts.address.street = 'Klaipedos st.';
        company2.contacts.address.apt = 15;

company.subsidiary = company2;
console.log('=================');
company.listAddress = function() {
    let stringAddress = this.contacts.address.country + ', ' + this.contacts.address.city + ', ' + this.contacts.address.street + ', ' + this.contacts.address.apt;
    console.log(stringAddress);
};

company.toggles = function(){
    this.nvo = !this.nvo;
}

let stringWorkingLocation = company.workingLocation.reduce((allCountries, currentCountry, currentIndex) => {
    let lastIndex = company.workingLocation.length - 1

    if(currentIndex === lastIndex){
    return allCountries + ', ' + currentCountry + '. '
    } 
    else{
        return allCountries + ', ' + currentCountry
    };
});
let stringActivityAreas = company.activityAreas.reduce((allActivities, currentActivityArea, currentIndex) => {
    let lastIndex = company.activityAreas.length - 1

    if(currentIndex === lastIndex){
    return allActivities + ', ' + currentActivityArea + '. '
    } 
    else{
        return allActivities + ', ' + currentActivity
    };
});

company.addLocation = function(location){
    this.workingLocation.push(location);    
};
company.addArea = function(area){
    this.activityAreas.push(area);    
};

company.removeLocation = function(location){
        this.workingLocation = this.workingLocation.filter(oldLocation => location !== oldLocation);    
    };
company.removeArea = function(area){
        this.activityAreas = this.activityAreas.filter(oldArea => area !== oldArea);    
    };

company.toggles();
console.log(company.nvo);
company.toggles();
console.log(company.nvo);
company.listAddress();
console.log(stringWorkingLocation);
console.log(stringActivityAreas);
company.addLocation('Alytus');
console.log(company.workingLocation);
company.addArea('UX');
console.log(company.activityAreas);
company.removeLocation('Vilnius');
console.log(company.workingLocation);
company.removeArea('IT');
console.log(company.activityAreas);






// let studentObj1 = {
//     name: 'Jonas',
//     'second name': 'Jonaitis',
//     surname: 'Jonauskas',
//     age: 25,
//     group: 'type25',
//     city: 'Vilnius',
//     active: false,
//     getFullName1: function(){
//         console.log(this.name);
//         return `${this.name} ${this["second name"]} ${this.surname}`
//     },
//     setActive(){
//         this.active = true;
//     },
//     swapActivity(){
//         // if(this.active)
//         //     this.active = false;
//         // else{
//         //     this.active = true;
//         // }


//         // this.active ? this.active = false : this.active = true;


//         this.active = !this.active;
//     }
// }

// console.log(studentObj1.getFullName1());  
// studentObj1.swapActivity();
// console.log(studentObj1.active);
// studentObj1.swapActivity();
// console.log(studentObj1.active);
// studentObj1.swapActivity();
// console.log(studentObj1.active);
// studentObj1.swapActivity();
// console.log(studentObj1.active);
// studentObj1.swapActivity();
// console.log(studentObj1.active);
// studentObj1.swapActivity();
// console.log(studentObj1.active);

// studentObj.removeHobby = function(hobby){

//     this.hobbies = this.hobbies.filter(oldHobby => hobby !== oldHobby);    
// };

// studentObj.removeHobby('Golf');
// studentObj.removeHobby('Yoga');
// console.log(studentObj.hobbies);






console.log('===========================================');
let cities = [
    {
        name: 'Vilnius',
        population: 544386,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
        },
        touristAttraction: ['ex1', 'ex1,1', 'ex1,2', 'ex1.3'],
        isCapital: true,
    },
    {
        name: 'Riga',
        population: 632614,
        location: {
            continent: 'Europe',
            country: 'Latvia',
        },
        touristAttraction: [],
        isCapital: true,
    },
    {
        name: 'Alytus',
        population: 49195,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
        },
        touristAttraction: [],
        isCapital: false,
    },
    {
       name: 'Paris',
        population: 2161000,
        location: {
            continent: 'Europe',
            country: 'France',
        },
        touristAttraction: ['ex4', 'ex5'],
        isCapital: true,
    },
    {
       name: 'Harare',
        population: 1480000,
        location: {
            continent: 'Africa',
            country: 'Zimbabwe',
        },
        touristAttraction: ['ex5', 'ex5,1'],
        isCapital: true,
    },
    {
       name: 'Seoul',
        population: 9776000,
        location: {
            continent: 'Asia',
            country: 'South Korea',
        },
        touristAttraction: ['ex6'],
        isCapital: true,
    },
    {
       name: 'Munich',
        population: 1412376,
        location: {
            continent: 'Europe',
            country: 'Germany',
        },
        touristAttraction: ['ex7'],
        isCapital: false,
    },
    {   
       name: 'Rio de Janeiro',
        population: 6764567,
        location: {
            continent: 'South America',
            country: 'Brazil',
        },
        touristAttraction: ['ex8'],
        isCapital: false,
    },
    {
       name: 'Brasilia',
        population: 2864577,
        location: {
            continent: 'South America',
            country: 'Brazil',
        },
        touristAttraction: ['ex9', 'ex9,1', 'ex9.2', 'ex9,3', 'ex9.4', 'ex9,.5'],
        isCapital: true,
    },
    {
       name: 'Melbourne',
        population: 5076567,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttraction: [],
        isCapital: false,
    },
]
console.log(cities);
console.log('===========================================');
const citiesContainer = document.querySelector('.cities-container');

cities.map(city => {
let touristAttractionText = '';

if(city.touristAttraction.length > 0){

   let touristAttractionTitle = '';

   if(city.touristAttraction.length === 1){
    touristAttractionTitle = `Main tourist attraction of ${city.name} is`;
   }
   else{
    touristAttractionTitle = `Main tourist attractions of ${city.name} are`;
   }

let touristAttractionElement = '';

    city.touristAttraction.map(place => {
        touristAttractionElement += `<li>` + place + `</li>`;
    });

    touristAttractionText = `<h4>${touristAttractionTitle}</h4>
                             <ul>${touristAttractionElement}</ul>`
}
let isCapitalClass = '';
let isCapitalCheck = '';
let isCapitalTitle = '';
if(city.isCapital){
    isCapitalCheck = `${city.name} is the capital of ${city.location.country}`;
    isCapitalTitle = '(capital)';
    isCapitalClass = ' capital';
}

    citiesContainer.innerHTML += `<div class="city-item${isCapitalClass}">
                                <h3>${city.name} ${isCapitalTitle}</h3>
                                <p>${city.name} city is located in ${city.location.continent}, ${city.location.country} and has a population of ${city.population} people. ${isCapitalCheck}</p>
                                ${touristAttractionText}
                                </div>`;
});


const cityItemCapital = document.querySelector('.cities-container');

cities.map((city) => {
});

let capitalTitles = document.querySelectorAll(`.capital h3`);
capitalTitles.forEach(title => {
    title.style.color = 'red';
});

let capitalBackground = document.querySelectorAll(`.city-item`);
for (let i = 0; i < capitalBackground.length; i++) {
  if(i % 2 === 0){
  capitalBackground[i].style.backgroundColor = "grey"
  }
}

// let firstAttraction = document.querySelectorAll(`li:first-child`);
// firstAttraction.forEach(attraction => {
//     attraction.style.color = 'green';
// });

// let lastAttraction = document.querySelectorAll(`li:nth-of-type(1n+4)`);
// lastAttraction.forEach(attraction => {
//     attraction.style.color = 'red';
// });

let lastAttraction = document.querySelectorAll(`ul`);
lastAttraction.forEach(list => {
    let places = list.querySelectorAll('li');
    places.forEach((place, index) => {
        if(index === 0){
        place.style.color = 'green';
    }else if(index > 2)
        place.style.color = 'red';
    })
});

let container = document.querySelectorAll('.cities-container');

container.forEach((cont) => {
    cont.style.padding = '20px';
    cont.style.flexWrap = 'wrap';
    cont.style.display = 'flex';
    cont.style.height = '100vh';
    cont.style.width = '600px';
});

let boxes = document.querySelectorAll('.city-item');
    box.forEach((box) => {
        box.style.width = '50%';
});

















