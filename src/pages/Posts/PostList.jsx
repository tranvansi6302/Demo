import { useEffect, useState } from 'react'
import postsApi from '../../apis/postsApi'
import { Link } from 'react-router-dom'
import ConfirmModal from '../../components/ConfirmModal'

// && || ?? !! Ref useState React Query Context API useContext, Redux
export default function PostList() {
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(null)
    useEffect(() => {
        postsApi
            .getAllPosts()
            .then((response) => {
                setPosts(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDelete = () => {
        postsApi
            .deletePost(postId)
            .then((response) => {
                if (response.status === 200) {
                    postsApi
                        .getAllPosts()
                        .then((response) => {
                            setPosts(response.data.result)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setPostId(null)
            })
    }

    return (
        <div>
            <ConfirmModal title='Can delete' content='Delete post' onClick={handleDelete} />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2>Post List</h2>
                <Link to='/posts/create'>
                    <button className='btn btn-primary'>Add Post</button>
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Author</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 &&
                        posts.map((post, index) => (
                            <tr key={post.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.status}</td>
                                <td>{post.category.name}</td>
                                <td>{post.author.fullname}</td>
                                <td>
                                    <Link to={`/posts/${post.id}`} className='btn btn-success'>
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => setPostId(post.id)}
                                        data-bs-toggle='modal'
                                        data-bs-target='#exampleModal'
                                        className='btn btn-danger ms-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
