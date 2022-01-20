import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import LayoutHeader from './LayoutHeader'
import LayoutMenu from './LayoutMenu'

const MenuWrap = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: var(--color-bg-1);

    & .arco-menu {
        flex-shrink: 0;
        border-right: 1px solid var(--color-border-2);
    }

    & .arco-menu-inner {
        overflow-y: auto;
    }

    & .layout-container {
        flex: 1;
        min-height: 100%;
        overflow-y: auto;
    }
`

const Layout = () => {
    return (
        <>
            <LayoutHeader />
            <MenuWrap>
                <LayoutMenu />
                <div className="layout-container">
                    <Outlet />
                </div>
            </MenuWrap>
        </>
    )
}

export default Layout
