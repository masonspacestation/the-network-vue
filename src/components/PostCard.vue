<script setup>
import { Post } from "../models/Post.js";

defineProps({ post: Post })
</script>


<template>
  <div class="card p-3 mb-3">
    <div class="row">

      <div class="col-4">
        <img :src="post.creator.picture" alt="">
        <h3 class="fw-bold">
          {{ post.creator.name }}
        </h3>
      </div>
      <div class="row">
        <p>
          {{ post.body }}
        </p>
      </div>

      <div class="row justify-content-end">
        <p> <i class="mdi mdi-heart-outline"></i>
          {{ post.likes.length }}
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>