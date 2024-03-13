function Book (title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(`ISBN: ${this.isbn}`);
    }
}

var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0');

Book.prototype.printTitle = function() {
    console.log(this.title);
}
book.printTitle();
book.printIsbn();
