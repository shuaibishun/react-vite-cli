import { IconApps, IconBug } from '@arco-design/web-react/icon'
import type { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import SLayout from '@/components/SLayout'
import CoursesIndex from '@/pages/Courses'
import CoursesTwo from '@/pages/Courses/two'
import Home from '@/pages/Home'
import { generatorMenuOptions } from '@/utils/menu'

export const routes: RouteObject[] = [
    {
        path: '/',
        key: '/',
        element: <SLayout />,
        children: [
            {
                index: true,
                key: '/',
                element: <Home />,
                meta: { icon: <IconApps />, name: '个人中心' }
            },
            {
                path: '/courses',
                key: '/courses',
                element: <Outlet />,
                meta: { icon: <IconBug />, name: '课程管理' },
                children: [
                    {
                        index: true,
                        key: '/courses',
                        element: <CoursesIndex />,
                        meta: { name: '课程管理' }
                    },
                    {
                        path: '/courses/detail',
                        key: '/courses/detail',
                        element: <CoursesTwo />,
                        meta: { isHidden: true, name: '课程详情' }
                    }
                ]
            },
            { path: '*', element: <div>123</div> }
        ]
    }
]

export const menuOptions = generatorMenuOptions(routes[0].children as RouteObject[])
