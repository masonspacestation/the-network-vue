/* eslint-disable no-console */
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"




class PostsService {
  getProfiles() {
    throw new Error("Method not implemented.");
  }
  async destroyPost(postId) {
    const response = await api.delete(`/api/posts/${postId}`)
    console.log('deleting post', postId);

    const posts = AppState.posts
    const postIndex = posts.findIndex(post => post.id == postId)

    if (postIndex == -1) throw new Error('findIndex needs adjusted')

    posts.splice(postIndex, 1)
  }
  async likePost(postId) {
    const response = await api.post(`/api/posts/${postId}/like`)
    console.log('💙 liking post', response.data);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages

  }
  async changePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    // console.log('pagenumber:', pageNumber, response.data.page);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async createNewPost(postData) {
    const response = await api.post('api/posts', postData)
    console.log('new post: ', response.data);
    const newPost = new Post(response.data)
    AppState.posts.unshift(newPost)
  }


  async getProfilePosts(profileId) {
    AppState.profilePosts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    console.log('profile posts', response.data);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.profilePosts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async getPosts() {
    console.log('getting posts');
    const response = await api.get('api/posts')
    console.log('service 1', response.data);
    const posts = response.data.posts.map(post => new Post(post))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
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