<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ProfilePage from "./pages/ProfilePage.vue";
import Feed from "./components/Feed.vue";
import HomePage from "./pages/HomePage.vue";
import Art from "./components/Art.vue";
import { computed } from "vue";
import Login from "./components/Login.vue";
import { postsService } from "./services/PostsService.js";
import Pop from "./utils/Pop.js";
import NewPostForm from "./components/NewPostForm.vue";

const arts = computed(() => AppState.arts)
const totalPages = computed(() => AppState.totalPages)


async function changePage(pageNumber) {
  try {
    await postsService.changePage(pageNumber)
  }
  catch (error) {
    Pop.toast('Could not change page through posts', 'error');
  }
}

</script>

<template>

  <main>
    <div class="container-fluid">
      <section class="row p-0 mt-3">
        <div class="col-3 m-0 p-0">
          <div class="">
            <Login />
          </div>
        </div>
        <div class="col-9 pe-0">
          <header>
            <Navbar />
          </header>
          <div class="row p-3">

            <div class="col-9">

              <div v-if="AppState?.totalPages > 1" class="row my-2">
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == 1" @click="changePage(AppState.currentPage - 1)"
                    class="btn btn-secondary-outline w-50 text-center"><i class="mdi mdi-arrow-left"></i>Prev</button>
                </div>
                <div class="col 4  text-center">
                  <h6>Page {{ AppState.currentPage }} of {{ AppState.totalPages }}</h6>
                </div>
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == AppState.totalPages"
                    @click="changePage(AppState.currentPage + 1)" class="btn btn-secondary-outline w-50 text-center"><i
                      class="mdi mdi-arrow-right"></i>Next</button>
                </div>
              </div>



              <div class="row">
                <router-view />
                <!-- <HomePage /> -->
              </div>
              <div v-if="AppState?.totalPages > 1" class="row my-2">
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == 1" @click="changePage(AppState.currentPage - 1)"
                    class="btn btn-secondary-outline w-50 text-center"><i class="mdi mdi-arrow-left"></i>Prev</button>
                </div>
                <div class="col 4  text-center">
                  <h6>Page {{ AppState.currentPage }} of {{ AppState.totalPages }}</h6>
                </div>
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == AppState.totalPages"
                    @click="changePage(AppState.currentPage + 1)" class="btn btn-secondary-outline w-50 text-center"><i
                      class="mdi mdi-arrow-right"></i>Next</button>
                </div>
              </div>

            </div>
            <div class="col-3">
              <div v-for="art in arts" :key="art.id" class="col-12">
                <ArtCard :art="art" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>


  </main>
  <footer class="bg-dark text-light">

  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
