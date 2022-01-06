import 'virtual:windi.css'
import '@/assets/main.less'

import { ConfigProvider } from '@arco-design/web-react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil'

import App from './App'

ReactDOM.render(
    <RecoilRoot>
        <ConfigProvider size="small">
            <Router>
                <App />
            </Router>
        </ConfigProvider>
    </RecoilRoot>,
    document.getElementById('root')
)
