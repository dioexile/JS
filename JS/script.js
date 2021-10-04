let title
let screens
let screenPrice
let rollback
let fullPrice
let titladaptivee

title = 'Document';
screens ='Простые, Сложные, Интерактивные';
screenPrice = 10000;
adaptive=true;
fullPrice = 1000000;
rollback = Math.floor(Math.random() * 101)
console.log(rollback)
console.log(typeof fullPrice, typeof adaptive, typeof title, screens.length)
console.log(screens.toLowerCase().split(", "))
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей')
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей')
console.log(fullPrice * (rollback/100))
