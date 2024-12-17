

console.log("Client Side JavaScript");


//------------------------------------------
// Using DOM API & XHR (XMLHttpRequest) or Fetch API
//------------------------------------------

const top5TodosBtn = document.querySelector('#top5-todos-btn');
const todosList = document.querySelector('#todos-list');

top5TodosBtn.addEventListener('click', () => {
    // Api call ( Http Request ) async
    fetch('/todos?limit=5')
        .then(response => response.json())
        .then(todos => {
            const todoRows = todos.map(todo => {
                return `
                 <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                </tr> 
                `
            });
            todosList.innerHTML = todoRows.join('');
        });
});