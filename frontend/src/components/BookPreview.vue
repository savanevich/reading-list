<template>
    <div class="box book-preview" @click="selectBook">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="book.coverUrl" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ book.title }}</strong> &#160; <small>{{ book.author }}</small>
              <br>
              {{ description }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { EventBus } from '../event-bus';

import Book from '../classes/Book';

@Component
export default class BookPreview extends Vue {
  @Prop() private book!: Book;

  get description() {
    return (this.book.description.length > 110) ? this.book.description.substr(0, 110 - 1) + '...' : this.book.description;
  }

  public selectBook() {
    EventBus.$emit('bookSelected', this.book);
  }
}
</script>

<style scoped lang="scss">
.book-image {
  max-height: 400px;
  margin-top: 10px;
}

.book-preview {
  cursor: pointer;

  &:hover {
    background-color: #209cee;
  }
}
</style>
