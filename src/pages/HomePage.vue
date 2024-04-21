<script setup>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { artsService } from "../services/ArtsService.js";
import Feed from "../components/Feed.vue";
import Art from "../components/Art.vue";
import { useRoute } from "vue-router";
import ProfilePreviewCard from "../components/ProfilePreviewCard.vue";
import { profilesService } from "../services/ProfilesService.js";

const route = useRoute()

const posts = computed(() => AppState.posts)
const profiles = computed(() => AppState.profiles)

onMounted(() => {
  getPosts()
  getArt()
  // getProfile()
})



// async function getProfile() {
//   try {
//     await profilesService.getProfile(route.params.profileId)
//   }
//   catch (error) {
//     Pop.toast('Could not get profile', 'error');
//   }
// }

async function getArt() {
  try {
    await artsService.getArt()
  }
  catch (error) {
    Pop.toast('Could not get art', 'error');
  }
}

async function getPosts() {
  try {
    await postsService.getPosts()
  }
  catch (error) {
    Pop.toast('Could not get posts.', 'error');
  }
}
async function getProfiles() {
  try {
    await profilesService.getProfiles()
  }
  catch (error) {
    Pop.toast('Could not get profiles.', 'error');
  }
}

</script>

<template>
  <!-- <div class="container">
    <section class="row mt-3">
      <div class="col-3">
        user
      </div> -->

  <!-- <Feed /> -->
  <div class="row mb-3">
    <div class="col-12">
      <NewPostForm />
    </div>
  </div>

  <div v-if="AppState.searchTerm">
    <div v-for="profile in profiles" :key="profile.id" class="col-12">
      <ProfilePreviewCard :profile="profile" />
    </div>
  </div>

  <div v-else>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :post="post" />
    </div>
  </div>


  <!-- <div class="col-6">
        <ProfilePage />
      </div>
      <div class="col-3">
        <Art />
      </div>
    </section>

  </div> -->




</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
