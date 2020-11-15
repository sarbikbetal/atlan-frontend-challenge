<template>
  <div class="card w-64">
    <img
      class="card-image w-full object-cover"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ehj-XVft8TzqGuDvoS-IUwHaE6%26pid%3DApi&f=1"
    />
    <div class="flex flex-col p-2">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-base">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style>
.card {
  @apply flex;
  @apply flex-col;
  @apply rounded-t-xl;
  @apply rounded-b;
  @apply shadow-lg;
  background-color: var(--primary);
  transition: all 300ms;
  cursor: pointer;
}
.card:hover {
  @apply shadow-xl;
}
.card .card-image {
  @apply rounded-t-xl;
}
</style>