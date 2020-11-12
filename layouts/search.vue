<template>
  <div>
    <nav
      class="navbar flex fixed w-full items-center justify-between px-3 md:px-6 h-16 z-10"
    >
      <NuxtLink to="/">
        <span class="text-2xl hidden md:inline">Discover IPL</span>
      </NuxtLink>
      <searchBar />
      <span></span>
    </nav>
    <nav class="pt-16">
      <facetBar />
    </nav>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import searchBar from "~/components/SearchBar";
import facetBar from "~/components/FacetBar";

export default {
  name: "navbar",
  components: {
    searchBar,
    facetBar,
  },
};
</script>

<style>
.navbar {
  background-color: var(--header-bg-color);
  color: var(--text-strong);
}
</style>