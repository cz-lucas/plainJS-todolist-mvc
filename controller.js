import { Todo } from './model.js'

export class Controller {

    model;
    view;

    setModel(m) {
        this.model = m;
    }
    setView(v) {
        this.view = v;
    }

    getItems() {
        return this.model.list;
    }

    addItem(title) {
        var todo = new Todo(title);
        this.model.list.push(todo);

        this.view.update();
    }

    deleteItem(id) {
        const indexToDelete = this.model.list.findIndex(entry => entry.id === id);

        if (indexToDelete !== -1) {
            this.model.list.splice(indexToDelete, 1);
        }

        this.view.update();
    }

    updateView() {
        this.view.update();
    }
}