<template>
  <div class="favbar p-6 md:px-8 lg:px-10">
    <div class="fav-thumb-container" @click="isAddFavOpen = false">
      <!-- Left scroll button -->
      <fab @click.native="scrollLeft" class="scroll-btn left">
        <svg viewBox="0 0 24 24" fill="black" width="18px" height="18px">
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path
            fill="var(--text-light)"
            d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          />
        </svg>
      </fab>

      <section
        ref="carousel"
        class="flex items-center overflow-x-auto overflow-y-hidden no-scrollbar mx-6"
      >
        <div class="flex items-center">
          <slot />
        </div>
      </section>

      <!-- Right scroll button -->
      <fab @click.native="scrollRight" class="scroll-btn right">
        <svg viewBox="0 0 24 24" width="18px" height="18px">
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path
            fill="var(--text-light)"
            d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
          />
        </svg>
      </fab>
    </div>
  </div>
</template>

<script >
import fab from "~/components/Fab";
export default {
  name: "carousel",
  components: {
    fab,
  },
  methods: {
    scrollLeft() {
      this.$refs.carousel.scrollBy(-280, 0);
    },
    scrollRight() {
      this.$refs.carousel.scrollBy(280, 0);
    },
  },
};
</script>

<style scoped>
.favbar {
  background-color: var(--header-bg-color);
}
.fav-thumb-container {
  @apply flex;
  @apply justify-items-center;
  @apply pb-2;
  @apply rounded-md;
  @apply relative;
  @apply h-40;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.scroll-btn {
  @apply absolute;
  z-index: 3;
  top: 4rem;
}
.scroll-btn.left {
  left: -16px;
}
.scroll-btn.right {
  right: -16px;
}
.thumb {
  @apply h-10;
  @apply w-10;
  @apply mx-2;
  @apply my-1;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply rounded-full;
  @apply relative;
  @apply cursor-pointer;
  @apply transition-all;
  @apply duration-300;
  @apply ease-out;
  background-color: var(--primary);
}
.thumb:hover {
  background-color: var(--primary-light);
}
</style>