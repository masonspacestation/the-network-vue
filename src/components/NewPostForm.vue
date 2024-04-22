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

function toggleMediaPostButton() {
  const mediaButton = document.getElementById('media-post-button')
  const mediaInput = document.getElementById('media-input')
  mediaButton.classList.contains('d-none') ? mediaButton.classList.remove('d-none') : mediaButton.classList.add('d-none')
  mediaInput.classList.contains('d-none') ? mediaInput.classList.remove('d-none') : mediaInput.classList.add('d-none')
  // mediaInput.classList.remove('d-none')
}


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

        <div class="">
          <label for="post-body"></label>
          <form @submit.prevent="createNewPost(); toggleMediaPostButton()">
            <textarea v-model="livePostData.body" id="post-body" placeholder="Write new post" cols="30" rows="5"
              class="px-3 form-control"></textarea>
            <div class="row justify-content-between px-3 mt-2">
              <!-- <div id="media-input" class="mb-3 col-4 d-none p-0 form-group">
                <label for="media-url">Paste URL</label>
                <input v-model="livePostData.imgUrl" class="form-control" type="url" id="media-url" maxlength="500">
              </div> -->

              <div id="media-input" class="col-9 d-flex text-start p-0 d-none">
                <label for="media-url" class="col-sm-2 col-form-label"><span><i
                      class="mdi mdi-close-circle-outline text-secondary" @click="toggleMediaPostButton()"
                      title="cancel media attachment"></i></span> Image Url</label>
                <div class="col-sm-10">
                  <input v-model="livePostData.imgUrl" class="form-control" type="url" id="media-url" maxlength="500">
                </div>
              </div>

              <button id="media-post-button" type="button" @click="toggleMediaPostButton()"
                class="btn btn-outline-secondary w-auto">Photo /
                Video <i class="mdi mdi-image-multiple-outline"></i></button>


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
