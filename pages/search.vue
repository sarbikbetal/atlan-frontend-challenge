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
};
</script>

<style>
</style>