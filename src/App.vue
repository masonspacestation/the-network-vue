<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { computed } from "vue";
import Login from "./components/Login.vue";
import { postsService } from "./services/PostsService.js";
import Pop from "./utils/Pop.js";

const arts = computed(() => AppState.arts)

async function changePage(pageNumber) {
  try {
    await postsService.changePage(`api/posts?page=${pageNumber}`)
  }
  catch (error) {
    Pop.toast('Could not change page through posts', 'error');
  }
}

async function changeSearchPage(pageNumber) {
  try {
    await postsService.changePage(`api/posts?page=${pageNumber}&query=${AppState.searchTerm}`)
  }
  catch (error) {
    Pop.toast('Could not change page through posts', 'error');
  }
}

</script>

<template>

  <main>
    <div class="container-fluid">
      <section class="row p-0">
        <div class="col-2 m-0 p-0">
          <div class="sticky-top">
            <Login />
          </div>
        </div>
        <div class="col-10 p-0">
          <header class="sticky-top">
            <Navbar />
          </header>
          <div class="row p-3">

            <div class="col-9">
              <!-- SECTION post navigation -->
              <div v-if="!AppState?.searchTerm">
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
                      @click="changePage(AppState.currentPage + 1)"
                      class="btn btn-secondary-outline w-50 text-center"><i
                        class="mdi mdi-arrow-right"></i>Next</button>
                  </div>
                </div>
              </div>


              <!-- SECTION search navigation -->
              <div v-if="AppState?.searchTerm">
                <div class="row my-2">
                  <!-- <div v-if="AppState?.totalPages > 1" class="row my-2"> -->
                  <div class="col 4  text-center">
                    <button :disabled="AppState.currentPage == 1" @click="changeSearchPage(AppState.currentPage - 1)"
                      class="btn btn-outline-success w-50 text-center"><i class="mdi mdi-arrow-left"></i>Prev</button>
                  </div>
                  <div class="col 4  text-center">
                    <h6>Page {{ AppState.currentPage }} of {{ AppState.totalPages }}</h6>
                  </div>
                  <div class="col 4  text-center">
                    <button :disabled="AppState.currentPage == AppState.totalPages"
                      @click="changeSearchPage(AppState.currentPage + 1)"
                      class="btn btn-success-outline w-50 text-center"><i class="mdi mdi-arrow-right"></i>Next</button>
                  </div>
                </div>
              </div>


              <!-- SECTION profile post navigation -->

              <div class="row p-4">
                <router-view />
                <!-- <HomePage /> -->
              </div>
              <div v-if="AppState?.totalPages > 1" class="row my-2">
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == 1" @click="changePage(AppState.currentPage - 1)"
                    class="btn btn-primary-outline w-50 text-center"><i class="mdi mdi-arrow-left"></i>Prev</button>
                </div>
                <div class="col 4  text-center">
                  <h6>Page {{ AppState.currentPage }} of {{ AppState.totalPages }}</h6>
                </div>
                <div class="col 4  text-center">
                  <button :disabled="AppState.currentPage == AppState.totalPages"
                    @click="changePage(AppState.currentPage + 1)" class="btn btn-primary-outline w-50 text-center"><i
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
