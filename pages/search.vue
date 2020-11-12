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
  created: function () {
    this.$store.dispatch("loadPlayerData");
    this.$store.dispatch("loadTeamData");
  },
};
</script>

<style>
</style>