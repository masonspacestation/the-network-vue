<script setup>
import { computed, ref } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

// const posts = computed(() => AppState.posts)

const livePostData = ref({
  body: '',
  imgUrl: '',
  likeIds: []
})

// function activelyPostingToggle() {
//   console.log('posting 1', AppState.posting);
//   let posting = AppState.posting
//   posting != posting
//   console.log('posting', posting);
// }

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
  <!-- <div class="row">
    <div class="col-12 text-end">
      <button @click="activelyPostingToggle()" class="btn btn-outline-secondary opacity-50 w-auto me-3 mb-3"><i
          class="mdi mdi-plus fw-medium"></i> New
        Post</button>
    </div>
  </div> -->


  <section class="card p-3">
    <div class="row">
      <div class="col-2 d-flex">
        <img :src="AppState.account?.picture" alt="" class="w-75 mt-2 m-auto  post-profile-pic">
      </div>
      <div class="col-10">

        <div class="form-floating">
          <label for="post-body"></label>
          <form @submit.prevent="createNewPost()">
            <textarea v-model="livePostData.body" id="post-body" placeholder="Write new post" cols="30" rows="5"
              class="px-3 form-control"></textarea>
            <div class="row justify-content-between px-3 mt-2">
              <button class="btn btn-outline-secondary w-auto">Photo / Video <i
                  class="mdi mdi-image-multiple-outline"></i></button>
              <button class="btn btn-outline-primary w-auto" type="submit">Post <i
                  class="mdi mdi-send-circle"></i></button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.post-profile-pic {

  aspect-ratio: 1/1;
  // object-fit: cover;
  // object-position: center;
  border-radius: 50em;
}
</style>
