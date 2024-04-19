<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Art } from "../models/Art.js";

const arts = computed(() => AppState.arts)

</script>


<template>

  <!-- NOTE this is not being used. The ArtCard is now being called directly from the App.vue -->
  <div v-for="art in arts" :key="art.id" class="col-12">
    <ArtCard :art="art" />
  </div>


</template>


<style lang="scss" scoped></style>