import { Model } from './Model.js';
import { DOM } from './Dom.js';

export class ToDoList {
    list = document.querySelector("#list")
    text = document.querySelector("#text")
    saveBtn = document.querySelector("#saveBtn")
    select = document.querySelector("#select")
    model = new Model()
    DOM = new DOM()

    constructor() {
        this.bindEvents()
        this.render()
    }

    handleAdd() {
        const content = this.text.value.trim();

        if (content) {
            const newItem = {
                id: Date.now(),
                content: this.text.value,
                completed: false
            };

            this.model.add(newItem);
            this.text.value = "";
            this.render();
        }
    }

    handleUpdate(id) {
        this.model.update(id)
        this.render()
    }

    handleRemove(id) {
        this.model.remove(id)
        this.render()
    }

    filterTodos() {
        const filterVal = this.select.value;
        const filteredTodos = this.model.filter(filterVal);
        this.render(filteredTodos);
    }

    bindEvents() {
        this.saveBtn.onclick = () => this.handleAdd()
        this.select.onchange = () => this.filterTodos();
    }

    render(todos = this.model.items) {
        const { list } = this
        list.innerHTML = ""

        for (let i = 0; i < todos.length; i++) {
            const item = todos[i];
            const div = DOM.create("div", list, { className: item.completed ? "done" : "" })

            DOM.create("p", div, { textContent: item.content })
            DOM.create("button", div, { textContent: "Delete", onclick: () => this.handleRemove(item.id) })
            DOM.create("button", div, {
                textContent: item.completed ? "Cancel" : "Complete",
                onclick: () => this.handleUpdate(item.id)
            })
        }
    }
}