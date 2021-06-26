import React from 'react'

const SignInAndSignUpPage = props => (
  <div>
    <h2>SignInAndSignUpPage</h2>
    <p>{`history: ${JSON.stringify(props.history, null, '\t')}`}</p>
    <p>{`location: ${JSON.stringify(props.location, null, '\t')}`}</p>
    <p>{`match: ${JSON.stringify(props.match, null, '\t')}`}</p>
  </div>
)

export default SignInAndSignUpPage