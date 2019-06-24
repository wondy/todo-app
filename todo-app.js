'use strict'

let canAnimate = true

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

/* First Time Print on Screen on Start */
renderTodos(todos, filters)

/* Listen to the Filter todos Field and Render */
/* document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
}) */

/* create new todo */
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    
    canAnimate = true;
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''
    }
})

/* checkbox check for hide completed */
// document.querySelector('#hide-completed').addEventListener('change', (e) => {
//     filters.hideCompleted = e.target.checked
//     renderTodos(todos, filters)
// })

/* check if "back to stack" button been clicked
and put task back to stack */
document.querySelector('#back_to_stack').addEventListener('click', (e) => {
    removeGradient()
    canAnimate = false
    const text = document.querySelector('#working_on_label').innerText.trim()
    e.preventDefault()
  
    if (text != 'NO WORK?')
    { 
   
       
   todos.push({
            id: todos.id,
            text,
            completed: false
        })
        
        saveTodos(todos)
        renderTodos(todos, filters)
        document.querySelector('#working_on_label').innerText ="NO WORK?"
        
    }
})

//check if button completed has been clicked
document.querySelector('#completed').addEventListener('click', (e) => {
//toggleTodo(todos.id)
document.querySelector('#working_on_label').innerText ="NO WORK?"
removeGradient()
saveTodos(todos)
renderTodos(todos, filters)

})


