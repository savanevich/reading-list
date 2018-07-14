<template>
  <div class="hello list">
    <book-preview v-for="book in books" :key="book.id" :book="book"></book-preview>
  </div>
</template>

<script>
import BookPreview from './BookPreview.vue';

export default {
  name: 'BookList',
  props: {
    books: Array,
  },
  components: {
    BookPreview,
  },
};
</script>

<style scoped lang="scss">

</style>
