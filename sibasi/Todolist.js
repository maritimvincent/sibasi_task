// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.onclick = () => editTask(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(li);

        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(taskElement) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskElement);
}
