<script setup>
import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { Account } from "../models/Account.js";
import { computed } from "vue";
import App from "../App.vue";


defineProps({ profile: Profile })

const account = computed(() => AppState.account)
</script>

<template>
  <section v-if="profile" class="card rounded rounded 2">


    <img :src="profile.coverImg" alt="" class="cover-img rounded-top">
    <div class="row mt-2 px-4 align-items-center">
      <div class="col-12">

        <RouterLink :to="{ name: 'Profile', params: { profileId: profile.id } }" class="profile-link">
          <img :src="profile.picture" alt="" class="profile-picture">
        </RouterLink>

        <h4 class="mt-3">{{ profile.name }}</h4>
      </div>
    </div>

    <div class="row p-4">

      <hr>

    </div>


    <div v-if="profile.id == account.id" class="row">
      <div class="col-12 text-end">
        <button class="btn btn-outline-secondary opacity-50 w-auto me-3 mb-3" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" data-bs-dismiss="modal"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.cover-img {
  height: 5dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.profile-picture {
  width: 60px;
  margin-top: -45px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50em;
}
</style>