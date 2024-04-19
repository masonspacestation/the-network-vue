import { reactive } from 'vue'
import { Post } from "./models/Post.js"
import { Art } from "./models/Art.js"
import { Profile } from "./models/Profile.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {Post[]} */
  posts: [],

  /**@type {Art[]} */
  arts: [],

  /**@type {Profile} */
  activeProfile: null,

  /**@type {Post[]} */
  profilePosts: []
})
