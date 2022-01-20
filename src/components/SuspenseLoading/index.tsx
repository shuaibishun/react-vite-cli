import { Spin } from '@arco-design/web-react'
import { ReactNode, Suspense } from 'react'

const SuspenseLoading = (props: { components: ReactNode }) => {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex justify-center items-center">
                    <Spin />
                </div>
            }>
            {props.components}
        </Suspense>
    )
}

export default SuspenseLoading
