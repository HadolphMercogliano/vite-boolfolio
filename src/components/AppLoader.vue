<script>
export default {
  name: "AppLoader",
};
</script>
<template>
  <div class="layover d-flex justify-content-center align-items-center text-white">Loading</div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: rgba($color: #000000, $alpha: 0.7);
}
</style>
