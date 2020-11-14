<template>
  <transition name="fade">
    <div class="flex flex-wrap justify-between">
      <div class="w-full flex justify-center py-2">
        <button
          class="clear-all-btn focus:outline-none flex px-2 py-1"
          @click="clearFilters"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="#f56565"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
          <span>Clear</span>
        </button>
      </div>
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

        <collapsible
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
        </collapsible>

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
import collapsible from "~/components/Collapsible";

import "vue-slider-component/theme/material.css";
import Collapsible from "./Collapsible.vue";

export default {
  name: "facetInputs",
  components: {
    collapsible,
    VueSlider,
    PrettyCheck,
    Collapsible,
  },
  props: {
    type: String,
    facets: Object,
  },
  data: function () {
    return {
      facetState: { ...this.$route.query },
    };
  },
  computed: {
    facetData() {
      return this.$route.query;
    },
  },
  methods: {
    handleFacetChange(key, value) {
      this.facetState.term = this.$route.query.term;
      this.facetState.type = this.$route.query.type;
      this.facetState[key] = value;
      this.$router.push({
        query: { ...this.facetState },
      });
      console.log(key, value);
    },
    clearFilters() {
      this.facetState = {};
      this.facetState.term = this.$route.query.term;
      this.facetState.type = this.$route.query.type;
      this.$router.push({
        query: { ...this.facetState },
      });
    },
  },
  watch: {
    type: function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.facetState = {};
        this.facetState.term = this.$route.query.term;
        this.facetState.type = this.$route.query.type;
      }
    },
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
.clear-all-btn {
  @apply rounded-full;
  border: 2px solid #f56565;
  color: #f56565;
}
</style>