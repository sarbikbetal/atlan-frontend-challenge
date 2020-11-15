<template>
  <div class="facet-wrapper w-full" v-if="isFilterApplied">
    <transition name="fade">
      <div class="facet-container">
        <div class="w-full flex items-center py-2">
          <span class="text-2xl pl-4">Filters</span>
          <span class="flex-grow"></span>
          <button
            v-if="isFacetActive()"
            class="clear-all-btn focus:outline-none flex px-2 mr-4"
            @click="clearFilters"
          >
            <span>Clear</span>
          </button>
        </div>
        <facetInputs
          class="mt-3"
          v-if="getFacets"
          :type="entityType"
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
  computed: {
    isFilterApplied() {
      return filterTags.includes(this.$route.query.type);
    },
    entityType() {
      return filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
    },
    getFacets() {
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
  methods: {
    clearFilters() {
      let newRouteQuery = {};
      newRouteQuery.term = this.$route.query.term;
      newRouteQuery.type = this.$route.query.type;
      this.$store.commit("setRouteQuery", newRouteQuery);
      this.$router.push({ query: newRouteQuery });
    },
    isFacetActive() {
      let { term, type, ...others } = this.$store.state.routeQuery;
      return Object.keys(others).length != 0;
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
.clear-all-btn {
  @apply rounded-full;
  border: 2px solid #f56565;
  color: #f56565;
}
.clear-all-btn:hover {
  background-color: #f565652d;
}
</style>