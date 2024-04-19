import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { api } from "./AxiosService.js"





class ProfilesService {
  async getProfile(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    console.log('profile we got', response.data);
    AppState.activeProfile = new Profile(response.data)
  }

}


export const profilesService = new ProfilesService()