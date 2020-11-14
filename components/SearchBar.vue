<template>
  <div class="searchbar flex-1 flex md:max-w-lg lg:max-w-xl items-center">
    <button
      @click="isChooserOpen = !isChooserOpen"
      class="search-entity-select focus:outline-none"
    >
      <span class="pl-2">{{ selectedEntity }}</span>
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
      class="searchInput pl-2 py-2 pr-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder="Search anything..."
    />
    <button @click="search" class="search-btn focus:outline-none">
      <svg class="w-6 h-6 my-2 mx-3" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="var(--text)"
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
const tags = ["All", "Players", "Venues", "Teams", "Owners"];
export default {
  name: "searchBar",
  data: function () {
    return {
      term: this.$route.query.term || "",
      isChooserOpen: false,
      selectedEntity: tags.includes(this.$route.query.type)
        ? this.$route.query.type
        : "All",
      searchEntities: tags,
    };
  },
  methods: {
    updateURL() {
      this.$router.push({
        path: "/search",
        query: { term: this.term, type: this.selectedEntity },
      });
    },
    search() {
      this.updateURL();
    },
    setFilter(entity) {
      this.selectedEntity = entity;
      this.updateURL();
    },
  },
};
</script>

<style>
.searchInput {
  @apply transition-all;
  @apply duration-300;
  @apply ease-in-out;
  @apply bg-transparent;
}
.searchInput:focus,
.searchInput:hover {
  @apply rounded;
  background-color: var(--primary-light);
  outline: none;
}
.searchInput::placeholder {
  color: var(--text-light);
}
.searchbar {
  background-color: var(--primary);
  @apply rounded-full;
}
.searchbar:focus {
  background-color: var(--primary-light);
}

.search-btn:hover,
.search-btn:focus {
  @apply rounded-full;
  background-color: var(--primary-light);
}
.search-entity-select {
  @apply p-2;
  @apply flex;
  @apply relative;
  @apply items-center;
  border-right: transparent 2px solid;
}
.search-entity-select:hover {
  @apply rounded-full;
  background-color: var(--primary-light);
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
  @apply transition-all;
  @apply duration-300;
  background-color: var(--primary);
}
.search-entity-option {
  @apply w-full;
  @apply px-4;
  @apply py-2;
  @apply flex;
  @apply rounded;
  @apply bg-transparent;
  color: var(--text);
}
.search-entity-option:hover,
.search-entity-option:focus {
  background-color: var(--secondary);
  color: var(--primary);
}
</style>