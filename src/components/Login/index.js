import {
  NxtwaveLogo,
  Inp,
  Label,
  InpLabelCon,
  Checkbox,
  LoginButt,
  FormEle,
  Container,
  ErrorPara,
} from './styledComponents'

import React, {useState} from 'react'

import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const [password, setPassword] = useState('')

  const [username, setUsername] = useState('')

  const [isShow, showPassword] = useState(false)

  const [err, setErrorMessage] = useState({isErr: false, errMsg: ''})

  const jwtToken = Cookie.get('jwt_token')

  const storeToken = token => {
    Cookie.set('jwt_token', token, {expires: 30})

    const {history} = props
    history.replace('/')
  }

  const loginApi = async () => {
    const userData = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    //console.log(data)

    if (response.ok) {
      storeToken(data.jwt_token)
    } else {
      setErrorMessage({isErr: true, errMsg: data.error_msg})
    }
  }

  const passwordFunc = event => {
    setPassword(event.target.value)
  }

  const usernameFunc = event => {
    setUsername(event.target.value)
  }

  const dispPasswordFunc = () => {
    showPassword(prevShow => !prevShow)
  }

  const submitFunc = event => {
    event.preventDefault()
    loginApi()
  }

  const {isErr, errMsg} = err

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <FormEle onSubmit={submitFunc}>
        <NxtwaveLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />

        <InpLabelCon>
          <Label htmlFor="username"> USERNAME </Label>
          <Inp
            type="text"
            placeholder="Username"
            id="username"
            className="form-control"
            value={username}
            onChange={usernameFunc}
          />
        </InpLabelCon>

        <InpLabelCon>
          <Label htmlFor="password"> PASSWORD </Label>
          <Inp
            type={isShow ? 'text' : 'password'}
            placeholder="Password"
            id="password"
            className="form-control"
            value={password}
            onChange={passwordFunc}
          />
        </InpLabelCon>

        <InpLabelCon checkdiv>
          <Checkbox type="checkbox" id="checkbox" onClick={dispPasswordFunc} />
          <Label htmlFor="checkbox" show>
            {' '}
            Show Password{' '}
          </Label>
        </InpLabelCon>

        <LoginButt type="submit"> Login </LoginButt>
        {isErr ? <ErrorPara> *{errMsg} </ErrorPara> : ''}
      </FormEle>
    </Container>
  )
}

export default Login
