export class TileView {
    controller;

    constructor() {
        // Add add event to add button
        const addButton = document.getElementById("tileViewContainerAddItemAdd");
        addButton.onclick = () => this.addItem();
    }

    setController(c) {
        this.controller = c;
    }

    update() {
        const tileContainer = document.getElementById('tileContainer');
        tileContainer.innerHTML = "";

        this.controller.getItems().forEach(todo => {

            const tile = document.createElement('div');
            tile.classList.add('tile');

            const deleteButtonId = "delete-" + todo.id;

            let tileHtml = "<p class='is-size-6'>";
            tileHtml += todo.todo;
            tileHtml += "<button id='" + deleteButtonId + "' class='is-medium delete ml-2'>";
            tileHtml += "Delete"
            tileHtml += "</button>"
            tileHtml += "</p>";

            tile.innerHTML = tileHtml;
            tileContainer.appendChild(tile);

            const deleteButton = document.getElementById(deleteButtonId);
            deleteButton.onclick = () => this.deleteItem(todo.id);
        });
    }


    addItem() {
        let todo = document.getElementById('tileViewContainerAddItemInput').value;
        this.controller.addItem(todo);
        document.getElementById('tileViewContainerAddItemInput').value = "";
    }

    deleteItem(id) {
        this.controller.deleteItem(id);
        this.update();
    }
}
