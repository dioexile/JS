let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = Math.floor(Math.random() * 101);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback/100);

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


// console.log(screens)
