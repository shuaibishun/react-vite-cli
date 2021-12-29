import { Button, Input, Space } from '@arco-design/web-react'
import { useMouse } from 'ahooks'
import { keyBy } from 'lodash-es'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
    const [count, setCount] = useState(0)
    const [valueN, setValueN] = useState('')

    const state: {
        screenX: number
        screenY: number
        clientX: number
        clientY: number
        pageX: number
        pageY: number
    } = useMouse()

    const b = [
        {
            a: 2,
            b: 3
        },
        {
            a: 5,
            b: 6
        }
    ]

    const c = 1

    console.log(keyBy(b, 'a'), b[0].a, c)

    const Hr = styled.div`
        font-size: 24px;
        color: #3dc;
    `

    return (
        <div className="App bg-white">
            <header className="App-header">
                <p>Hello Vite + React!{state.clientX}</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <Hr>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                    {valueN}
                </Hr>
            </header>
            <Space size="large">
                <Button type="primary">Primary</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="outline">Outline</Button>
                <Button type="text">Text</Button>

                <Input
                    value={valueN}
                    style={{ width: 350 }}
                    allowClear
                    placeholder="Please Enter something"
                    onChange={(value) => {
                        setValueN(value)
                    }}
                />
            </Space>
        </div>
    )
}

export default App
