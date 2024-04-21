<script setup>
import { ref } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";


const livePostData = ref({
  body: '',
  imgUrl: '',
  likeIds: []
})

async function createNewPost() {
  console.log('postdata', livePostData);

  try {
    await postsService.createNewPost(livePostData.value)

    livePostData.value = {
      body: '',
      imgUrl: '',
      likeIds: []
    }



  }
  catch (error) {
    Pop.toast('Could not make new post', 'error');
  }
}
</script>


<template>
  <div class="form-floating">
    <label for="post-body">Write new Post</label>
    <form @submit.prevent="createNewPost()">
      <textarea v-model="livePostData.body" id="post-body" placeholder="Write new post" cols="30" rows="10"
        class="form-control"></textarea>
      <button type="submit">Post!</button>
    </form>
  </div>
</template>


<style lang="scss" scoped></style>