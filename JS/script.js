const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  service1: '',
  service2: '',
  servicePrice2: 0,
  fullPrice: 30000,
  allServicePrices: 0,
  servicePercentPrice: 0,

    asking : function() {
      appData.title  = prompt('Как называется ваш проект?')
      appData.screens = prompt('Какие типы экранов нужно разработать?')
    
      do {
        appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
      } while (!appData.isNumber(appData.screenPrice));
    
      appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },

    getAllServicePrices : function(){
      let sum=0
      for (i = 0; i < 2; i++) {
        if (i===0){
        appData.service1 = +prompt('Какой дополнительный тип услуги нужен?')
        } else if(i===1){
          appData.service2 = +prompt('Какой дополнительный тип услуги нужен?')
        }
        sum+= +prompt('Сколько это будет стоить?');
        while (!appData.isNumber(sum)){
          sum= +prompt('Сколько это будет стоить?');
        }
        
      } 
      return sum
    },

    getFullPrice: function(){
      return appData.screenPrice+appData.allServicePrices
    },

    getTitle: function(string){
      if (string.charAt(0)==' ') {
        return string.charAt(1).toUpperCase() + string.slice(1);
      } else {
        return string.charAt().toUpperCase() + string.slice(1);
      }
    },
    getServicePercentPrices: function(a, b){
      return a-b
    },
    isNumber: function(num){
      return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getRollback: function(){
      if (appData.fullPrice>30000 ) {
        alert('Даем скидку в 10%');
      } else if(appData.fullPrice >= 15000 && appData.fullPrice <= 30000){
          alert('Даем скидку в 5%');
        }
      else if(appData.fullPrice <= 15000 && appData.fullPrice >= 0){
          alert('Скидка не предусмотрена');
      }
      else if(appData.fullPrice<=0){
          alert('Что то пошло не так');
      }
    },
    
    logger(){
      console.log(appData.getTitle(appData.title));
      console.log(appData.allServicePrices);
      console.log(appData.fullPrice);
      for (let key in appData) {
        
        let funcs=[]
        if(typeof appData[key] === 'function') {
          funcs.push(key)
        }
        console.log(key)
        console.log(funcs)
      }
    },
    start(){
      appData.asking()
      appData.allServicePrices = appData.getAllServicePrices()
      appData.getFullPrice()
      appData.getServicePercentPrices()
      appData.getRollback()
      appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice - appData.servicePercentPrice),
      appData.logger()
    },
    
}


appData.start()
