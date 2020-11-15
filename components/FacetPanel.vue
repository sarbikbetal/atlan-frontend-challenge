<template>
  <div class="facet-wrapper w-full" v-if="isFilterApplied">
    <transition name="fade">
      <div class="facet-container">
        <div class="w-full flex items-center py-2">
          <span class="text-xl text-strong font-bold pl-5">Filters</span>
          <span class="flex-grow" />

          <!-- show the clear button only when facets are applied -->
          <button
            v-if="isFacetApplied()"
            class="clear-filter-btn focus:outline-none flex px-2 py-1 mr-4"
            @click="clearFilters"
          >
            <span>Clear</span>
          </button>
        </div>

        <!-- Show the actual inputs -->
        <FacetInputs class="mt-3" :type="getEntityType" :facets="getFacets" />
      </div>
    </transition>
  </div>
</template>

<script>
import FacetInputs from "~/components/FacetInputs";

const filterTags = ["Players", "Venues", "Teams", "Owners"];
export default {
  name: "FacetPanel",
  components: {
    FacetInputs,
  },
  computed: {
    // Check if the search is narrowed down to an entity.
    isFilterApplied() {
      return filterTags.includes(this.$route.query.type);
    },
    // return the type of the entity
    getEntityType() {
      return filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
    },
    // Get the facet controls for a specific entity
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
    // Clear the filters from the store and the url
    clearFilters() {
      let newRouteQuery = {};
      newRouteQuery.term = this.$route.query.term;
      newRouteQuery.type = this.$route.query.type;
      this.$store.commit("setRouteQuery", newRouteQuery);
      this.$router.push({ query: newRouteQuery });
    },
    // Check if the facet filters are applied.
    isFacetApplied() {
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
.clear-filter-btn {
  @apply rounded-md;
  color: #f56565;
  background-color: #f5656515;
}
.clear-filter-btn:hover {
  background-color: #f565652d;
}
</style>