import Vue from "vue";
import VueSnackbar from "vue-snack";
import "vue-snack/dist/vue-snack.min.css";

Vue.use(VueSnackbar, {
  position: "bottom-right",
  time: 3500,
  methods: [
    { name: "success", color: "#00ff8c" },
    { name: "error", color: "#ff0051" }
  ]
});
