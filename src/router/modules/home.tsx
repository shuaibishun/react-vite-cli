import { IconApps } from '@arco-design/web-react/icon'
import { lazy } from 'react'

import SuspenseLoading from '@/components/SuspenseLoading'

const Home = lazy(() => import('@/pages/Home'))

export default [
    {
        index: true,
        key: '/',
        element: <SuspenseLoading components={<Home />} />,
        meta: { icon: <IconApps />, name: '个人中心' }
    }
]
