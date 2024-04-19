<script setup>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Modal } from "bootstrap";
import AccountForm from "../components/AccountForm.vue";

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
function openProfileEditor() {

}
</script>


<template>
  <section v-if="profile" class="card rounded rounded 2">
    <div class="card rounded rounded 2">

      <img :src="profile.coverImg" alt="" class="cover-img rounded-top">
      <div class="row mt-3">

        <div class="col-2 text-center">
          <img :src="profile.picture" alt="" class="profile-picture">
        </div>
        <div class="col-10">
          <p>{{ profile.bio }}</p>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-end">
        <button @click="openProfileEditor()" class="btn btn-primary w-50 float-end me-3" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" data-bs-dismiss="modal"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </section>
  <AccountForm />
</template>


<style lang="scss" scoped>
.cover-img {
  height: 15dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.profile-picture {
  width: 60px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50em;
}
</style>