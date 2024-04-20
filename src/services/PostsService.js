/* eslint-disable no-console */
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"




class PostsService {
  async getProfilePosts(profileId) {
    AppState.profilePosts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    console.log('profile posts', response.data);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.profilePosts = posts

  }
  async getPosts() {
    console.log('getting posts');
    const response = await api.get('api/posts')
    console.log('service 1', response.data);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.posts = posts
    console.log('Appstate posts', AppState.posts);
  }
}


export const postsService = new PostsService


/**
  async getBlogs() {
    const response = await api.get('api/blogs')
    console.log('service 1', response.data);
    const blogs = response.data.map(blog => new Blog(blog))
    AppState.blogs = blogs
    console.log(AppState.blogs);
  }
 */