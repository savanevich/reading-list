<template>
  <div class="tabs is-centered">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{ 'is-active' : (category.id === chosenCategoryId) }"
      >
        <a @click="chosenCategoryId = category.id">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import CATEGORIES from '../constants/Categories';

export default {
  name: 'CategorySelector',
  data: () => ({
    categories: CATEGORIES,
    chosenCategoryId: 1,
  }),
};
</script>

<style scoped lang="scss">

</style>
