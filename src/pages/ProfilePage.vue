<script setup>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { onMounted } from "vue";

const route = useRoute()

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
  <h1>
    Profile Page
  </h1>
</template>


<style lang="scss" scoped></style>