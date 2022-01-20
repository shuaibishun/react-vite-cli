import { Menu } from '@arco-design/web-react'
import { isArray } from 'lodash-es'
import { memo, useState } from 'react'
import { RouteObject, useLocation, useNavigate } from 'react-router-dom'

import { menuOptions } from '@/router'

const getMenuDom = () => {
    const nodes: JSX.Element[] = []

    function generatorMenuNodes(_routes: RouteObject[], level: number) {
        return _routes.map((route) => {
            const titleDom = (
                <>
                    {route.meta?.icon}
                    {route.meta?.name}
                </>
            )
            if (!isArray(route.children) || (isArray(route.children) && !route.children.length)) {
                if (level > 1) {
                    return <MenuItem key={route.key as string}>{titleDom}</MenuItem>
                }

                nodes.push(<MenuItem key={route.key as string}>{titleDom}</MenuItem>)
            }

            if (isArray(route.children) && route.children.length) {
                if (level > 1) {
                    return (
                        <SubMenu key={route.key as string} title={titleDom}>
                            {generatorMenuNodes(route.children, level + 1)}
                        </SubMenu>
                    )
                }

                nodes.push(
                    <SubMenu key={route.key as string} title={titleDom}>
                        {generatorMenuNodes(route.children, level + 1)}
                    </SubMenu>
                )
            }
        })
    }

    generatorMenuNodes(menuOptions, 1)

    return nodes
}
const { Item: MenuItem, SubMenu } = Menu
const LayoutMenu = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const defaultOpenKeys = [`/${pathname.split('/')[1]}`]

    function onClickMenuItem(key: string) {
        navigate(key)
    }
    return (
        <>
            <Menu
                style={{ width: 200, height: '100%' }}
                hasCollapseButton
                onClickMenuItem={onClickMenuItem}
                defaultOpenKeys={defaultOpenKeys}
                defaultSelectedKeys={[pathname]}>
                {getMenuDom()}
            </Menu>
        </>
    )
}

export default memo(LayoutMenu)
