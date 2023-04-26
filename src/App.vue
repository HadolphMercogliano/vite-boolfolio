<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
export default {
  data() {
    return {
      title: "Hello",
      projects: {
        list: [],
        pagination: [],
      },
    };
  },
  components: { AppHeader, ProjectList },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";
      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;
        this.projects.pagination = response.data.links;
        // console.log(response.data);
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="container">
      <ProjectList
        :projects="projects.list"
        :pagination="projects.pagination"
        title="Progetti recenti"
        @changePage="fetchProjects" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
