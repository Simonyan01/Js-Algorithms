export class Model {
    items = [
        { id: 101, content: "Drink water", completed: false },
        { id: 102, content: "Go for a walk", completed: true },
        { id: 103, content: "Watch a film", completed: false },
        { id: 104, content: "Do homework", completed: false },
    ]

    add(obj) {
        this.items.push(obj)
    }

    remove(id) {
        this.items = this.items.filter(todo => todo.id !== id)
    }

    update(id) {
        this.items = this.items.map(todo => (
            todo.id !== id
                ? todo
                : { ...todo, completed: !todo.completed }
        ))
    }

    filter(filterVal) {
        switch (filterVal) {
            case "completed":
                return this.items.filter(todo => todo.completed);
            case "not-completed":
                return this.items.filter(todo => !todo.completed);
            default:
                return this.items;
        }
    }
};
