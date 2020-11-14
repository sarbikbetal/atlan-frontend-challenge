<template>
  <div class="facet-wrapper w-full" v-if="isFilterApplied">
    <transition name="fade">
      <div class="facet-container">
        <span class="text-2xl pl-4">Filters </span>
        <facetInputs
          class="mt-3"
          v-if="getFacets"
          :type="selectedFilter"
          :facets="getFacets"
        />
        <span class="text-xl" v-else> not implemented</span>
      </div>
    </transition>
  </div>
</template>

<script>
import facetInputs from "~/components/FacetInputs";

const filterTags = ["Players", "Venues", "Teams", "Owners"];
export default {
  name: "facetBar",
  components: {
    facetInputs,
  },
  data: function () {
    return {};
  },
  computed: {
    isFilterApplied: function () {
      return filterTags.includes(this.$route.query.type);
    },
    selectedFilter: function () {
      return filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
    },
    getFacets: function () {
      let zym = this.$store.state;
      let type = filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
      if (!type) return;
      else if (type == "Teams") return this.$store.state.teamFields;
      else if (type == "Players") return this.$store.state.playerFields;
      else if (type == "Venues") return this.$store.state.venueFields;
      else if (type == "Owners") return this.$store.state.ownerFields;
      else return null;
    },
  },
};
</script>

<style>
.facet-wrapper {
  background-color: var(--primary);
}
.facet-container {
  min-height: calc(100vh - 4rem);
  padding-top: 1rem;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0.1;
}
.fade-leave-to,
.fade-leave {
  opacity: 0;
}
.fade-move {
  transition: transform 0.2s;
}
</style>