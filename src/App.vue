<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Hello",
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        console.log(response);
        this.projects = response.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },

  components: { AppHeader },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="project in projects">Titolo: {{ project.title }}</li>
  </ul>
</template>

<style lang="sass" scoped></style>
