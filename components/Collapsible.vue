<template>
  <div
    class="w-full collapsible transition-all duration-500"
    :class="isExpanded ? '' : 'h-10 overflow-hidden'"
  >
    <button
      class="focus:outline-none flex w-full justify-between items-center py-2"
      @click="isExpanded = !isExpanded"
    >
      <span class="text-lg text-strong">{{ title }}</span>

      <!-- Reverse the direction of chevron depending on the expaneded state -->
      <svg
        :class="isExpanded ? 'inverted' : ''"
        class="h-6 w-6 transition-all ease-out duration-300"
        viewBox="0 0 24 24"
      >
        <path
          fill="var(--text-strong)"
          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        />
      </svg>
    </button>
    <div class="flex flex-col items-start">
      <!-- Main slot for contents -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapsible",
  props: {
    expanded: Boolean,
    title: String,
  },
  data: function () {
    return {
      isExpanded: this.expanded || false,
    };
  },
};
</script>

<style>
.collapsible button svg.inverted {
  transform: rotate(180deg);
}
</style>