<template>
  <div class="carousel p-6 md:px-8 lg:px-10">
    <div class="thumb-container items-center" @click="isAddFavOpen = false">
      <!-- Left scroll button -->
      <FAB @click.native="scrollLeft" class="scroll-btn left">
        <svg viewBox="0 0 24 24" fill="black" width="18px" height="18px">
          <path
            fill="var(--text-strong)"
            d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          />
        </svg>
      </FAB>

      <!-- Main section -->
      <section
        ref="carousel"
        class="flex items-center overflow-x-auto overflow-y-hidden no-scrollbar -mx-4"
      >
        <div class="flex flex-no-wrap -m-4">
          <slot />
        </div>
      </section>

      <!-- Right scroll button -->
      <FAB @click.native="scrollRight" class="scroll-btn right">
        <svg viewBox="0 0 24 24" width="18px" height="18px">
          <path
            fill="var(--text-strong)"
            d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
          />
        </svg>
      </FAB>
    </div>
  </div>
</template>

<script >
import FAB from "~/components/Fab";
export default {
  name: "Carousel",
  components: {
    FAB,
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
.carousel {
  background-color: var(--header-bg-color);
}
.thumb-container {
  @apply flex;
  @apply justify-items-center;
  @apply pb-2;
  @apply rounded-md;
  @apply relative;
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
  z-index: 3;
  transition: all 300ms;
}
.scroll-btn:hover {
  background-color: var(--secondary);
}
.scroll-btn path {
  transition: all 300ms;
}
.scroll-btn:hover path {
  fill: var(--primary);
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