import React from 'react'
import { css } from '@emotion/css'


export interface SampleProps {
    title: string;
}


const hoge1 = css`
    margin: 30px auto 0;
`

const subtitleStyle = css`
  box-sizing: border-box;
  width: 90px;
  height: 60px;
  background: rgb(100,230,150);
`

const Sample: React.FC<SampleProps>  = (props) => {
    return (
        <>
        <h2 className={hoge1}>{props.title}</h2>
        <div className={subtitleStyle}>
            <h3>見出し</h3>
        </div>
        </>
    )
}

export default Sample