<script setup>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { artsService } from "../services/ArtsService.js";
import Feed from "../components/Feed.vue";
import Art from "../components/Art.vue";
import ProfilePage from "./ProfilePage.vue";



onMounted(() => {
  getPosts()
  getArt()
})

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

</script>

<template>
  <div class="container">
    <section class="row mt-3">
      <div class="col-3">
        <!-- user -->
      </div>
      <!-- <div class="col-6">
        <Feed />
      </div> -->
      <div class="col-6">
        <ProfilePage />
      </div>
      <div class="col-3">
        <Art />
      </div>
    </section>

  </div>




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
