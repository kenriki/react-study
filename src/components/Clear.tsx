import React from 'react'
import { css } from '@emotion/css'


const hoge1 = css`
    clear: both;
`

const Clear: React.FC  = () => {
    return (
        <>
        <div className={hoge1}>{}</div>
        </>
    )
}

export default Clear