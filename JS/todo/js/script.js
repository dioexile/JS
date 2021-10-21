let todoControl = document.querySelector('.todo-control')
let headerInput = document.querySelector('.header-input')
let todoList = document.querySelector('.todo-list')
let todoCompleted = document.querySelector('.todo-completed')
let saveButton = document.querySelector('#add')
let pporn
let toDoData = []


const render = function(){
  todoList.innerHTML=''
  todoCompleted.innerHTML=''
  toDoData.forEach(function(item){
    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">'+
      '<button class="todo-remove"></button>'+
      '<button class="todo-complete"></button>'+
      '</div>'
    if(item.completed) {
      todoCompleted.append(li)
    } else {
      todoList.append(li)
    }
    li.querySelector('.todo-complete').addEventListener('click', function(){
      item.completed = !item.completed
      render()
    })
    li.querySelector('.todo-remove').addEventListener('click', function(){
      li.remove()
      // toDoData.splice(item)
      // 
      li.innerHTML=''
      
    })
    
  })
}
const showTodo = () => {
  toDoData = JSON.parse(localStorage.getItem ("toDoData"))
  console.log(toDoData)
  render()
}
todoControl.addEventListener('submit', function(event) {
  const li = document.createElement('li')
  event.preventDefault()
  const newToDo = {
    text: headerInput.value,
    completed: false
  }

  toDoData.push(newToDo)
  headerInput.value = ''
  render()
  localStorage.setItem('toDoData',JSON.stringify(toDoData))
  console.log(toDoData)
  
})
showTodo()


