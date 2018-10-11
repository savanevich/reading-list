<template>
  <div class="tabs is-centered">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{ 'is-active' : (category.id === chosenCategoryId) }"
      >
        <a @click="changeCategory(category.id)">{{ category.name }}&nbsp;
          <span v-show="isEditMode" @click.prevent="confirmCategoryDelete(category)">
            <i class="fas fa-times edit-color"></i>
          </span>
        </a>
      </li>
      <li>
        <b-dropdown ref="addCategoryDropdown" v-show="isEditMode">
          <a slot="trigger">
            <span class="edit-color"><i class="fas fa-plus-circle"></i> Add new category</span>
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
  props: ['chosenCategoryId', 'categories', 'isEditMode'],
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
    confirmCategoryDelete(category) {
      if (this.categories.length > 1) {
        this.$dialog.confirm({
          title: 'Deleting category',
          message: `Are you sure you want to delete the category <b>${category.name}</b>? This action cannot be undone.`,
          confirmText: 'Delete Category',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.$emit('onRemoveCategory', category.id);
          },
        });
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
.edit-color {
  color: #7957d5;
}
</style>
