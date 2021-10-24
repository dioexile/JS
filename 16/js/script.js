class First{
  constructor(name){
    this.name = name
    First.sayHello()
  }
  static sayHello() { 
    console.log("Привет я метод родителя!")
  }
}
class Second extends First{
  constructor(name, sayHello) {
    super(name,sayHello);
    Second.hello()
  }
  static hello() { 
    console.log("А я наследуемый метод!")
  }
}

const frst = new Second('asd')





// // Напишите расширения метода прототипа:
// // 1) Два класса, First и Second, Second наследует от First .
// // 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
// // 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"