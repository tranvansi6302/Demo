import http from '../configs/http'

const categoriesApi = {
    getAllCategories: () => http.get('categories')
}

export default categoriesApi
