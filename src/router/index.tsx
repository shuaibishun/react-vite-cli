import type { RouteObject } from 'react-router-dom'

import SLayout from '@/components/SLayout'
import { generatorMenuOptions } from '@/utils/menu'

import CoursesRoutes from './modules/courses'
import HomeRoutes from './modules/home'

export const routes: RouteObject[] = [
    {
        path: '/',
        key: '/',
        element: <SLayout />,
        children: [...HomeRoutes, ...CoursesRoutes, { path: '*', element: <div>123</div> }]
    }
]

export const menuOptions = generatorMenuOptions(routes[0].children as RouteObject[])
