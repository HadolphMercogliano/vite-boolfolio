<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
export default {
  data() {
    return {
      title: "Hello",
      projects: [],
    };
  },
  components: { AppHeader, ProjectList },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
        console.log(response.data);
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
        :projects="projects"
        title="Progetti recenti" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
