<template>
  <div class="searchbar flex-1 flex md:max-w-lg lg:max-w-xl items-center">
    <button
      @click="isChooserOpen = !isChooserOpen"
      class="search-entity-select relative focus:outline-none"
    >
      <span>{{ selectedEntity }}</span>
      <svg class="w-2 h-2 ml-2" viewBox="0 0 412 232">
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="var(--text)"
          fill-rule="nonzero"
        />
      </svg>
      <div v-if="isChooserOpen" class="search-entity-chooser">
        <button
          v-for="entity in searchEntities"
          :key="entity"
          @click="setFilter(entity)"
          class="search-entity-option focus:outline-none"
        >
          <span class="px-2">{{ entity }}</span>
        </button>
      </div>
    </button>
    <input
      @keyup.enter="search"
      @keyup.esc="$event.target.blur()"
      v-model="term"
      class="websearch ml-2 py-2 pr-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder="Search the web"
    />
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data: function () {
    return {
      term: "",
      isChooserOpen: false,
      selectedEntity: "All",
      searchEntities: ["All", "Players", "Venues", "Teams", "Owners"],
    };
  },
  methods: {
    search() {
      if (this.term)
        this.$router.push({ path: "search", query: { term: this.term } });
      else
        this.$snack.danger({
          text: "Please type in something...",
          button: "OK",
        });
    },
  },
};
</script>

<style>
.websearch {
  @apply mr-2;
  @apply transition-all;
  @apply duration-300;
  @apply ease-in-out;
  @apply bg-transparent;
}
.websearch:focus {
  outline: none;
}
.websearch::placeholder {
  color: var(--text-light);
}
.searchbar {
  background-color: var(--primary);
  @apply rounded-lg;
}
.searchbar:hover {
  background-color: var(--primary-light);
  border-color: var(--accent);
}
.searchbar:focus {
  background-color: var(--primary-light);
}
.search-entity-select {
  @apply px-2;
  @apply my-2;
  @apply flex;
  @apply items-center;
  border-right: transparent 2px solid;
}
.search-entity-select:hover,
.search-entity-select:focus {
  border-right: var(--text-light) 2px solid;
}
.search-entity-chooser {
  top: 28px;
  left: 0px;
  @apply mt-2;
  @apply w-40;
  @apply absolute;
  @apply bg-white;
  @apply rounded-lg;
  @apply shadow-xl;
  background-color: var(--primary);
}
.search-entity-option {
  @apply w-full;
  @apply px-4;
  @apply py-2;
  @apply flex;
  @apply rounded-lg;
  @apply bg-transparent;
  color: var(--text);
}
.search-entity-option:hover,
.search-entity-option:focus {
  background-color: var(--secondary);
  color: var(--primary);
}
</style>