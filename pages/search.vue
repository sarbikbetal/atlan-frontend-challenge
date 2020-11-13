<template>
  <span
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio nisi
    impedit sequi temporibus nihil quod consequuntur odit, numquam, eos ea
    praesentium natus ipsum at illo dolorem! Mollitia ducimus maiores
    necessitatibus totam veritatis adipisci praesentium est hic assumenda sed,
    nulla facilis placeat sequi! Expedita iusto ullam adipisci sed cumque
    quaerat repudiandae sapiente vitae veniam sunt, ratione illo, inventore
    impedit voluptas minus ex tempora in facere dolores quo? Aperiam minima
    explicabo a esse facilis? Facere odio nulla reprehenderit, veritatis in
    commodi magni. Saepe illo, sed earum temporibus aspernatur quis repellendus
    hic quia iusto dolore a magni accusantium, quisquam ullam architecto
    non!</span
  >
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