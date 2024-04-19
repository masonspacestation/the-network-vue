<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'

const user = computed(() => AppState.user)
const account = computed(() => AppState.account)
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
              <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
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
