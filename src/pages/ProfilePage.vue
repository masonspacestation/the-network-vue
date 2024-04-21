<script setup>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Modal } from "bootstrap";
import AccountForm from "../components/AccountForm.vue";
import { postsService } from "../services/PostsService.js";
import NewPostForm from "../components/NewPostForm.vue";

const route = useRoute()

const profile = computed(() => AppState.activeProfile)
const account = computed(() => AppState.account)

const posts = computed(() => AppState.profilePosts)

onMounted(() => {
  getProfile()
  getProfilePosts()
  scrollToTop()
})

function scrollToTop() {
  window.scrollTo(0, 0);
}


async function getProfile() {
  try {
    await profilesService.getProfile(route.params.profileId)
  }
  catch (error) {
    Pop.toast('Could not get profile', 'error');
  }
}

async function getProfilePosts() {
  try {
    await postsService.getProfilePosts(route.params.profileId)
  }
  catch (error) {
    Pop.toast('Could not get posts for profile', 'error');
  }
}
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

  <div v-if="route.params.profileId == account?.id">
    <NewPostForm />
  </div>

  <section class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :post="post" />
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