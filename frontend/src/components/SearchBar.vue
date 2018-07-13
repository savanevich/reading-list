<template>
<div class="field has-addons has-addons-centered search-bar">
  <p class="control is-expanded">
    <input class="input is-medium is-rounded" type="text" placeholder="Search by Book Title, Author, or ISBN">
  </p>
  <p class="control">
    <a class="button is-info is-rounded is-medium">
      Search
    </a>
  </p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
}
</script>

<style scoped lang="scss">
.search-bar {
    width: 80%;
    margin: 30px auto;
}
</style>
