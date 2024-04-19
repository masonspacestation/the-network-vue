import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { api } from "./AxiosService.js"





class ProfilesService {
  clearSearch() {
    throw new Error("Method not implemented.");
  }
  searchProfiles(value) {
    throw new Error("Method not implemented.");
  }
  async getProfile(profileId) {
    AppState.activeProfile = null
    const response = await api.get(`api/profiles/${profileId}`)
    console.log('profile we got', response.data);
    AppState.activeProfile = new Profile(response.data)
  }

}


export const profilesService = new ProfilesService()