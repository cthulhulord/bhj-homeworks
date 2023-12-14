const taskForm = document.getElementById('tasks__form');
const taskAddButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input')
const taskContainer = document.createElement('div');
const taskTitle = document.createElement('div');
const taskRemove = document.createElement('a');

taskForm.addEventListener('submit', (form) => {
    form.preventDefault();

    if (taskInput.value.trim()) {
        taskContainer.classList.add('task');
        taskTitle.classList.add('task__title');
        taskRemove.classList.add('task__remove');

        taskTitle.textContent = taskInput.value;
        taskRemove.textContent = '×';

        taskList.insertAdjacentElement('afterbegin', taskContainer);
        taskContainer.insertAdjacentElement('afterbegin', taskTitle);
        taskTitle.insertAdjacentElement('afterend', taskRemove);

        taskList.appendChild(taskContainer.cloneNode(true));
        taskList.firstChild.remove();

        taskList.lastElementChild.addEventListener('click', (e) => {
            e.target.closest('.task').remove();
        });
    };

    taskInput.value = '';
});