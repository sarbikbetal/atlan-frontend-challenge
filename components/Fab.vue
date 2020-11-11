<template>
  <button class="fab ripple p-2">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "fab",
};
</script>

<style>
.fab {
  @apply rounded-full;
  @apply shadow-md;
  background-color: var(--primary);
}
.fab:hover {
  @apply shadow-lg;
  background-color: var(--primary-light);
}
.fab:focus {
  background-color: var(--primary-light);
  outline: none;
}
/* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.3s;
  transition: box-shadow 0.3s;
}
.ripple:active {
  background-color: #2e2e2e2f;
  background-size: 100%;
  transition: background 0s;
}
</style>