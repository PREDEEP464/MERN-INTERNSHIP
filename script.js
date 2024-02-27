function addTask(){
    var task = document.getElementById("task-input").value;

    if (task.trim() !== '') {
    var totalTask = document.getElementById("total-task");
    var taskCount = document.getElementById("task-list").childElementCount;
    totalTask.textContent = taskCount+1;

    var taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskItem.className="rounded-lg border border-gray-200 bg-white p-6 shadow-md mt-4 items-center flex flex-row justify-between";

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Task";
    deleteButton.className = "ml-3 bg-red-700 hover:bg-red-500 text-white p-2 rounded-full";
    
    deleteButton.addEventListener("click", function(){
        taskItem.remove();
        var taskCount = document.getElementById("task-list").childElementCount;
        totalTask.textContent = taskCount; 
        
    });

    taskItem.appendChild(deleteButton);
    document.getElementById("task-list").appendChild(taskItem);
    document.getElementById('task-input').value = ''   
    }
    
}

function deleteAll() {
    document.getElementById("task-list").innerHTML = "";
    document.getElementById("total-task").innerHTML = '0';
}

