<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";

const posts = computed(() => AppState.posts)
</script>


<template>
  <div class="container">
    <section class="row justify-content-center mt-3">
      <div class="col-6">
        <div v-for="post in posts" :key="post.id" class="col-12">
          <PostCard :post="post" />
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>