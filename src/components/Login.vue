<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { profilesService } from "../services/ProfilesService.js"
import { postsService } from "../services/PostsService.js"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop.js"
import { Account } from "../models/Account.js"

const user = computed(() => AppState.user)
const account = computed(() => AppState.account)
const route = useRoute()

async function login() {
  AuthService.loginWithPopup()
}
async function logout() {
  AuthService.logout({ returnTo: window.location.origin })
}

// async function getMyProfile() {
//   try {
//     await profilesService.getProfile(account);
//     await postsService.getProfilePosts(account)
//   }
//   catch (error) {
//     Pop.toast('Could not get your profile.', 'error');
//   }
// }


async function getProfile(user) {
  console.log('user', user);
  try {
    await profilesService.getMyProfile(user)
  }
  catch (error) {
    Pop.toast('Could not get profile', 'error');
  }
}

</script>

<template>
  <section class="login-sidebar bg-info p-5">
    <span class="navbar-text">
      <button class="btn selectable text-success lighten-30 text-uppercase my-lg-0" @click="login"
        v-if="!user?.isAuthenticated">
        Login
      </button>
      <div v-else>


        <div class="dropdown my-2 my-lg-0">
          <div type="button" class="border-0 selectable no-select" data-bs-toggle="dropdown" aria-expanded="false">
            <div v-if="account?.picture || user?.picture">
              <img :src="account?.picture || user?.picture" alt="account photo" class="account-photo" />
            </div>
          </div>
          <div class="dropdown-menu dropdown-menu-sm-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
            <div class="list-group">
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item dropdown-item list-group-item-action">
                  Manage Account
                </div>
              </router-link>
              <RouterLink v-if="account" :to="{ name: 'Profile', params: { profileId: account.id } }">
                <div @click="getProfile(user)" class="list-group-item dropdown-item list-group-item-action">
                  Your Profile
                </div>
                <!-- NOTE the code above only does anything if we are not already looking at someone else's profile, like if we're on the home page. The code below works from the homepage, and will work from someone else's profile, but only the second time it's clicked. The first time, it has no effect.
                  <div class="list-group-item dropdown-item list-group-item-action" @click="getMyProfile()">
                  Your Profile
                </div> -->
              </RouterLink>
              <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
    <div v-if="account" class="mt-3">
      <p><i v-if="account.graduated == true" class="mdi mdi-account-school"></i> {{ account.class }}</p>
      <h5>{{ account.name }}</h5>

      <div class="row my-2 px-4 justify-content-center align-items-center">
        <a v-if="account.linkedin" :href="account.linkedin" class="d-inline w-auto mx-1" target="_blank"><i
            class="mdi mdi-linkedin fs-4"></i></a>
        <a v-if="account.github" :href="account.github" class="d-inline w-auto mx-1" target="_blank"><i
            class="mdi mdi-github fs-4"></i></a>
        <a v-if="account.resume" :href="account.resume" class="d-inline w-auto mx-1" target="_blank"><i
            class="mdi mdi-account fs-4"></i></a>
      </div>
    </div>
    <div class="row align-items-end">

      <p class="text-secondary opacity-50 fs-6 fw-medium align-self-end mb-4"><i class="mdi mdi-cog"></i> User
        Settings</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login-sidebar {
  img {
    width: 100%;
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    border-radius: 50em;
    border: 3px solid rgb(68, 122, 193);
  }

  height: 100dvh;
  // background-color: #bfeef1;
  // padding: 5%;
}
</style>
