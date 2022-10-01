const divEle = document.getElementById('div-one');

console.log(divEle);

// innerHTML, innerText

// Inner Text
// divEle.innerText = '<h1>B39WETAMIL</h1>';

// Inner HTML
// divEle.innerHTML = '<h1>B39WETAMIL</h1>';

divEle.style.height = '20px';
divEle.style.color = 'blue';
divEle.style.background = 'linear-gradient(to left, red, yellow, blue)';


// working with classes
const divTwo = document.getElementById('div-two');

console.log(divTwo);

// class="h-w border-black bg-blue"

// divTwo.classList.add('h-w');
// divTwo.classList.add('border-black');
// divTwo.classList.add('bg-blue');

// createElement
const onlineImage = document.createElement('img'); // 

onlineImage.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_640.jpg');

onlineImage.style.height = '200px';
onlineImage.style.width = '200px';

onlineImage.setAttribute('alt', 'Online-Logo');


const divThree = document.createElement('div');

const onlineImageTwo = document.createElement('img');

onlineImageTwo.setAttribute('src', 'https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg');

// divTwo.innerHTML = onlineImage.toString();

// appendChild
// returns the appended element
const returnedElement = divThree.appendChild(onlineImage);
console.log(returnedElement);

// append
// returns undefined
// document.body.append(onlineImageTwo);
// console.log(returnedElementTwo);


document.body.append(divThree);


// elements by classname not prefferred for DOM manipulation
const elements = document.getElementsByClassName('common-class');
console.log(elements);


const idElement = document.getElementById('B37'); // always returns the first element which has the id
console.log(idElement);


// querySelector
// const queryElement = document.querySelector('#B37');
// console.log(queryElement);


const queryElement = document.querySelector('.common-class'); // always return first matching element
console.log(queryElement);

const queryElements = document.querySelectorAll('.common-class'); // returns all matching elements
console.log(queryElements);


