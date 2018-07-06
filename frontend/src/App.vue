<template>
  <div id="app" class="container">
    <category-selector />
    <div class="columns">
      <div class="column is-two-thirds">
        <book-list :books="books" />
      </div>
      <div class="column is-one-third">
        <book-detail />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Book from './classes/Book';
import BookList from './components/BookList.vue';
import BookDetail from './components/BookDetail.vue';
import CategorySelector from './components/CategorySelector.vue';

@Component({
  components: {
    BookList,
    BookDetail,
    CategorySelector,
  },
})
export default class App extends Vue {
  public books: Book[] = [
    new Book(1, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(2, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(3, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(4, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(5, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(6, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(7, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(8, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(9, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
    new Book(10, '124214124', '1984', 'George Orwell', 'Some description', 'Classics', 'In progress'),
  ];
}
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables";
@import "../node_modules/bulma/bulma";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 160px;
}
</style>
