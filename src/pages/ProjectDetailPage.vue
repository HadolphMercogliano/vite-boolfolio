<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      isLoading: false,
      project: null,
    };
  },
  components: { ProjectCard, AppLoader },
  created() {
    this.isLoading = true;
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch(() => {
        this.$router.push({ name: "not-found" });
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
<template>
  <AppLoader v-if="isLoading" />
  <h1 class="my-4">Dettaglio progetto {{ project?.title }}</h1>
  <div class="row justify-content-center mb-3">
    <div class="col-6">
      <ProjectCard :project="project" v-if="project" :isDetail="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
