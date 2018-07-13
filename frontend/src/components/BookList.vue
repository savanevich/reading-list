<template>
  <div class="hello">
    <book-preview v-for="book in books" :key="book.id" :book="book"></book-preview>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Book from '../classes/Book';
import BookPreview from './BookPreview.vue';

@Component({
  components: {
    BookPreview,
  },
})
export default class BookList extends Vue {
  @Prop() private books!: Book[];
}
</script>

<style scoped lang="scss">

</style>
