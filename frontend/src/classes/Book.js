export default class Book {
  constructor(id, isbn, title, author, description, type, status, coverUrl) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.description = description;
    this.type = type;
    this.status = status;
    this.coverUrl = coverUrl;
  }
}
