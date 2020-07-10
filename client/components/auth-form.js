import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
// import {Button} from 'material-ui'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'login' ? (
          ''
        ) : (
          <div>
            <div>
              <label htmlFor="text-field-hero-input">First Name </label>
              <input
                className="mdc-text-field__input"
                name="first"
                type="text"
              />
              <div className="mdc-line-ripple" />
            </div>
            <div>
              <label htmlFor="text-field-hero-input">Last Name</label>
              <input
                className="mdc-text-field__input"
                name="last"
                type="text"
              />
              <div className="mdc-line-ripple" />
            </div>
          </div>
        )}
        <div>
          <label htmlFor="text-field-hero-input">Email</label>
          <input className="mdc-text-field__input" name="email" type="text" />
          <div className="mdc-line-ripple" />
        </div>
        <div>
          <label htmlFor="text-field-hero-input">Password</label>
          <input
            className="mdc-text-field__input"
            name="password"
            type="password"
          />
          <div className="mdc-line-ripple" />
        </div>
        <button type="submit" className="mdc-button foo-button">
          <div
            style={{
              paddingTop: '15pt',
              marginTop: '0pt',
              width: '70pt',
              paddingBottom: '0pt'
            }}
            className="mdc-button__ripple"
          >
            {displayName}
          </div>
          <span className="mdc-button__label" />
        </button>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a className="mdc-button foo-button" href="/auth/google">
        <div className="mdc-button__ripple" />
        {displayName} with Google
      </a>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      if (formName === 'login') {
        dispatch(auth(email, password, formName))
      } else {
        const first = evt.target.first.value
        const last = evt.target.last.value
        dispatch(auth(email, password, formName, first, last))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
