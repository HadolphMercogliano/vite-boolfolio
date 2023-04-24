<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <ul>
    <li v-for="project in projects">{{ project.title }}</li>
  </ul>
</template>

<style lang="sass" scoped></style>
