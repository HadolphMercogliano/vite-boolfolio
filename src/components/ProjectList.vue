<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  props: {
    projects: Array,
    title: String,
  },
  components: { ProjectCard },
};
</script>
<template>
  <h1 class="mb-4">{{ title }}</h1>
  <div class="row g-3">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>
