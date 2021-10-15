let title = document.getElementsByTagName('h1')

let buttons = document.getElementsByClassName('handler_btn')
let btn1 = buttons[0]
let btn2 = buttons[1]
let btn3 =document.querySelector('.screen-btn')

let otherItemsPercent = document.querySelectorAll('.percent')
let otherItemsNumber = document.querySelectorAll('.number')

let input = document.querySelector('.rollback input[type=range]')
let span = document.querySelector('.rollback span.range-value')

let inputs = document.getElementsByClassName('total-input') 

let screens = document.querySelectorAll('.screen')


otherItemsNumber.forEach(function(item){
  console.log(item);
});
otherItemsPercent.forEach(function(item){
  console.log(item);
});

console.log(title[0])
console.log(btn1,btn2)
console.log(btn3)
console.log(span)
console.log(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4])