<template>
  <div class="hello list">
    <book-preview v-for="(book, index) in books" :key="index" :index="index" :book="book">
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
  },
  mixins: [ContainerMixin],
  components: {
    BookPreview,
  },
};
</script>

<style scoped lang="scss">

</style>
