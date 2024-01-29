
class User {
    name: string;
    lastName: string;
    cart: Cart;
    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
    }

    setCart(cart: Cart) {
        this.cart = cart;
    }
}

class Cart {
    refresh() {

    }
}

class Teacher extends User {
    setScore(student: Student) {
        //
    }
}

class Student {
    getTotalScore(): number {
        //
        return 0;
    }
}

const user: User = new User('Oleg', 'Petrov');
const userCart: Cart = new Cart();

