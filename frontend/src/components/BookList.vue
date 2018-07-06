<template>
  <div class="hello">
    <h1>Book list</h1>
    <article class="message" v-for="book in books" :key="book.id">
        <div class="message-header">
            <p>{{ book.title }} by {{ book.author }}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ book.description }}
        </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Book from '../classes/Book';

@Component
export default class BookList extends Vue {
  @Prop() private books!: Book[];
}
</script>

<style scoped lang="scss">

</style>
