<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  props: {
    projects: Array,
    pagination: Array,
    title: String,
  },
  components: { ProjectCard },
};
</script>
<template>
  <h1 class="mb-4">{{ title }}</h1>
  <div v-if="projects.length" class="row g-3">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
  <h2 v-else class="text-muted">Nessun progetto pubblicato</h2>

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
