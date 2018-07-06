<template>
  <article>
    <div class="content">
      <p class="title">Tall tile</p>
      <p class="subtitle">With even more content</p>
      <div class="content">
        <!-- Content -->
      </div>
    </div>
  </article>
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

</style>
