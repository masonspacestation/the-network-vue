<script setup>
import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { Account } from "../models/Account.js";


defineProps({ profile: Profile })
</script>

<template>
  <section v-if="profile" class="card rounded rounded 2">


    <img :src="profile.coverImg" alt="" class="cover-img rounded-top">
    <div class="row mt-2 px-4 align-items-center">

      <div class="col-2 text-center">
        <img :src="profile.picture" alt="" class="profile-picture">
      </div>
      <div class="col-10">
        <h4>{{ profile.name }}</h4>
      </div>
    </div>
    <div class="row p-4">

      <hr>

      <div class="col-2">
      </div>

      <div class="col-10">
        <p>{{ profile.bio }}</p>
      </div>
    </div>


    <div v-if="profile.id == account.id" class="row">
      <div class="col-12 text-end">
        <button class="btn btn-outline-secondary opacity-50 w-auto me-3 mb-3" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" data-bs-dismiss="modal"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>