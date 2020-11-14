<template>
  <span>Filtered</span>
</template>

<script>
export default {
  data: function () {
    return {
      term: this.$route.query.term,
    };
  },
  layout: "search",
  transition: "fade",
};
</script>

<style>
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0.1;
}
.fade-leave-to,
.fade-leave {
  opacity: 0;
}
.fade-move {
  transition: transform 0.2s;
}
</style>