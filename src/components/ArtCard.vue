<script setup>
import { Art } from "../models/Art.js";
import { AppState } from "../AppState.js";


defineProps({ art: Art })
</script>


<template>
  <div class="row">
    <div class="col-12">

      <a :href="art.linkURL"></a>
      <img class="art w-100 pb-3" :src="art.tall" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped></style>