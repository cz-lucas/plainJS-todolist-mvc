export class TableView {
    controller;

    constructor() {
        // Add add event to add button
        const addButton = document.getElementById("tableViewContainerAddItemAdd");
        addButton.onclick = () => this.addItem();
    }

    setController(c) {
        this.controller = c;
    }

    update() {
        const table = document.getElementById("todoTable");
        table.innerHTML = "";

        this.controller.getItems().forEach(todo => {
            const row = table.insertRow();
            const cellTodo = row.insertCell(0);
            const cellDeleteButton = row.insertCell(1);

            cellTodo.innerHTML = todo.todo;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.classList.add("is-medium");
            deleteButton.onclick = () => this.deleteItem(todo.id);
            cellDeleteButton.appendChild(deleteButton);
        });
    }


    addItem() {
        let todo = document.getElementById('tableViewContainerAddItemInput').value;
        this.controller.addItem(todo);
        document.getElementById('tableViewContainerAddItemInput').value = "";
    }

    deleteItem(id) {
        this.controller.deleteItem(id);
        this.update();
    }
}
