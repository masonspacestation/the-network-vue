<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted, ref } from "vue";
import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";
import Pop from "../utils/Pop.js";
import { Modal } from "bootstrap";
import { Account } from "../models/Account.js";

const account = computed(() => AppState.account)

const accountData = ref({
  name: '',
  picture: '',
  coverImg: '',
  bio: '',
  linkedin: ''
})

onMounted(() => {
  accountData.value = { ...AppState.account }
})

function closeModal() {
  Modal.getOrCreateInstance('#staticBackdrop').hide()
}

async function saveAccount() {
  try {
    await accountService.updateAccount(accountData.value)
    Pop.toast("Account saved!", 'success')
  } catch (error) {
    Pop.toast("Could not save account changes", 'error')
    console.error(error)
  }
}

</script>


<template>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Write New Post</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <form @submit.prevent="saveAccount()">
              <div class="col-4 mb-3">
                <label for="account-name">Name</label>
                <input v-model="accountData.name" class="form-control" type="text" id="account-name">
              </div>
              <div class="modal-footer">
                <button @click="closeModal()" type="submit" class="btn btn-secondary"
                  data-bs-dismiss="modal">Save</button>
              </div>
            </form>
          </div>
          <!-- <div class="row">
            <RouterLink @click="closeModal()" :to="{ name: 'Profile', params: { profileId: accountData.name } }">
            </RouterLink>
          </div> -->


        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>