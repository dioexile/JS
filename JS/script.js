let num = Math.floor(Math.random() * 101);
let attempt

const isNumber =function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

function game(){
  while(attempt!=num){
    attempt = +prompt("Угадай число от 1 до 100")
    if (attempt < num) {
      alert("Загаданное число больше")
    } else if (attempt > num){
      alert("Загаданное число меньше" )
    } else if(!isNumber(attempt)){
      alert("Введи число!")
    }
    else if(attempt==num){
      alert("Поздравляю, Вы угадали!!!")
    }
  }
}
game()
