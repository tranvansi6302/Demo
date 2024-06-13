import * as yup from 'yup'
export const createPostSchema = yup.object({
    title: yup.string().required('Title is required'),
    category_id: yup.string().required('Category is required')
})

export const updatePostSchema = yup.object({
    title: yup.string().required('Title is required'),
    category_id: yup.string().required('Category is required')
})
