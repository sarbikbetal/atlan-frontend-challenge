<template>
  <transition name="fade">
    <div class="flex flex-wrap justify-between">
      <!-- loop through all available facet controls -->
      <div class="w-full px-5 pb-4" v-for="(facet, key) in facets" :key="key">
        <!-- Show range controls -->
        <div class="text-center" v-if="facet.type == 'range'">
          <vue-slider
            :min="facet.range[0]"
            :max="facet.range[1]"
            :marks="[facet.range[0], facet.range[1]]"
            :value="facetData[key] || [facet.range[0], facet.range[1]]"
            @change="handleFacetChange(key, $event)"
            :enable-cross="false"
            :lazy="true"
            contained="true"
            :tooltip-style="{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--secondary)',
            }"
          />
          <label class="text-strong">{{ key }}</label>
        </div>

        <!-- Show range controls with discrete steps-->
        <div class="text-center" v-if="facet.type == 'discrete_range'">
          <vue-slider
            :min="facet.range[0]"
            :max="facet.range[1]"
            :interval="facet.interval"
            :marks="[facet.range[0], facet.range[1]]"
            :value="facetData[key] || [facet.range[0], facet.range[1]]"
            @change="handleFacetChange(key, $event)"
            :enable-cross="false"
            :lazy="true"
            contained="true"
            :tooltip-style="{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--secondary)',
            }"
          />
          <label class="text-strong">{{ key }}</label>
        </div>

        <!-- Show the checkboxes in a collapsible -->
        <Collapsible
          v-if="facet.type == 'checkbox'"
          :title="key.replace('_', ' ')"
          :expanded="facet.open"
        >
          <div class="m-2" v-for="(value, idx) in facet.val" :key="idx">
            <PrettyCheck
              @change="handleFacetChange(value, $event)"
              :checked="facetData[value] == 'true'"
              class="p-default p-curve p-pulse"
              >{{ value.replace("_", " ") }}</PrettyCheck
            >
          </div>
        </Collapsible>

        <!-- Show the switch -->
        <div class="flex items-center" v-if="facet.type == 'switch'">
          <span class="pr-4 text-lg text-strong">{{
            key.replace("_", " ")
          }}</span>
          <div class="flex-grow" />
          <div>
            <PrettyCheck
              @change="handleFacetChange(key, $event)"
              :checked="facetData[key] == 'true'"
              class="p-default p-round p-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueSlider from "vue-slider-component";
import PrettyCheck from "pretty-checkbox-vue/check";
import PrettyRadio from "pretty-checkbox-vue/radio";
import Collapsible from "~/components/Collapsible";

import "vue-slider-component/theme/material.css";

export default {
  name: "FacetInputs",
  components: {
    VueSlider,
    PrettyCheck,
    Collapsible,
  },
  props: {
    type: String,
    facets: Object,
  },
  computed: {
    // returns the initial route query data to be fed to the input controls init
    facetData() {
      return this.$route.query;
    },
  },
  methods: {
    // Called everytime an input control changes
    // updates the vuex store and pushes a new route with updated data
    handleFacetChange(key, value) {
      // we get the initial data from the store to preserve previously set filters on that entity
      let routeQuery = this.$store.getters.getRouteQuery;
      routeQuery.term = this.$route.query.term;
      routeQuery.type = this.$route.query.type;
      routeQuery[key] = value;
      this.$store.commit("setRouteQuery", routeQuery);
      this.$router.push({ query: routeQuery });
    },
  },
  watch: {
    // We watch for the `type` prop and clear the store of previously set filters
    // Actual route switching is done from the SearchBar component when the type is changed
    type: function (newVal, oldVal) {
      if (newVal != oldVal) {
        let newRouteQuery = {};
        newRouteQuery.term = this.$route.query.term;
        newRouteQuery.type = this.$route.query.type;
        this.$store.commit("setRouteQuery", newRouteQuery);
      }
    },
  },
  created() {
    // this is done to initialize the store with route query if any,
    // useful when someone shares the url with filters applied
    this.$store.commit("setRouteQuery", this.$route.query);
  },
};
</script>

<style>
@import "pretty-checkbox/dist/pretty-checkbox.min.css";
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
.vue-slider-dot-handle::after {
  background-color: var(--secondary);
  opacity: 0.2;
}
.vue-slider-rail {
  background-color: var(--secondary-light);
}
.vue-slider-dot-handle,
.vue-slider-process,
.vue-slider-mark-step {
  background-color: var(--secondary);
}

.pretty input:checked ~ .state label:before,
.pretty.p-toggle .state label:before {
  border: 1px solid var(--secondary) !important;
}
.pretty.p-default:not(.p-fill) input:checked ~ .state label:after {
  background-color: var(--secondary) !important;
}

.pretty.p-default.p-round.p-fill input:checked ~ .state label:after {
  background-color: var(--secondary) !important;
}
</style>