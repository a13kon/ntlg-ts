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
    getArea(): number {
        console.log('Not Implemented');
        return 0;
    }
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
}
const figure = new Rectangle(20, 80);
console.log(figure.getArea());