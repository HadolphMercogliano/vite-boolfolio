<script>
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
      projects: {
        list: [],
        pagination: [],
      },
    };
  },
  props: {
    title: String,
  },
  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";
      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.data;
          this.projects.pagination = response.data.links;
          // console.log(response.data);
        })
        .catch((err) => {
          this.error = err.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchProjects();
  },
  components: { ProjectCard, AppPagination, AppLoader },
};
</script>
<template>
  <AppLoader v-if="isLoading" />
  <h1 class="mb-4">{{ title }}</h1>
  <div v-if="error">
    <div class="alert alert-danger" role="alert">
      {{ error }}
    </div>
  </div>
  <div v-else-if="projects.list.length" class="row g-3">
    <div class="col-4" v-for="project in projects.list">
      <ProjectCard :key="project.id" :project="project" :isDetail="false" />
    </div>
  </div>
  <h2 v-else class="text-muted">Nessun progetto pubblicato</h2>
  <AppPagination :pagination="projects.pagination" @changePage="fetchProjects" />
</template>

<style lang="scss" scoped></style>
