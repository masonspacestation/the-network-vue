import { api } from "./AxiosService.js"





class ProfilesService {
  getProfile(profileId) {
    const response = api.get(`api/profiles/:${profileId}`)
    console.log('profile we got', response.data);

  }

}


export const profilesService = new ProfilesService()