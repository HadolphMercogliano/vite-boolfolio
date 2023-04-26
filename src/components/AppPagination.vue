<script>
export default {
  name: "AppPagination",
  props: {
    pagination: Array,
  },
};
</script>
<template>
  <nav aria-label="Project pagination">
    <ul class="pagination my-3">
      <li v-for="page in pagination" class="page-item">
        <button
          @click="$emit('changePage', page.url)"
          type="button"
          class="page-link"
          :class="{ disabled: !page.url, active: page.active }"
          v-html="page.label"></button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
