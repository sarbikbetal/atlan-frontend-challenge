<template>
  <div class="card w-64">
      <img
        class="card-image w-full object-cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ehj-XVft8TzqGuDvoS-IUwHaE6%26pid%3DApi&f=1"
      />
    <div class="flex flex-col p-2">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style>
.card {
  @apply flex;
  @apply flex-col;
  @apply rounded-t-xl;
  @apply rounded-b;
  @apply shadow-lg;
  @apply bg-yellow-200;
}
.card .card-image {
  @apply rounded-t-xl;
}
</style>