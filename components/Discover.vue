<template>
  <div>
    <Hero />
    <TopPlayers />
    <Stadiums />
    <Gallery />
    <footer class="h-6 w-full" />
  </div>
</template>

<script>
import Card from "~/components/Card";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import TopPlayers from "~/components/TopPlayers";
import Stadiums from "~/components/Stadiums";

export default {
  name: "Discover",
  components: {
    Card,
    Hero,
    Gallery,
    Stadiums,
    TopPlayers,
  },
  transition: "fade",
  data: function () {
    return {
      title: "title",
      desc: "desc",
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DbXeiayJRt-v4PZPvEUMQgHaEo%26pid%3DApi&f=1",
    };
  },
};
</script>

<style scoped>
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
