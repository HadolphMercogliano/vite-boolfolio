<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  components: { AppHeader },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="container-md">
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss"></style>
