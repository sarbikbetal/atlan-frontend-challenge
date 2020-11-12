<template>
  <div>
    <hero>
      <h1 class="text-4xl">Discover IPL</h1>
      <searchBar />
    </hero>
    <div class="container">
      <p class="text-3xl">Trending players</p>
    </div>
    <carousel>
      <horizontalCard
        v-for="site in 7"
        :key="site"
        :thumbnail="url"
        :desc="desc"
        :title="title"
      />
    </carousel>
    <div class="container">
      <span class="text-3xl">Mesmerising venues</span>
      <div class="flex justify-evenly flex-wrap">
        <card v-for="site in 4" :key="site" class="m-4" />
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "~/components/Carousel";
import horizontalCard from "~/components/HorizontalCard";
import hero from "~/components/Hero";
import card from "~/components/Card";
import searchBar from "~/components/SearchBar";
export default {
  components: {
    carousel,
    horizontalCard,
    searchBar,
    card,
    hero,
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
