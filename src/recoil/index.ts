import { atom } from 'recoil'

// 主题名称
export const themeName = atom({
    key: 'theme',
    default: 'light'
})

// 语言key
export const langName = atom({
    key: 'lang',
    default: 'zh-CN'
})
