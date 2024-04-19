import { AppState } from "../AppState.js";
import { Art } from "../models/Art.js";
import { api } from "./AxiosService.js"




class ArtsService {
  async getArt() {
    const response = await api.get('api/ads')
    console.log('got ads', response.data);
    const arts = response.data.map(art => new Art(art))
    AppState.arts = arts
    console.log('Appstate arts', AppState.arts);
  }

}


export const artsService = new ArtsService