/* XXX USE THIS FOR UNDERSTANDING SELECTION FOR ID

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

*/

/* XXX LEARNING THE BASICS OF SELECTING TAGS
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const notPurple = document.getElementsByClassName('not-purple')

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}


const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}
/*XXX WORKING WITH QUERYSELECTORALL
const notPurple = document.querySelectorAll('.not-purple');

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
*/
const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list')
const descriptionButtonInput = document.querySelector('input.description');
const descriptionButtonP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

// XXX TEXT MANIPULATION
toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide List';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Display List';
  }
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li)
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li)
});

//XXX TEXT MANIPULATION
descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionButtonInput.value + ':';
});


descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionButtonInput.value + ':';
  descriptionButtonInput.value = '';
});
//descriptionP.title = "List Description"
