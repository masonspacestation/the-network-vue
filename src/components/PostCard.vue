<script setup>
import { computed } from "vue";
import { Post } from "../models/Post.js";
import { AppState } from "../AppState.js";

defineProps({ post: Post })

</script>





<template>



  <div class="card p-3 mb-3">
    <div class="row">
      <div class="col-12">
        <RouterLink :to="{ name: 'Profile', params: { profileId: post.creatorId } }" class="profile-link">
          <img class="post-profile-pic mb-2" :src="post.creator.picture" alt="">
          <h3 class="fw-medium fs-4">{{ post.creator.name }}</h3>
        </RouterLink>
      </div>
    </div>
    <div class="row">
      <p>
        {{ post.body }}
      </p>
    </div>
    <!-- TODO bring this image part back in -->
    <!-- <div v-if="post.imgUrl" class="row">
        <img class="post-img" :src="post.imgUrl" alt="">
      </div> -->
    <div class="row justify-content-end">
      <p class="text-end"> <i class="mdi mdi-heart-outline"></i>
        {{ post.likes.length }}
      </p>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.post-profile-pic {
  width: 45px;
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