import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AuthContainer } from '../../components/AuthContainer'
import { CustomButton } from '../../components/Button'
import { UserNameField, PINField, ErrorMessage } from '../../components/Fields'
import { callLogin, clearError } from '../../store/Main/actionTypes'

function Login(props) {
  const [isUserNameValid, setIsUserNameValid] = useState(null)
  const [isPINValid, setIsPINValid] = useState(null)
  const [userName, setUserName] = useState('')
  const [pin, setPIN] = useState('')
  let history = useHistory()
  const { error, isValidUser } = props
  const handleOnSubmit = () => {
    if (isUserNameValid && isPINValid) {
      props.callLogin({ userName, pin })
    }
  }
  useEffect(() => {
    if (isValidUser) {
      history.push('/main')
    }
  })

  return (
    <AuthContainer>
      <div className="auth-box">
        <p className="large m-5">Login</p>
        {error.length !== 0 ? <Alert variant="danger">{error}</Alert> : null}
        <UserNameField
          placeholder="User Name"
          isValid={(v) => {
            setIsUserNameValid(v)
          }}
          onChange={(value) => {
            setUserName(value)
          }}
        />
        <ErrorMessage message="User Name is invalid" isShow={isUserNameValid} />
        <PINField
          placeholder="PIN"
          isValid={(v) => {
            setIsPINValid(v)
          }}
          onChange={(value) => {
            setPIN(value)
          }}
        />
        <ErrorMessage message="PIN is invalid" isShow={isPINValid} />
        <div className="m-5">
          <CustomButton title="Submit" onClick={handleOnSubmit} />
        </div>
        <p
          className="clickable-text"
          onClick={() => {
            props.clearError()
            history.push('/register')
          }}
        >
          Create new account
        </p>
      </div>
    </AuthContainer>
  )
}

let mapStateToProps = (state) => {
  return {
    error: state.MainReducer.errorMessage,
    isValidUser: state.MainReducer.isValidUser,
  }
}

export default connect(mapStateToProps, { callLogin, clearError })(Login)
