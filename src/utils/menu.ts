import type { RouteObject } from 'react-router-dom'
/**
 * 获取当前菜单菜单列表
 * @param routerMap 路由
 * @returns 菜单列表
 */
export const generatorMenuOptions = (routerMap: RouteObject[]): RouteObject[] => {
    return routerMap
        .filter((f) => !f.meta?.isHidden && f.path !== '*')
        .map((item) => {
            const currentMenu = {
                ...item
            }
            // 是否有子菜单，并递归处理
            if (item.children?.length) {
                const children = generatorMenuOptions(item.children)
                if (children.length) {
                    currentMenu.children = children
                }
            }

            return currentMenu
        })
}
