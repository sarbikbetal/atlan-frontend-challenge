<template>
  <div class="block p-4">
    <span class="text-2xl font-bold">{{ getSearchString }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    getSearchString() {
      let term = this.$route.query.term;
      let type = this.$route.query.type;
      let str = "You have searched";
      if (term) str += ` for ${term}`;
      if (type) str += ` in ${type}`;
      return str + ".";
    },
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