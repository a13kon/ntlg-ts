let isTrue: boolean = true;
let isNumber: number = 1; 
let list: string[] = ['10', '20', '30'];

list.push('40');
let lengt = list.map((item) => {
    item.length
})

let max: [number, number, string];
max = [10, 20, '10'];
max.push(20);
max.push('qwe');

console.log(max);

enum Item {
    FETCHING,
    SUCCESS,
    FAILED
};

interface PrintedItem {
    name: string;
    isbn: string;
    pagesCounte: number;
    hasHardCover: boolean;
}

class Book implements PrintedItem {
    name: string;
    isbn: string;
    pagesCounte: number;
    hasHardCover = true;
}

type ColorType = string | number;

let primaryColor: ColorType = 'red';
primaryColor = 0x8e8e8e;

console.log(primaryColor);