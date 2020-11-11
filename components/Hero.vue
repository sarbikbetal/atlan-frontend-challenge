<template>
  <div class="hero relative">
    <div class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
    <img class="object-cover h-full w-full" src="~/assets/hero.webp" />
  </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    bg: String,
  },
};
</script>

<style>
.hero {
  width: 100%;
  height: 55vh;
}
.hero .content-wrapper {
  @apply absolute;
  left: 50%;
  top: 30%;
}
.content-wrapper .content {
  @apply relative;
  left: -50%;
  top: -50%;
    backdrop-filter: blur(10px);
}
</style>