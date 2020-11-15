<template>
  <div class="p-5 flex flex-grow-0">
    <div class="card bg-gray-800 rounded-lg pb-4">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        src="https://dummyimage.com/720x400/ccc/ccc.png"
        alt="content"
      />
      <h3
        class="tracking-widest px-6 text-secondary text-xs font-medium title-font"
      >
        {{ overline }}
      </h3>
      <h2 class="text-lg px-6 text-strong font-medium title-font mb-4">
        {{ title }}
      </h2>
      <p class="leading-relaxed px-6 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    overline: String,
    title: String,
  },
};
</script>

<style>
.card {
  min-width: 14rem;
  @apply shadow;
  background-color: var(--primary);
  color: var(--text);
}
.text-strong {
  color: var(--text-strong);
}
.text-secondary {
  color: var(--secondary);
}
.card:hover {
  @apply shadow-lg;
}
</style>