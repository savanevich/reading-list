<template>
  <div class="tabs is-centered">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{ 'is-active' : (category.id === chosenCategoryId) }"
      >
        <a @click="changeCategory(category.id)">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import CATEGORIES from '../constants/Categories';

export default {
  name: 'CategorySelector',
  props: ['chosenCategoryId'],
  data: () => ({
    categories: CATEGORIES,
  }),
  methods: {
    changeCategory(categoryId) {
      this.$emit('onCategoryChanged', categoryId);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
