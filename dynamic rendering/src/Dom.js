export class DOM {
    static create(tag, target, options = {}) {
        const element = document.createElement(tag)

        for (const key in options) {
            element[key] = options[key]
        }

        target.append(element)
        return element
    }
}