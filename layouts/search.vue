<template>
  <div>
    <Navigation>
      <template v-slot:navbar>
        <NuxtLink to="/">
          <span class="text-2xl text-strong font-bold hidden md:inline pr-4">Discover IPL</span>
        </NuxtLink>
        <SearchBar />
        <ThemeSwitcher class="ml-3 hidden md:inline" />
      </template>
      <template v-slot:list>
        <FacetPanel />
      </template>
    </Navigation>

    <div class="flex pt-16">
      <!-- Hide the facetPanel if searched in all entities -->
      <aside
        class="hidden md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm flex-none"
        :class="isShowingAll ? '' : 'md:flex'"
      >
        <FacetPanel />
      </aside>
      <div class="w-full flex-grow">
        <!-- render filtered content or the discover component -->
        <Nuxt v-if="isFiltered" />
        <Discover v-else />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar";
import FacetPanel from "~/components/FacetPanel";
import Navigation from "~/components/Navigation";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import Discover from "~/components/Discover";

export default {
  name: "navbar",
  components: {
    SearchBar,
    FacetPanel,
    Navigation,
    ThemeSwitcher,
    Discover,
  },
  data: function () {
    return {};
  },
  computed: {
    // check if any entity filter is applied or term is searched
    isFiltered() {
      if (
        (this.$route.query.type == "All" || !this.$route.query.type) &&
        !this.$route.query.term
      )
        return false;
      else return true;
    },
    // check if any the search is done on everythng
    isShowingAll() {
      return this.$route.query.type == "All" || !this.$route.query.type;
    },
  },
};
</script>

<style>
.navbar {
  background-color: var(--header-bg-color);
  color: var(--text-strong);
}
</style>