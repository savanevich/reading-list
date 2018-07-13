<template>
  <nav class="level">
    <p class="level-item has-text-centered">
      <a class="link is-info">Home</a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">Menu</a>
    </p>
    <p class="level-item has-text-centered">
      <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;">
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">Reservations</a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">Contact</a>
    </p>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigarion extends Vue {
}
</script>

<style scoped lang="scss">

</style>
