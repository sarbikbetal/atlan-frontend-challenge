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
            @change="handleSliderChange(key, $event)"
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
            @change="handleSliderChange(key, $event)"
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
          <div class="m-2" v-for="(value, key) in facet.val" :key="key">
            <PrettyCheck class="p-default p-curve p-pulse">{{
              value.replace("_", " ")
            }}</PrettyCheck>
          </div>
        </collapsible>

        <div class="flex items-center" v-if="facet.type == 'switch'">
          <span class="pr-4 text-lg">{{ key.replace("_", " ") }}</span>
          <div class="flex-grow" />
          <div>
            <PrettyCheck class="p-default p-round p-pulse" />
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
      facetData: { ...this.$route.query },
    };
  },
  methods: {
    getValues() {
      let facetData = {};
      for (const key in this.facets) {
        facetData[key] = this.facets[key].val;
      }
      return facetData;
    },
    handleSliderChange(key, value) {
      this.facetData[key] = value;
      this.facetData.type = this.$route.query.type;
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, ...this.facetData },
      });
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
</style>