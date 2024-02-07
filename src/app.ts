class Box<T> {
    container: T[];
    constructor() {
        this.container = [];
    }

    add(value: T) {
        this.container.push(value)
    }

    pop(): T {
        return this.container.pop();
    }

    count(): number {
        return this.container.length;
    }
}

const strBox = new Box<string>();
strBox.add('hello');

const numBox = new Box<number>();
numBox.add(1);

console.log(strBox.pop());
console.log(numBox.pop());