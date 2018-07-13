<template>
  <div class="card">
    <div>
      <figure>
        <img class="book-image" :src="book.coverUrl" alt="Cover of the book">
      </figure>
    </div>
    <div class="card-content">
      <p class="title">
        {{ book.title }}
      </p>
      <p class="subtitle">
        {{ book.author }}
      </p>

      <div class="content">
        {{ book.description }}
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Book from '../classes/Book';

@Component
export default class BookDetail extends Vue {
  @Prop() private book!: Book;
}
</script>

<style scoped lang="scss">
.book-image {
  max-height: 400px;
  margin-top: 10px;
}
</style>
