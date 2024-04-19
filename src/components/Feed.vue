<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";

const posts = computed(() => AppState.posts)
</script>


<template>

  <section class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :post="post" />
    </div>
  </section>

</template>


<style lang="scss" scoped></style>