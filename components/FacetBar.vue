<template>
  <transition name="fade">
    <div class="facet-container container" v-if="isFilterOpen">
      <facetInputs
        :type="selectedFilter"
        :facets="getFacets"
        :values="getValues"
      />
    </div>
  </transition>
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
    isFilterOpen: function () {
      return filterTags.includes(this.$route.query.type);
    },
    selectedFilter: function () {
      return filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
    },
    getFacets: function () {
      let zym = this.$store.state;
      console.log(zym);
      let type = filterTags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "";
      if (!type) return;
      else if (type == "Players") return this.$store.state.playerFields;
      else if (type == "Teams") return this.$store.state.teamFields;
    },
    getValues() {
      let vals = [];
      const facets = this.getFacets;
      for (const key in facets) {
        const element = facets[key];
        vals.push(element.val);
      }
      return vals;
    },
  },
};
</script>

<style>
.facet-container {
  min-height: 4rem;
  padding-top: 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>