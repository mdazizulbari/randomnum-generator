const myButton = document.getElementById(`myButton`);
const myLable = document.getElementById(`myLable`);
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLable.textContent = randomNum;
}