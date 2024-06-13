import { useEffect, useState } from 'react'
import categoriesApi from '../../../../apis/categoriesApi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPostSchema, updatePostSchema } from '../../../../validations/postSchema'
import postsApi from '../../../../apis/postsApi'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function updatePost() {
    const navigate = useNavigate()
    const { id: postId } = useParams()
    const [post, setPost] = useState({})
    const [categories, setCategories] = useState([])
    const [messageError, setMessageError] = useState('')
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(updatePostSchema)
    })

    useEffect(() => {
        categoriesApi.getAllCategories().then((response) => {
            setCategories(response.data.result)
        })
    }, [])

    useEffect(() => {
        postsApi.getPostById(postId).then((response) => {
            setPost(response.data.result)
        })
    }, [])

    useEffect(() => {
        setValue('title', post.title)
        setValue('content', post.content)
        setValue('category_id', post.category?.id)
    }, [post])

    const onSubmit = handleSubmit((data) => {
        postsApi
            .updatePost(postId, data)
            .then((response) => {
                if (response.status === 200) {
                    toast(response.data.message)
                    navigate('/posts')
                }
            })
            .catch((error) => {
                setMessageError(error.response.data.message)
            })
    })

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
            className=''
        >
            <div
                style={{
                    width: '648px'
                }}
            >
                <form
                    onSubmit={onSubmit}
                    style={{
                        width: '100%'
                    }}
                >
                    <h2>Update Post</h2>
                    {messageError && (
                        <div className='alert alert-danger' role='alert'>
                            {messageError}
                        </div>
                    )}

                    <div className=''>
                        <label htmlFor='validationCustom01' className='form-label'>
                            Title
                        </label>
                        <input
                            {...register('title')}
                            type='text'
                            className={`form-control ${errors.title ? 'is-invalid' : false}`}
                            id='validationCustom03'
                        />

                        <div className='invalid-feedback'>{errors.title?.message}</div>
                    </div>

                    <div className=''>
                        <label htmlFor='validationCustom02' className='form-label'>
                            Content
                        </label>
                        <textarea
                            {...register('content')}
                            type='text'
                            className='form-control'
                            id='validationCustom03'
                        />
                    </div>
                    <div className=' mt-4'>
                        <select
                            {...register('category_id')}
                            className={`form-select ${errors.category_id ? 'is-invalid' : false}`}
                            aria-label='Default select example'
                        >
                            <option value=''>Select Category</option>
                            {categories.length > 0 &&
                                categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                        </select>
                        <div className='invalid-feedback'>{errors.category_id?.message}</div>
                    </div>

                    <div className='text-end'>
                        <button type='submit' className='btn btn-primary mt-5 px-5'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
