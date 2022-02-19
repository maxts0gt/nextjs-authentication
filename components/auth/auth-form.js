import { useState, useRef } from 'react'
import classes from './auth-form.module.css'

// user creating helper function
async function createUser(email, password) {
  // basically send post request and get the response
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // put that response inside the data
  const data = await response.json()

  // check if response is not success
  if (!response.ok) {
    // then throw new error
    throw new Error(data.message || 'Something went wrong!')
  }

  // and return the data
  return data
}

// function starts from here
function AuthForm() {
  // adding useRef hooks for email and pasword
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  // create function for handling submit event
  async function submitHandler(event) {
    event.preventDefault()
    // grab the current values
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    // optional: Add validation
    // if it is login function
    if (isLogin) {
      // log user in
      // if not login function then signup
    } else {
      // create validation for incorrect inputs
      try {
        const result = await createUser(enteredEmail, enteredPassword)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
