<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { profilesService } from "../services/ProfilesService.js"
import { postsService } from "../services/PostsService.js"
import { useRoute } from "vue-router"

const user = computed(() => AppState.user)
const account = computed(() => AppState.account)
const route = useRoute()

async function login() {
  AuthService.loginWithPopup()
}
async function logout() {
  AuthService.logout({ returnTo: window.location.origin })
}

</script>

<template>
  <section class="login-sidebar">
    <span class="navbar-text">
      <button class="btn selectable text-success lighten-30 text-uppercase my-lg-0" @click="login"
        v-if="!user?.isAuthenticated">
        Login
      </button>
      <div v-else>

        <div class="dropdown my-2 my-lg-0">
          <div type="button" class="border-0 selectable no-select" data-bs-toggle="dropdown" aria-expanded="false">
            <div v-if="account?.picture || user?.picture">
              <img :src="account?.picture || user?.picture" alt="account photo" class="rounded" />
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
                <div class="list-group-item dropdown-item list-group-item-action"
                  @click="profilesService.getProfile(route.params.profileId); postsService.getProfilePosts(route.params.profileId)">
                  Your Profile
                </div>
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
      <h5>{{ account.name }}</h5>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login-sidebar {
  img {
    height: 15dvh;
  }

  height: 100dvh;
  background-color: #bfeef1;
  padding: 5%;
}
</style>
