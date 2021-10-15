let btn = document.querySelector('button')
let input = document.querySelector('#text')
let square = document.querySelector('#square')
let btn2 = document.querySelector('#e_btn')
let range = document.querySelector('#range')
let span = document.querySelector('#range-span')
let circle = document.querySelector('#circle')


const wqe = function(){
  clr = input.value;
  square.style.backgroundColor = clr;
  btn2.style.display = 'none';
};
const qwe = function(){
  span.textContent = range.value;
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';
};


btn.addEventListener('click', wqe)
range.addEventListener('input',qwe)
range.addEventListener('change',qwe)

