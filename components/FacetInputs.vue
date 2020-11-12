<template>
  <div>
    <div v-for="(facet, idx) in facets" :key="idx">
      <vue-slider
        v-if="facet.type == 'range'"
        :min="facet.val[0]"
        :max="facet.val[1]"
        :marks="[facet.val[0], facet.val[1]]"
        :value="[facet.val[0], facet.val[1]]"
        @change="handleSliderChage(idx, $event)"
        :enable-cross="false"
        tooltip-placement="bottom"
        contained="true"
      ></vue-slider>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";
export default {
  name: "facetInputs",
  components: {
    VueSlider,
  },
  props: {
    type: String,
    facets: Object,
    values: Array,
  },
  data: function () {
    return {
      facetData: [],
    };
  },
  methods: {
    handleSliderChage(...val) {
      console.log(val);
    },
  },
  watch: {
    values: function (newVal, oldVal) {
      this.facetData = newVal;
    },
  },
};
</script>

<style>
</style>