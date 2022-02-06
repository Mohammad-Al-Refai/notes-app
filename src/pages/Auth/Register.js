import { useState } from 'react'
import { AuthContainer } from '../../components/AuthContainer'
import { CustomButton } from '../../components/Button'
import { UserNameField, PINField, ErrorMessage } from '../../components/Fields'
import { useHistory } from 'react-router'

import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { callCreateUser, clearError } from '../../store/Main/actionTypes'

function Register(props) {
  const [isUserNameValid, setIsUserNameValid] = useState(null)
  const [isPINValid, setIsPINValid] = useState(null)
  const [userName, setUserName] = useState('')
  const [pin, setPIN] = useState('')
  const handleOnSubmit = () => {
    if (isUserNameValid && isPINValid) {
      props.callCreateUser({ userName, pin })
    }
  }
  const { error, isValidUser } = props
  const history = useHistory()
  if (isValidUser) {
    history.push('/main')
  }
  return (
    <AuthContainer>
      <div className="auth-box">
        <p className="large m-5">Register</p>
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
        <div className="m-4">
          <CustomButton title="Submit" onClick={handleOnSubmit} />
        </div>
        <p
          className="clickable-text"
          onClick={() => {
            props.clearError()
            history.push('/login')
          }}
        >
          I have already account
        </p>
      </div>
    </AuthContainer>
  )
}
let mapStateToProps = (state) => {
  console.log(state)
  return {
    error: state.MainReducer.errorMessage,
    isValidUser: state.MainReducer.isValidUser,
  }
}

export default connect(mapStateToProps, { callCreateUser, clearError })(
  Register,
)
