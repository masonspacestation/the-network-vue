<script setup>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const posts = computed(() => AppState.profilePosts)

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    await profilesService.getProfile(route.params.profileId)
  }
  catch (error) {
    Pop.toast('Could not get profile', 'error');
  }
}
</script>


<template>
  <div v-if="profile" class="container">
    <div class="row">
      <h1>
        Profile Page
      </h1>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>