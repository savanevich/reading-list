<template>
  <div class="tabs is-centered">
    <ul>
      <li v-for="category in categories" :key="category.id" :class="{ 'is-active' : (category.id === chosenCategoryId) }">
        <a @click="chosenCategoryId = category.id">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Book from '../classes/Book';
import Category from '../classes/Category';

import CATEGORIES from '../constants/Categories';

@Component
export default class CategorySelector extends Vue {
  public categories: Category[] = CATEGORIES;
  public chosenCategoryId = 1;
}
</script>

<style scoped lang="scss">

</style>
