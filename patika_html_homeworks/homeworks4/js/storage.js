class Storage{
    constructor()
    {

    }

    //Adding task to storage
    addTaskLocalStorage(task)
    {
       let tasks = this.getTaskToFromArray();
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //Deleting task from storage
    removeTaskLocalStorage(elementValue)
    {
        let tasks = this.getTaskToFromArray();
        tasks.forEach((task,index) => {
            if(elementValue.innerText === task)
            {
                tasks.splice(index,1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    //Return array by key name from localStorage
    getTaskToFromArray()
    {
        let tasks;
        if(localStorage.getItem('tasks') ===null){
            tasks =[];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        return tasks;
    }
}