<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      project: null,
    };
  },
  components: { ProjectCard },
  created() {
    axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`).then((response) => {
      this.project = response.data;
    });
  },
};
</script>
<template>
  <h1 class="my-4">Dettaglio progetto {{ project?.title }}</h1>
  <div class="row justify-content-center mb-3">
    <div class="col-6">
      <ProjectCard :project="project" v-if="project" :isDetail="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
