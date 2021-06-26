import React from 'react'

const Posts = props => (
  <div>
    <h2>Posts</h2>
    <p>{`history: ${JSON.stringify(props.history, null, '\t')}`}</p>
    <p>{`location: ${JSON.stringify(props.location, null, '\t')}`}</p>
    <p>{`match: ${JSON.stringify(props.match, null, '\t')}`}</p>
    <hr/>
    <button onClick={() => props.history.push(`${props.match.url}/1`)}>1</button>
    <button onClick={() => props.history.push(`${props.match.url}/2`)}>2</button>
  </div>
)

export default Posts