<script>
import AppHeader from "./components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  components: { AppHeader, HomePage },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="container">
      <HomePage />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
