<template>
  <nav
    class="navbar flex fixed w-full items-center justify-between px-4 md:px-8 h-16 z-10"
  >
    <slot name="navbar"></slot>

    <!-- Filter button to trigger mobile drawer -->
    <button
      class="filter-btn focus:outline-none flex md:hidden ml-2"
      @click="toggleDrawer"
    >
      <!-- Funnel icon -->
      <svg class="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="var(--text)"
          d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
        />
      </svg>
      <span>Filter</span>
    </button>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="drawer flex flex-col transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <NuxtLink to="/" @click="isOpen = false" class="drawer-header">
        <span class="text-2xl text-strong font-bold"> Discover IPL </span>
      </NuxtLink>

      <!-- Slot for elements in the drawer -->
      <slot name="list"></slot>
    </aside>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    open: Boolean,
  },
  data() {
    return {
      isOpen: this.open || false,
      themes: ["Light", "Dark"],
    };
  },
  computed: {
    // return the selected theme
    selectedTheme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    // watch for `isOpen` and apply the class immediately
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) document.body.style.setProperty("overflow", "hidden");
        else document.body.style.removeProperty("overflow");
      },
    },
  },
};
</script>

<style>
.drawer {
  background-color: var(--header-bg-color);
}
.drawer-header {
  @apply flex;
  @apply items-center;
  @apply w-full;
  @apply p-3;
  @apply border-b-2;
  border-color: var(--secondary);
}
.drawer-item:hover {
  background-color: var(--secondary);
  color: white;
}
.filter-btn {
  @apply rounded-full;
  @apply px-2;
  @apply py-1;
  color: var(--text);
  border: 2px solid var(--text);
}
.filter-btn:hover,
.filter-btn:focus {
  background-color: var(--primary);
}
</style>