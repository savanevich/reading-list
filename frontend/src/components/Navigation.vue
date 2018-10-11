<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item navbar-item-logo" href="#">
        <i class="fab fa-readme"></i> READ!T
      </a>
      <a role="button"
         class="navbar-burger burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider">
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
    </div>

    <div class="navbar-end">
      <b-switch
        v-model='isEditMode'
        @input="$emit('onEditModeChanged', isEditMode)">
      Edit mode
    </b-switch>
        <!-- Only for unautheticated -->
        <!-- <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div> -->
     </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
  .navbar-item-logo {
    color: #209cee;
    font-size: 18px;
  }
</style>
