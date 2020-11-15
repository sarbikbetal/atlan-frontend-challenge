<template>
  <div class="w-64 h-32 mx-2 horizontal-card">
    <div class="relative">
      <img class="card-image h-full object-cover" :src="thumbnail" />
    </div>
    <div class="flex flex-col p-2">
      <span class="font-bold text-xl">{{ title }}</span>
      <p class="text-base">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HorizontalCard",
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
  background-color: var(--primary);
  transition: all 300ms;
  cursor: pointer;
}
.horizontal-card:hover {
  @apply shadow-xl;
}
.horizontal-card .card-image {
  @apply absolute;
  @apply rounded-l-xl;
}
</style>