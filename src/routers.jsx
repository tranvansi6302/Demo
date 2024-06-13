import { useRoutes } from 'react-router-dom'
import PostList from './pages/Posts/PostList'
import CreatePost from './pages/Posts/components/CreatePost'
import UpdatePost from './pages/Posts/components/UpdatePost'
import MainLayout from './layouts/MainLayout'

export default function useRoutesElement() {
    return useRoutes([
        {
            path: '/posts',
            element: (
                <MainLayout>
                    <PostList />
                </MainLayout>
            )
        },
        {
            path: '/posts/create',
            element: (
                <MainLayout>
                    <CreatePost />
                </MainLayout>
            )
        },
        {
            path: '/posts/:id',
            element: (
                <MainLayout>
                    <UpdatePost />
                </MainLayout>
            )
        }
    ])
}
