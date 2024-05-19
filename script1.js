document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);

        // Increase the size of the to-do item when clicked
        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('large');
        });

        const deleteButton = todoItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the item click event from firing
            todoItem.remove();
        });
    }
});
    