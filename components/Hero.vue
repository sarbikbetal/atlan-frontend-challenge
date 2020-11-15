<template>
  <section class="text bg-blend body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-strong"
        >
          Discover IPL
          <br class="hidden lg:inline-block" />
          through your screen.
        </h1>
        <p class="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          nam. Voluptatibus magni a neque pariatur assumenda animi! Similique
          consequatur optio excepturi quis? Error optio eaque dolore suscipit
          consectetur exercitationem magnam?
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            Discover
          </button>
          <button
            class="ml-6 inline-flex text-gray-900 secondary border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600/ccc/ccc.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.secondary {
  background-color: var(--secondary);
}
.secondary:hover,
.secondary:focus {
  background-color: var(--secondary-light);
}
.bg-blend {
  background-color: var(--board);
}
</style>