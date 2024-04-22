<script setup>
import { computed, ref } from "vue";
import { AppState } from "../AppState.js";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";




const searchQuery = ref('')

// const searchTerm = computed(() => AppState.searchTerm)

async function searchProfiles() {
  try {
    await profilesService.searchProfiles(searchQuery.value)
    searchQuery.value = ''
  }
  catch (error) {
    Pop.toast('Could not find profiles', 'error');
  }
}


// async function clearSearch() {
//   try {
//     await profilesService.clearSearch()
//   }
//   catch (error) {
//     Pop.toast('Could not clear search', 'error');
//   }
// }

</script>


<template>


  <form @submit.prevent="searchProfiles()">
    <div class="input-group">
      <input v-model="searchQuery" type="text" class="form-control" placeholder="search for anybody..."
        id="search-input">
      <button class="btn btn-info w-auto"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
  <!-- <div class="mt-1" v-if="searchTerm">
    <div @click="clearSearch()" role="button" class="btn btn-outline-info rounded-pill" title="clear search results">
      {{ searchTerm }} <i class="mdi mdi-close"></i>
    </div>
  </div> -->


</template>


<style lang="scss" scoped></style>