<template>
  <div>
    <nav
      class="navbar flex fixed w-full items-center justify-between px-3 md:px-6 h-16 z-10"
    >
      <NuxtLink to="/">
        <span class="text-2xl hidden md:inline">Discover IPL</span>
      </NuxtLink>
      <searchBar />
      <themeSwitcher class="ml-3"/>
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
import themeSwitcher from "~/components/ThemeSwitcher";

export default {
  name: "navbar",

  components: {
    searchBar,
    facetBar,
    themeSwitcher,
  },
};
</script>

<style>
.navbar {
  background-color: var(--header-bg-color);
  color: var(--text-strong);
}
</style>