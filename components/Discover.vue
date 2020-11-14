<template>
  <div>
    <div class="container my-2">
      <span class="text-3xl">Trending players</span>
    </div>
    <carousel>
      <horizontalCard
        v-for="site in 7"
        :key="site"
        :thumbnail="url"
        title="Player name"
        desc="Description/Stats"
      />
    </carousel>
    <div class="container my-2">
      <span class="text-3xl">Mesmerising venues</span>
      <div class="flex flex-wrap justify-evenly text-center">
        <div
          class="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
          v-for="site in 5"
          :key="site"
        >
          <card
            class="mx-auto"
            title="Stadium Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibusquia"
          />
        </div>
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
import themeSwitcher from "~/components/ThemeSwitcher";

export default {
  name: "Discover",
  components: {
    carousel,
    horizontalCard,
    themeSwitcher,
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
