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
            tile.textContent = todo.todo;
            tileContainer.appendChild(tile);
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
