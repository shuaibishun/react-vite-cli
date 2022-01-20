import { IconBug } from '@arco-design/web-react/icon'
import { lazy } from 'react'
import { Outlet } from 'react-router-dom'

import SuspenseLoading from '@/components/SuspenseLoading'

const CoursesIndex = lazy(() => import('@/pages/Courses'))
const CoursesTwo = lazy(() => import('@/pages/Courses/two'))
const CoursesList = lazy(() => import('@/pages/Courses/list'))

export default [
    {
        path: '/courses',
        key: '/courses',
        element: <Outlet />,
        meta: { icon: <IconBug />, name: '课程管理' },
        children: [
            {
                index: true,
                key: '/courses',
                element: <SuspenseLoading components={<CoursesIndex />} />,
                meta: { name: '课程管理' }
            },
            {
                path: '/courses/detail',
                key: '/courses/detail',
                element: <SuspenseLoading components={<CoursesTwo />} />,
                meta: { name: '课程详情' }
            },
            {
                path: '/courses/list',
                key: '/courses/list',
                element: <SuspenseLoading components={<CoursesList />} />,
                meta: { name: '课程列表' }
            }
        ]
    }
]
