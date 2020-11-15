
<template>
  <section class="text body-font bg-blend">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-wrap w-full mb-4">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-strong"
          >
            Trending Players
          </h1>
          <div class="highlight h-1 w-20 rounded" />
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nostrum inventore molestias voluptate id in, dolorem iste dolor omnis
          maiores reprehenderit libero iusto officiis consequuntur delectus
          dolorum et minima minus.
        </p>
      </div>
    </div>
    <Carousel class="pb-24">
      <Card class="xl:w-1/4 md:w-1/2 p-4" v-for="i in 10" :key="i" />
    </Carousel>
  </section>
</template>

<script>
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";

export default {
  name: "TopPlayers",
  components: {
    Card,
    Carousel,
  },
};
</script>

<style scoped>
.text {
  color: var(--text);
}
.text-strong {
  color: var(--text-strong);
}
.bg-blend {
  background-color: var(--header-bg-color);
  border-color: var(--primary);
}
.highlight {
  background-color: var(--secondary);
  transition: all 300ms;
}
.highlight:hover {
  @apply w-64;
}
</style>