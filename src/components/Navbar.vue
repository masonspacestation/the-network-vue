<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import SearchBar from "./SearchBar.vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { profilesService } from "../services/ProfilesService.js";

const theme = ref(loadState('theme') || 'light')
const searchTerm = computed(() => AppState.searchTerm)

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
//   saveState('theme', theme.value)
// }

async function clearSearch() {
  try {
    await profilesService.clearSearch()
  }
  catch (error) {
    Pop.toast('Could not clear search', 'error');
  }
}
</script>

<template>
  <nav class="navbar-expand-sm navbar-dark bg-dark px-3">
    <div class="row h-100 justify-content-between align-content-center">
      <div class="col-4">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
          <i class="mdi mdi-home py-0 my-2 fs-4"></i>
          <!-- <img src="src/assets/img/cw-logo.png" alt=""> -->
        </router-link>
      </div>
      <div class="col-4 d-flex justify-content-end">

        <div class="mt-1" v-if="searchTerm">
          <div @click="clearSearch()" role="button" class="btn btn-outline-info rounded-pill"
            title="clear search results">
            {{ searchTerm }} <i class="mdi mdi-close"></i>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-end align-self-center">

        <SearchBar />
      </div>

    </div>
    <!-- <div class="collapse navbar-collapse" id="navbarText"> -->
    <!-- <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul> -->
    <!-- LOGIN COMPONENT HERE -->
    <!-- <div>
        <button class="btn text-light" @click="toggleTheme"
          :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
          <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
        </button>
      </div>
      <Login />
    </div> -->
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
