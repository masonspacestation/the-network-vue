<script setup>
import { computed } from "vue";
import { Post } from "../models/Post.js";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import App from "../App.vue";

defineProps({ post: Post })
const account = computed(() => AppState.account)



async function likePost(postId) {
  try {
    await postsService.likePost(postId)
  }
  catch (error) {
    Pop.toast('Could not like post.', 'error');
  }
}


async function destroyPost(postId) {
  try {
    const wantsToDestroy = await Pop.confirm('Are you sure you want to deprive the world of these words of wisdom?')
    if (!wantsToDestroy) return

    await postsService.destroyPost(postId)
  }
  catch (error) {
    Pop.toast('Could not delete post.', 'error');
  }
}

</script>





<template>



  <div class="card p-3 mb-3">
    <div class="row">
      <div class="col-12">
        <!-- <img class="post-profile-pic mb-2" :src="post.creator.picture" alt="">
          <h3 class="fw-medium fs-4">{{ post.creator.name }}</h3> -->
        <div class="row my-2 align-items-center">

          <div class="col-1 text-center">
            <RouterLink :to="{ name: 'Profile', params: { profileId: post.creatorId } }" class="profile-link">
              <img :src="post.creator.picture" alt="" class="post-profile-pic">
            </RouterLink>
          </div>
          <div class="col-10 ps-4">
            <h3 class="mb-1 fs-5 fw-bold text-secondary">{{ post.creator.name }}</h3>
            <small class="text-secondary disabled">{{ post.createdAt.toLocaleString() }}</small>
          </div>
          <div v-if="post.creatorId == account?.id" class="col-1 p-0">
            <button @click="destroyPost(post.id)"
              class="btn btn-link text-start  text-decoration-none text-secondary opacity-50 my-auto"><i
                class="mdi mdi-delete-outline"></i></button>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <p>
        {{ post.body }}
      </p>
    </div>
    <!-- TODO bring this image part back in -->
    <div v-if="post.imgUrl" class="row">
      <img class="post-img" :src="post.imgUrl" alt="">
    </div>
    <div class="row justify-content-end">





      <!-- <button @click="likePost(post.id)">
        <div v-if="post.likeIds.includes(AppState.account.id)">

        <i class="mdi mdi-heart btn btn-link text-start  text-decoration-none text-secondary opacity-50 my-auto"></i>
        </div>
        <div v-else>
        <i
          class="mdi mdi-heart-outline btn btn-link text-start  text-decoration-none text-secondary opacity-50 my-auto"></i>
        </div>

      </button> -->

      <p class="text-end">
        <i v-if="post.likeIds.includes(AppState.account?.id)" @click="likePost(post.id)"
          class="mdi mdi-heart btn btn-link text-start  text-decoration-none text-secondary opacity-50 my-auto"></i>
        <i v-else @click="likePost(post.id)"
          class="mdi mdi-heart-outline btn btn-link text-start  text-decoration-none text-secondary opacity-50 my-auto"></i>
        {{ post.likes.length }}
      </p>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.post-profile-pic {
  width: 50px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50em;
}

.post-img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>