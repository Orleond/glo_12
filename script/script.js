'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    todoItem = document.querySelectorAll('.todo-item');

const todoData = [];

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
        });

        const btnToDoRemove = li.querySelector('.todo-remove');
        btnToDoRemove.addEventListener('click', function() {
            const val = item.value;
            for (let i in todoData) {
                if (val === todoData[i].value) {
                    delete todoData[i];
                }
            }
            render();
        });

    });
}


todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value !== '') {
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        todoData.push(newTodo);
        headerInput.value = '';

        render();
    }
});



render();