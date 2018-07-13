export default class Book {
  constructor(
      public id: number,
      public isbn: string,
      public title: string,
      public author: string,
      public description: string,
      public type: string,
      public status: string,
      public coverUrl: string,
    ) {}
}
