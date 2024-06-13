import http from '../configs/http'

const postsApi = {
    getAllPosts: () => http.get('posts'),
    getPostById: (id) => http.get(`posts/${id}`),
    createPost: (data) => http.post('posts', data),
    updatePost: (id, data) => http.patch(`posts/${id}`, data),
    deletePost: (id) => http.delete(`posts/${id}`)
}

export default postsApi
