interface Book {

    title: string;
    description: string;
    authors: string;
    favorite: boolean;
    fileCover: string;
    fileName: string;
}

abstract class BooksRepository {

    createBook(book: Book) {
        //create book
        console.log(book);
    }

    getBook(id: number) {
        //get book by id
    }

    getBooks(){
        //get all books
    }

    updateBooks(id: number) {
        //update book
    }

    deleteBook(id: number) {
        //delete book
    }
}

class MainStorage extends BooksRepository {
    
}

// class Magazines implements Book {

//     title: string;
//     description: string;
//     authors: string;
//     favorite: boolean;
//     fileCover: string;
//     fileName: string;

//     constructor(title: string, 
//                 description: string, 
//                 authors: string, 
//                 favorite: boolean,
//                 fileCover: string,
//                 fileName: string) {

//                     this.title = title;
//                     this.description = description;
//                     this.authors = authors;
//                     this.favorite = favorite;
//                     this.fileCover = fileCover;
//                     this.fileName = fileName;
//                 }
// }

// const storage = new MainStorage();
// const magazine = new Magazines('title', 'desc', 'authors', true, 'corev', 'name');
// storage.createBook(magazine);