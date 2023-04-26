<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },

  computed: {
    getAbstract() {
      return this.project.description.slice(0, 100) + "...";
    },
  },
};
</script>
<template>
  <div class="col-4">
    <div class="card h-100">
      <img class="card-img-top" :src="project.link" alt="immagine" />
      <div class="card-body">
        <h3 class="card-title">{{ project.title }}</h3>
        <p v-if="project.type">
          Tipo:
          <span class="badge-type">{{ project.type?.label }}</span>
        </p>
        <p v-if="project.technologies">
          Tecnologie:
          <span v-for="technology in project.technologies">
            {{ technology.label }}
          </span>
        </p>
        <p class="card-text">{{ getAbstract }}</p>
      </div>
      <div class="card-footer">
        <p>Data creazione: {{ project.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
