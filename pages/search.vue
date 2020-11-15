<template>
  <div class="block p-4">
    <span class="text-2xl font-bold">{{ getSearchString }}</span>
    <div class="flex flex-wrap px-4">
      <Card
        class="xl:w-1/4 md:w-1/2 p-4"
        v-for="i in 8"
        :key="i"
        overline="ENTITY NAME"
        title="Sample Title"
      />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card";
export default {
  computed: {
    getSearchString() {
      let term = this.$route.query.term;
      let type = this.$route.query.type;
      let str = "You have searched";
      if (term) str += ` for ${term}`;
      if (type == "All") str += ` in everything`;
      else if (type) str += ` in ${type}`;
      return str + ".";
    },
  },
  components: {
    Card,
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