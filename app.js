/* USE THIS FOR UNDERSTANDING SELECTION FOR ID

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

*/

/*LEARNING THE BASICS OF SELECTING TAGS
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const notPurple = document.getElementsByClassName('not-purple')

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}
*/

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const notPurple = document.querySelectorAll('not-purple')

for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}
