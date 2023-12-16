function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const dateTime = document.createElement('span');
        dateTime.textContent = getCurrentDateTime();
        dateTime.style.marginRight = '10px';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(dateTime);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}

function getCurrentDateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric' , Date: 'numeric' , year: 'numeric' };
    return now.toLocaleTimeString('en-US', options);
}

document.getElementById('task-list').addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('completed');
    }
});