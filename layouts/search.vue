<template>
  <div>
    <drawer>
      <template v-slot:navbar>
        <NuxtLink to="/">
          <span class="text-2xl hidden md:inline">Discover IPL</span>
        </NuxtLink>
        <searchBar />
        <themeSwitcher class="ml-3 hidden md:inline" />
      </template>
      <template v-slot:list>
        <facetBar />
      </template>
    </drawer>

    <div class="flex pt-16">
      <aside
        class="hidden md:w-2/5 lg:w-1/4 xl:w-1/5 max-w-sm"
        :class="isFiltered ? 'md:flex' : 'hidden'"
      >
        <facetBar />
      </aside>
      <div class="w-full flex-grow bg-gray-500">
        <Nuxt v-if="isFiltered" />
        <IndexPage v-else />
      </div>
    </div>
  </div>
</template>

<script>
import searchBar from "~/components/SearchBar";
import facetBar from "~/components/FacetBar";
import drawer from "~/components/Drawer";
import themeSwitcher from "~/components/ThemeSwitcher";
import Drawer from "~/components/Drawer";
import IndexPage from "~/pages/index";

export default {
  name: "navbar",
  components: {
    searchBar,
    facetBar,
    drawer,
    themeSwitcher,
    IndexPage,
  },
  data: function () {
    return {};
  },
  computed: {
    isFiltered() {
      if (
        (this.$route.query.type == "All" || !this.$route.query.type) &&
        !this.$route.query.term
      )
        return false;
      else return true;
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