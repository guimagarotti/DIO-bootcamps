var form = document.getElementById('form');
var taskList = document.getElementById('tasks')

form.onsubmit = function (e) {
    e.preventDefault();
    const inputValue = document.getElementById('task-items')
    addTask(inputValue.value)
    removeTask()
    form.reset()
}

function addTask(event) {
    const listContainer = document.createElement('div')
    const newTask = document.createElement('input')
    const listLabel = document.createElement('label')
    const taskDescriptionNode = document.createTextNode(event);
    
    newTask.setAttribute('type', 'checkbox')
    newTask.setAttribute('name', event)
    newTask.setAttribute('id', event)

    listLabel.setAttribute('for', event)
    listLabel.appendChild(taskDescriptionNode)

    listContainer.classList.add('task-item')
    listContainer.appendChild(newTask)
    listContainer.appendChild(listLabel)

    taskList.appendChild(listContainer)    
}