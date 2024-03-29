import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Footer from './components/Footer'
import Header from './components/Header'
import Blog from './majorComponents/Blog'
import Community from './majorComponents/Community'
import Docs from './majorComponents/Docs'
import Error from './majorComponents/Error'
import Home from './majorComponents/Home'
import Tutorial from './majorComponents/Tutorial'
import useForceUpdate from 'use-force-update'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { Wrapper } from './styles/LoginWrapper'
import { GlobalStyle } from './styles/GlobalStyle'
import { Button } from './styles/Button'
import Validation from './components/Validation'
import { useEffect } from 'react'

const App = () => {

  const forceUpdate = useForceUpdate()

  const [showPopup, setShowPopup] = useState(false)
  const [registeredUser, setRegisteredUser] = useState(true)

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [displayType, setDisplayType] = useState(true)

  const [localAuth, setLocalAuth] = useState(false)

  useEffect(() => {
    localStorage.setItem('data', "")
  }, [])

  const handleClick = () => {
    setShowPopup(true)
  }

  const cancelPopup = () => {
    setUsername('')
    setPassword('')
    setDisplayType(true)
    setValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
    setShowPopup(false)
    setRegisteredUser(true)
  }

  const bringSignup = () => {
    setUsername('')
    setPassword('')
    setDisplayType(true)
    setRegisteredUser(false)
  }

  const bringLogin = () => {
    setValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
    setDisplayType(true)
    setRegisteredUser(true)
  }

  const handleDisplayType = (event) => {
    event.preventDefault()
    setDisplayType(!displayType)
  }

  const handleSignup = (event) => {
    event.preventDefault()
    setErrors(Validation(values))
  }

  useEffect(() => {
    fetch("http://localhost:3000/users").then(result => {
      setLocalAuth(false)
    })
      .catch(error => {
        setLocalAuth(true)
      })
  }, [username, values])

  useEffect(() => {
    if (JSON.stringify(errors.usernames && errors.emails && errors.passwords && errors.confirm) === '"No"') {
      if (localAuth === false) {
        let data = JSON.stringify(values)
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: data
        }),
          alert('SIGNUP Successful.')
        setValues({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        setShowPopup(false)
        setDisplayType(true)
        setRegisteredUser(true)
      } else if (localAuth === true) {
        localStorage.setItem('data', JSON.stringify(values))
        alert('SIGNUP successful. You can LOGIN now using registered credentials.')
        setValues({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        setShowPopup(false)
        setDisplayType(true)
        setRegisteredUser(true)
      } else { }
    }
  }, [errors])

  const handleLogin = () => {

    if (localAuth === false) {
      if (username.length == 0) {
        alert('Username cannot be empty')
        setUsername('')
        setPassword('')
        setDisplayType(true)
      } else if (password.length == 0) {
        alert('Password cannot be empty')
        setUsername('')
        setPassword('')
        setDisplayType(true)
      } else {
        fetch("http://localhost:3000/users").then((result) => {
          result.json().then((resp) => {
            const auth = resp.filter(d => d.username === username)
            if (auth.length == 0) {
              alert('Invalid Credentials')
              setUsername('')
              setPassword('')
              setDisplayType(true)
            } else {
              if (auth[0].password === password) {
                localStorage.setItem('loggedin', username)
                setUsername('')
                setPassword('')
                setDisplayType(true)
                setShowPopup(false)
              } else {
                alert('Invalid Credentials')
                setUsername('')
                setPassword('')
                setDisplayType(true)
              }
            }
          })
        })
      }
    } else if (localAuth === true) {
      if (localStorage.getItem('data') === "") {
        alert("Kindly register to continue")
        setUsername('')
        setPassword('')
        setDisplayType(true)
        setRegisteredUser(false)
      } else if (username.length == 0) {
        alert('Username cannot be empty')
        setUsername('')
        setPassword('')
        setDisplayType(true)
      } else {
        const auth = JSON.parse(localStorage.getItem('data'))
        //  console.log(auth)
        if (auth.username === username) {
          if (auth.password === password) {
            localStorage.setItem('loggedin', username)
            setUsername('')
            setPassword('')
            setDisplayType(true)
            setShowPopup(false)
          } else {
            alert('Incorrect Password!')
            setUsername('')
            setPassword('')
            setDisplayType(true)
          }
        } else {
          alert('No User Found!')
          setUsername('')
          setPassword('')
          setDisplayType(true)
        }
      }
    } else { }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedin')
  }

  var user = localStorage.getItem('loggedin')
  if (user === null || user === '') {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <div className='content'>
            <h2>Public Home Page</h2><br />
            <h4>This is a public page</h4>
            <p>Kindly login to view more content</p>
            <Button onClick={handleClick}>LOGIN</Button>
          </div>
          {showPopup ?
            <div className='popup'>
              <div className='popup-inner'>
                <Button onClick={cancelPopup}>X</Button>
                {registeredUser ?
                  <div>
                    <h2 className='common-heading'>LOGIN</h2>
                    <hr />
                    <div className='container'>
                      <div className='login-form'>
                        <div className='login-inputs'>
                          <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required /> <br />

                          <input type={displayType ? 'password' : 'text'} placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required /><br />

                          <Button onClick={() => { setDisplayType(!displayType) }}>{displayType ? 'Show password' : 'Hide password'}</Button>
                          <Button onClick={() => { handleLogin(); forceUpdate() }}>LOGIN</Button>
                          <p>New Here?</p>
                          <Button onClick={bringSignup}>REGISTER NOW</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div>
                    <h2 className='common-heading'>SIGNUP</h2>
                    <hr />
                    <div className='container'>
                      <div className='login-form'>
                        <div className='login-inputs'>
                          <form>
                            <input type='text' placeholder='Username' name='username' value={values.username} onChange={e => setValues({ ...values, [e.target.name]: e.target.value })} /><br />
                            {errors.username && <span>{errors.username}</span>}<br />
                            <input type='email' placeholder='Email' name='email' value={values.email} onChange={e => setValues({ ...values, [e.target.name]: e.target.value })} /><br />
                            {errors.email && <span>{errors.email}</span>}<br />
                            <input type='password' placeholder='Password' name='password' value={values.password} onChange={e => setValues({ ...values, [e.target.name]: e.target.value })} /><br />
                            {errors.password && <span>{errors.password}</span>}<br />
                            <input type={displayType ? 'password' : 'text'} placeholder='Confirm Password' name='confirmPassword' value={values.confirmPassword} onChange={e => setValues({ ...values, [e.target.name]: e.target.value })} /><br />
                            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}<br />
                            <Button onClick={handleDisplayType}>{displayType ? 'Show password' : 'Hide password'}</Button>
                            <Button onClick={handleSignup}>SIGNUP</Button>
                          </form>
                          <p>Already have an Account?</p>
                          <Button onClick={bringLogin}>GO TO LOGIN</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
            :
            ''}
        </Wrapper>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <div>
            <Header />
            <div className='welcome'>
              <a>Welcome {localStorage.getItem('loggedin')}</a>
              <Button onClick={() => { handleLogout(); forceUpdate() }}>LOGOUT</Button>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/community' element={<Community />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/*' element={<Error />} />
            <Route path='/tutorial' element={<Tutorial />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App