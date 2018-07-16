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
      <li>
        <b-dropdown ref="addCategoryDropdown">
          <a slot="trigger">
            <span>+</span>
          </a>

         <b-dropdown-item custom paddingless>
            <form action="">
              <div class="modal-card" style="width:400px;">
                <section class="modal-card-body">
                  <b-field>
                    <b-input
                      v-model="categoryName"
                      placeholder="Category name"
                      type="text">
                    </b-input>
                    <p class="control">
                      <button class="button is-primary" @click.prevent="onAddCategory">Add</button>
                   </p>
                  </b-field>
                </section>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CategorySelector',
  props: ['chosenCategoryId', 'categories'],
  data: () => ({
    categoryName: '',
  }),
  methods: {
    changeCategory(categoryId) {
      this.$emit('onCategoryChanged', categoryId);
    },
    onAddCategory() {
      if (this.categoryName.length > 2) {
        this.$emit('onAddCategory', this.categoryName);
        this.$refs.addCategoryDropdown.isActive = false;
        this.categoryName = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.tabs {
    overflow: initial;
    overflow-x: initial;
}
</style>
