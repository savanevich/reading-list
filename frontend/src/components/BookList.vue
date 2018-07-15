<template>
  <div class="hello list">
    <book-preview v-for="(book, index) in filteredBooks" :key="index" :index="index" :book="book">
    </book-preview>
  </div>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort';

import BookPreview from './BookPreview.vue';

export default {
  name: 'BookList',
  props: {
    books: Array,
    categoryId: Number,
  },
  mixins: [ContainerMixin],
  computed: {
    filteredBooks() {
      if (this.categoryId) {
        return this.books.filter(book => +book.categoryId === +this.categoryId);
      }

      return [];
    },
  },
  components: {
    BookPreview,
  },
};
</script>

<style scoped lang="scss">

</style>
