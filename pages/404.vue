<template>
  <div class="max-w-lg mx-auto my-16 text-center font-bold">
    <div class="board m-2 rounded-lg overflow-hidden shadow-lg p-10">
      <h1 class="text-6xl">🌌 404</h1>
      <h2 class="text-5xl">Not found :(</h2>
      <Fab @click.native="home()" class="my-6 text-xl px-3">🏏 Home</Fab>
    </div>
  </div>
</template>


<script>
import Fab from "~/components/Fab";

export default {
  name: "ErrorPage",
  components: {
    Fab,
  },
  props: {
    msg: String,
  },
  methods: {
    home() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
h1,
h2 {
  font-family: "Courier New", Courier, monospace;
  color: var(--text);
}
.board {
  background-color: var(--header-bg-color);
}
</style>