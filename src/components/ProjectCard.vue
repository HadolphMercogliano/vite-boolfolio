<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
    isDetail: Boolean,
  },

  computed: {
    getAbstract() {
      return this.project.description.slice(0, 100) + "...";
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img class="card-img-top" :src="project.link" alt="immagine" />
    <div class="card-body">
      <h4 class="card-title">{{ project.title }}</h4>
      <p v-if="project.type">
        Tipo:
        <span class="badge" :style="{ backgroundColor: project.type.color }">{{
          project.type.label
        }}</span>
      </p>
      <p v-if="project.technologies">
        Tecnologie:
        <span
          class="badge rounded-pill me-1"
          :style="{ backgroundColor: technology.color }"
          v-for="technology in project.technologies">
          {{ technology.label }}
        </span>
      </p>
      <p class="card-text">{{ isDetail ? project.description : getAbstract }}</p>
    </div>
    <div class="card-footer">
      <p>Data creazione: {{ project.created_at }}</p>

      <router-link
        v-if="!isDetail"
        class="btn btn-primary btn-sm"
        :to="{
          name: 'project-detail',
          params: { id: project.id },
        }"
        >Visualizza Progetto</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
