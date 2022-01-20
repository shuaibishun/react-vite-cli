import { Avatar, Badge, Button, Dropdown, Menu, Select, Space } from '@arco-design/web-react'
import { IconMoonFill, IconNotification, IconSunFill } from '@arco-design/web-react/icon'
import { memo } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { langName, themeName } from '@/recoil'

const HeaderWrap = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    color: var(--color-text-1);
    fon-weight: 500;
    border-bottom: 1px solid var(--color-border-2);
    background-color: var(--color-menu-light-bg);

    & .arco-space-item {
        cursor: pointer;
    }
    & .arco-btn-text {
        margin-right: 8px;
        color: var(--color-text-1);
        font-size: 18px;
    }
    & .arco-select-view-value {
        font-weight: 500;
    }

    & .arco-select-no-border {
        svg {
            stroke-width: 6px;
        }
    }
`
const SelectLanguage = () => {
    const [lang, setLang] = useRecoilState(langName)
    // 切换语言
    function handleLanguageChange(value: string) {
        setLang(value)
    }

    return (
        <Select onChange={handleLanguageChange} bordered={false} defaultValue={[lang]}>
            <Select.Option value="zh-CN">简体中文</Select.Option>
            <Select.Option value="en-US">English</Select.Option>
        </Select>
    )
}
const MemoSelectLanguage = memo(SelectLanguage)

const SelectTheme = () => {
    const [theme, setTheme] = useRecoilState(themeName) // 切换主题
    function handleThemeChange() {
        const themeVal = theme === 'light' ? 'dark' : 'light'
        document.body.setAttribute('arco-theme', themeVal)
        setTheme(themeVal)
    }

    return (
        <Button
            onClick={handleThemeChange}
            type="text"
            shape="square"
            icon={theme === 'light' ? <IconMoonFill /> : <IconSunFill />}
        />
    )
}
const MemoSelectTheme = memo(SelectTheme)

const LayoutHeader = () => {
    // 切换menu
    function handleMenuItemClick(key: string) {
        switch (key) {
            case 'logout':
                console.log('退出登录')
                break
        }
    }

    const AvatarDropList = (
        <Menu onClickMenuItem={handleMenuItemClick}>
            <Menu.Item key="logout">退出登录</Menu.Item>
        </Menu>
    )
    return (
        <HeaderWrap>
            <div className="header-left"></div>
            <div className="header-right">
                <Space size={12}>
                    <MemoSelectLanguage />
                    <Badge count={9} offset={[-8, 2]}>
                        <Button type="text" shape="square" icon={<IconNotification />} />
                    </Badge>
                    <MemoSelectTheme />
                    <Dropdown droplist={AvatarDropList} position="bl">
                        <Avatar size={28}>A</Avatar>
                    </Dropdown>
                </Space>
            </div>
        </HeaderWrap>
    )
}

export default memo(LayoutHeader)
