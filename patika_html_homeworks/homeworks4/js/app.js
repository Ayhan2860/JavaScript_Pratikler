let taskInput = document.querySelector('#task')
let taskForm = document.querySelector('#taskForm');
let taskULDOM = document.querySelector('#list')


const ui = new UI();
const storage = new Storage();

eventListeners();
function eventListeners() {
    taskForm.addEventListener('submit', newTask)
    taskULDOM.addEventListener('dblclick', removeTaskElement)
    document.addEventListener('DOMContentLoaded', showAllTaskUI)
}

// The value get from input and print in the UI
function newTask(event) {
    let taskValue = taskInput.value.trim();
    if (!taskValue) {
        ui.showAlertUI("Lütfen Görev Giriniz","danger")
    } else {
        ui.showTaskUI(taskValue)
        storage.addTaskLocalStorage(taskValue);

        ui.showAlertUI("Görev Başarıyla Kaydedildi..", "success")
        taskInput.value = "";
    }
    
    event.preventDefault();
}


// The tasks get all from LocalStorage and print the UI
function showAllTaskUI() {
    tasks = storage.getTaskToFromArray();
    tasks.forEach(task => {
        ui.showTaskUI(task)
    });
}

// Delete from UI and storage when the selected element is double click
function removeTaskElement(element) {
     let liElementDom = element.target;
     
        ui.removeTaskUI(liElementDom)
        storage.removeTaskLocalStorage(liElementDom)
        ui.showAlertUI("Kayıtlı Görev Silindi :(", "success")
}


