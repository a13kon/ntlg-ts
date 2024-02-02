class User {
    static MAX_LEVEL = 80;
    static generatePassword(): string {
        return Math.random().toString(36).substring(2);
    }
}

const user = new User;
console.log(User.MAX_LEVEL);
console.log(User.generatePassword());


abstract class Figure {
    static STATIC_ABSTRACT = true;

    getArea(): number {
        console.log('Not Implemented');
        return 0;
    }

    abstract getPI(): number;
}


class Rectangle extends Figure {
    width: number;
    height: number;
    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;

    }
    getArea(): number {
        console.log('Not Implemented');
        return this.width * this.height;
    }

    getPI(): number {
        return 3.14;
    }
}
const figure = new Rectangle(20, 80);
console.log(figure.getArea(), figure.getPI());

//разница между интерфейсом 
interface FigureInterface {
    getArea(): number;
}

class Circle implements FigureInterface {
    getArea() {
        return 0;
    }
}

const circle = new Circle;
console.log(circle.getArea());
console.log(Figure.STATIC_ABSTRACT);
