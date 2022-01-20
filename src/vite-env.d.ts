/// <reference types="vite/client" />

import type { ReactNode } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { RouteObject } from 'react-router-dom'

declare module 'react-router-dom' {
    export interface RouteObject {
        meta?: {
            name?: string
            icon?: ReactNode
            isHidden?: boolean
        }
        key?: string
    }
}
