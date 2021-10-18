let title = document.getElementsByTagName('h1')[0]

let buttons = document.getElementsByClassName('handler_btn')
let startbtn = buttons[0]
let resetbtn2 = buttons[1]
let plusbtn =document.querySelector('.screen-btn')

let otherItemsPercent = document.querySelectorAll('.percent')
let otherItemsNumber = document.querySelectorAll('.number')

let inputRange = document.querySelector('.rollback input[type=range]')
let inputRangeValue = document.querySelector('.rollback .range-value')

let total = document.getElementsByClassName('total-input') [0]
let totalCount  = document.getElementsByClassName('total-input')[1]
let totalCountOther = document.getElementsByClassName('total-input')[2]
let fullTotalCount  = document.getElementsByClassName('total-input')[3]
let totalCountRollback  = document.getElementsByClassName('total-input') [4]

let screens = document.querySelectorAll('.screen')

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePrice2: 0,
  fullPrice: 0,
  ServicePricesPercent: 0,
  ServicePricesNumber: 0,
  servicePercentPrice: 0,
  init: function(){
    appData.addTitle()
    startbtn.addEventListener('click', appData.start)
    plusbtn.addEventListener('click', appData.addScreenBlock)
    inputRange.addEventListener('input' , appData.addInputValue)
  },
  start(){
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    appData.showResult()
  },

  addInputValue: function(){
    inputRangeValue.textContent = +inputRange.value +'%';
    rollback = inputRange.value
  },


  addScreenBlock: function(){
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length - 1].after(cloneScreen)
  },


  addTitle: function(){
    document.title = title.textContent
    console.log(title.textContent)
  },


  addScreens: function(){
    screens = document.querySelectorAll('.screen')
    screens.forEach(function (screen, index){
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({id:index, name: selectName, prce: +select.value * +input.value, count: input.value})
    })
  },

  addServices: function(){
    otherItemsPercent.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      if(check.checked){
        appData.servicesPercent[label.textContent] = +input.value
      }
    });
    otherItemsNumber.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      if(check.checked){
        appData.servicesNumber[label.textContent] = +input.value
      }
    });
  },
  showResult: function(){
    total.value = appData.screenPrice
    totalCountOther.value =appData.ServicePricesPercent + appData.ServicePricesNumber
    fullTotalCount.value = appData.fullPrice
    totalCountRollback.value = appData.ServicePercentPrice
  },

  addPrices: function(){
    const input = document.querySelector('input')

    for(let screen of appData.screens){
      appData.screenPrice+= +screen.price
    }
    for(let key in appData.servicesNumber){
      appData.ServicePricesNumber += appData.servicesNumber[key]
    }
    for(let key in appData.servicesPercent){
      appData.ServicePricespercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }
    appData.fullPrice = +appData.screenPrice+appData.ServicePricespercent + appData.ServicePricesNumber;
    appData.ServicePercentPrice= appData.fullPrice-(appData.fullPrice * (appData.rollback / 100))
    totalCount.value = input.value
  },  
  
  logger(){
    console.log(appData.title);
    console.log(appData.allServicePrices);
    console.log(appData.screens);
  },
  
}


appData.init()