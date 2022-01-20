import 'virtual:windi.css'
import '@/assets/main.less'

import { ConfigProvider } from '@arco-design/web-react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import App from './App'

ReactDOM.render(
    <ConfigProvider size="small">
        <Router>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </Router>
    </ConfigProvider>,
    document.getElementById('root')
)
