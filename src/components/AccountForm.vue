<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
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
  linkedin: '',
  github: '',
  resume: '',
  class: '',
  graduated: Boolean
})

watchEffect(() => {
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
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Profile Details</h1>
          <button type="button" class="btn bg-none text-secondary opacity-50" data-bs-dismiss="modal"
            aria-label="Close and discard changes">Cancel</button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">


            <form @submit.prevent="saveAccount()">
              <div class="row">
                <div class="col-4 mb-3">
                  <label for="account-name">Name</label>
                  <input placeholder="Name . . ." v-model="accountData.name" class="form-control" type="text"
                    id="account-name" required maxlength="100">
                </div>

                <div class="mb-3 col-4">
                  <label for="account-picture">Profile Picture</label>
                  <input placeholder="Image url . . ." v-model="accountData.picture" class="form-control" type="url"
                    id="account-picture" maxlength="500">
                </div>

                <div class="mb-3 col-4">
                  <label for="account-cover-image">Cover Image</label>
                  <input placeholder="Image url . . ." v-model="accountData.coverImg" class="form-control" type="url"
                    id="account-cover-image" maxlength="500">
                </div>

                <div class="mb-3 col-12">
                  <label for="account-bio">Bio</label>
                  <textarea placeholder="Tell us about yourself. . ." v-model="accountData.bio" name="account-bio"
                    id="account-bio" rows="5" class="form-control"></textarea>
                </div>
              </div>
              <div class="row">

                <div class="mb-3 col-4">
                  <label for="account-linkedin-link">Linkedin</label>
                  <input placeholder="url . . ." v-model="accountData.linkedin" class="form-control" type="url"
                    id="account-linkedin-link" maxlength="500">
                </div>

                <div class="mb-3 col-4">
                  <label for="account-github-link">Github</label>
                  <input placeholder="url . . ." v-model="accountData.github" class="form-control" type="url"
                    id="account-github-link" maxlength="500">
                </div>

                <div class="mb-3 col-4">
                  <label for="account-resume-link">Resume</label>
                  <input placeholder="url . . ." v-model="accountData.resume" class="form-control" type="url"
                    id="account-resume-link" maxlength="500">
                </div>

              </div>
              <div class="row align-items-center">

                <div class="col-4 mb-3">
                  <label for="attending-class">Attending Class</label>
                  <input placeholder="ie: Spring 2024" v-model="accountData.class" class="form-control" type="text"
                    id="attending-class" maxlength="100">
                </div>

                <div class="col-auto">
                  <div class="form-check">
                    <input v-model="accountData.graduated" class="form-check-input" type="checkbox"
                      id="autoSizingCheck">
                    <label class="form-check-label" for="autoSizingCheck">
                      Graduated
                    </label>
                  </div>
                  <!-- 
                  <label for="graduated">Graduated?</label>
                  <input v-model="accountData.graduated" class="form-control" type="checkbox" id="graduated"> -->
                </div>




                <div class="modal-footer mb-3 col-12 d-flex align-items-end justify-content-end">
                  <button @click="closeModal()" type="submit" class="btn btn-primary w-25"
                    data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </form>
            <!-- <div class="row">
            <RouterLink @click="closeModal()" :to="{ name: 'Profile', params: { profileId: accountData.name } }">
            </RouterLink>
          </div> -->


          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>