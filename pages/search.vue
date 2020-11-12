<template>
  <h1>Hello all</h1>
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
  beforeCreate: function () {
    this.$store.dispatch("loadPlayerData");
    this.$store.dispatch("loadTeamData");
  },
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