<template>
  <transition name="fade">
    <div class="flex flex-wrap justify-between">
      <div class="w-full px-4 pb-4" v-for="(facet, key) in facets" :key="key">
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
          <label>{{ key }}</label>
        </div>

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
          <label>{{ key }}</label>
        </div>

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

        <div class="flex items-center" v-if="facet.type == 'switch'">
          <span class="pr-4 text-lg">{{ key.replace("_", " ") }}</span>
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
  name: "facetInputs",
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
    facetData() {
      return this.$route.query;
    },
  },
  methods: {
    handleFacetChange(key, value) {
      let routeQuery = this.$store.getters.getRouteQuery;
      routeQuery.term = this.$route.query.term;
      routeQuery.type = this.$route.query.type;
      routeQuery[key] = value;
      this.$store.commit("setRouteQuery", routeQuery);
      this.$router.push({ query: routeQuery });
    },
  },
  watch: {
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
</style>