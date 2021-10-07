let title 
let screens 
let screenPrice 
let adaptive
let rollback = Math.floor(Math.random() * 101);

let service1
let service2
let servicePrice2
let fullPrice
let servicePercentPrice = fullPrice - fullPrice * (rollback/100);

const isNumber =function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
  title  = prompt('Как называется ваш проект?')
  screens = prompt('Какие типы экранов нужно разработать?')
  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?')
  } while (!isNumber(screenPrice));
  adaptive = confirm('Нужен ли адаптив на сайте?')
}

if (fullPrice>30000 ) {
alert('Даем скидку в 10%');
} else if(fullPrice >= 15000 && fullPrice <= 30000){
  alert('Даем скидку в 5%');
}
else if(fullPrice <= 15000 && fullPrice >= 0){
  alert('Скидка не предусмотрена');
}
else if(fullPrice <=0){
  alert('Что то пошло не так');
}



const getAllServicePrices = function(){
  let sum=0
  for (i = 0; i < 2; i++) {
    if (i===0){
    service1 = +prompt('Какой дополнительный тип услуги нужен?')
    } else if(i===1){
      service2 = +prompt('Какой дополнительный тип услуги нужен?')
    }
    sum+= +prompt('Сколько это будет стоить?');
    while (!isNumber(sum)){
      sum= +prompt('Сколько это будет стоить?');
    }
    
  } 
  return sum
}

function getFullPrice(screenPrice, allServicePrices){
  return screenPrice+allServicePrices
};
asking()
function getTitle(string) {
  if (string.charAt(0)==' ') {
    return string.charAt(1).toUpperCase() + string.slice(1);
  } else {
    return string.charAt().toUpperCase() + string.slice(1);
  }
}

function getServicePercentPrices(a, b){
  return a-b
}
servicePercentPrice = getServicePercentPrices(fullPrice - servicePercentPrice)



allServicePrices=getAllServicePrices()
fullPrice=getFullPrice()

console.log("allServicePrices", allServicePrices)
console.log(getTitle(title));
console.log(allServicePrices);
console.log(screens.split());
 
