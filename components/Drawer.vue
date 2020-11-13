<template>
  <nav
    class="navbar flex fixed w-full items-center justify-between px-4 md:px-8 h-16"
  >
    <slot name="navbar"></slot>

    <button
      class="focus:outline-none md:hidden flex rounded-full"
      @click="drawer"
    >
      <svg class="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="var(--text-light)"
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
      <span
        @click="isOpen = false"
        class="drawer-header flex w-full items-center p-4"
      >
        <NuxtLink to="/">
          <span class="text-2xl">Discover IPL</span>
        </NuxtLink>
      </span>

      <router-link to="/">
        <span @click="isOpen = false" class="drawer-item flex items-center p-4">
          <span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span>Home</span>
        </span>
      </router-link>
      <div class="flex-1"></div>

      <router-link to="rtc">
        <span @click="isOpen = false" class="drawer-item flex items-center p-4">
          <span class="mr-2">
            <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"
              />
            </svg>
          </span>
          <span>RTC</span>
        </span>
      </router-link>
    </aside>
  </nav>
</template>

<script>
export default {
  name: "drawer",
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
    selectedTheme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
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
  @apply border-b-2;
  border-color: var(--secondary);
}
.drawer-item:hover {
  background-color: var(--secondary);
  color: white;
}
</style>