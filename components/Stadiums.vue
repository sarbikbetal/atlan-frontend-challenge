
<template>
  <section class="text body-font bg-blend">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-4">
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nostrum inventore molestias voluptate id in, dolorem iste dolor omnis
          maiores reprehenderit libero iusto officiis consequuntur delectus
          dolorum et minima minus.
        </p>
        <div
          class="lg:w-1/2 w-full order-first lg:order-none mb-6 lg:mb-0 flex flex-col items-end"
        >
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-strong"
          >
            Awesome Stadiums
          </h1>
          <div class="highlight h-1 w-20 rounded" />
        </div>
      </div>
      <div class="flex flex-wrap px-4">
        <Card
          class="xl:w-1/4 md:w-1/2 p-4"
          v-for="i in 8"
          :key="i"
          overline="STADIUM NAME"
          title="Location"
        />
      </div>
      <button
        class="flex mx-auto mt-16 secondary text-gray-900 border-0 py-2 px-8 focus:outline-none rounded text-lg"
      >
        See more
      </button>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";

export default {
  name: "Stadiums",
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
  background-color: var(--board);
}
.highlight {
  background-color: var(--secondary);
  transition: all 300ms;
}
.highlight:hover {
  @apply w-64;
}
.secondary {
  background-color: var(--secondary);
  transition: all 300ms;
}
.secondary:hover,
.secondary:focus {
  background-color: var(--secondary-light);
}
</style>