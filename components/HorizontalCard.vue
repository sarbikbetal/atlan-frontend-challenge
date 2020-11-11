<template>
  <div class="w-64 h-32 mx-2 horizontal-card">
    <div class="relative">
      <img class="card-image h-full object-cover" :src="thumbnail" />
    </div>
    <div class="flex flex-col px-2">
      <span class="font-bold text-xl">{{ title }}</span>
      <p class="text-gray-700 text-base">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontalCard",
  props: {
    title: String,
    desc: String,
    thumbnail: String,
  },
};
</script>

<style>
.horizontal-card {
  @apply grid;
  grid-template-columns: 2fr 3fr;
  @apply rounded-l-xl;
  @apply rounded-r;
  @apply shadow-lg;
  @apply bg-yellow-200;
}

.horizontal-card .card-image {
  @apply absolute;
  @apply rounded-l-xl;
}
</style>