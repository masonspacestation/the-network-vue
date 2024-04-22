/* eslint-disable no-console */
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { api } from "./AxiosService.js"


const searchTerm = computed(() => AppState.searchTerm)


class ProfilesService {
  async clearSearch() {
    AppState.searchTerm = ''
    // await this.getProfiles()
  }

  async getProfiles(searchQuery) {
    const response = await api.get(`/api/profiles`)
    console.log('found profiles', searchQuery);
    const profiles = response.data.map(profile => new Profile(profile))
    AppState.searchTerm = searchQuery
    AppState.profiles = profiles
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }


  async searchProfiles(searchQuery) {
    const response = await api.get(`/api/profiles?query=${searchQuery}`)
    console.log('found profile', response.data);
    const profiles = response.data.map(profile => new Profile(profile))
    AppState.searchTerm = searchQuery
    AppState.profiles = profiles
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async getProfile(profileId) {
    AppState.activeProfile = null
    const response = await api.get(`api/profiles/${profileId}`)
    console.log('profile we got', response.data);
    AppState.activeProfile = new Profile(response.data)
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }


  async getMyProfile(accountId) {
    AppState.activeProfile = null
    const profile = AppState.profiles.find((profile) => profile.id == accountId)
    const profileId = profile.id

    console.log('profileid', profileId);
    // const response = await api.get(`api/profiles/${profileId}`)
    // console.log('profile we got', response.data);
    // AppState.activeProfile = new Profile(response.data)
    await this.getProfile(profileId)
  }

}


export const profilesService = new ProfilesService()