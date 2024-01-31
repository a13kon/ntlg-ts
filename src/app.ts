class HumanWorker {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    doWork(): void {
        console.log('working...');
    }
}

class Lumberjack extends HumanWorker{
    doWork(): void {
        console.log('cutting...');
    }
}

class Hunter extends HumanWorker {
    doWork(): void {
        console.log('hunting...');
    }
}

const worker1 = new Hunter('human1');
worker1.doWork();

const worker2 = new Lumberjack('human2');
worker2.doWork();

///////////////////////////////////////////////////
console.log();

class Book {
    name: string;
    author: string;

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }

    getInfo():string {
        return `${this.name} - ${this.author}`;
    }
}

class ComicsBook extends Book {
    type: string;

    constructor(type: string, name: string, author: string ) {
        super(name, author);
        this.type = type;

    }

    getInfo(): string {
        const bookInfo = super.getInfo();
        return `${bookInfo} - ${this.type}`;
    }
}

const book: Book = new Book('book', 'you');
const comics: ComicsBook = new ComicsBook('comicsBook', 'comics', 'me');

console.log(book.getInfo());
console.log(comics.getInfo());

///////////////////////////////////////////////////
console.log();

function sum(a: number): number;
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
// function sum(a: number, b?: number, c?: number): number {
//     let sum: number = a;
//     if (b) {
//         sum += b;
//     }

//     if (c) {
//         sum += c;
//     }

//     return sum;
// };

function sum(a: number, b: number = 0, c: number = 0): number {
    return a + b + c;
};


console.log(sum(10));
console.log(sum(10, 15));
console.log(sum(10, 15, 10));


// function testSpread(...a: number[]): number {
//     let sum = a.reduce((acc, elem) => 
//         acc + elem
//     )

//     return sum;
// }

// console.log(testSpread(10,10,10,10,10,10));