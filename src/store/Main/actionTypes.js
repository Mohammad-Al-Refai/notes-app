import {
  CREATE_USER,
  CREATE_USER_FALL,
  CREATE_USER_SUCCESS,
  GET_USER,
  GET_USER_FALL,
  GET_USER_SUCCESS,
  ADD_NOTE,
  ADD_NOTE_FALL,
  GET_USER_DATA,
  GET_USER_DATA_FALL,
  GET_USER_DATA_SUCCESS,
  UPDATE_NOTE,
  UPDATE_NOTE_FALL,
  DELETE_NOTE,
  DELETE_NOTE_FALL,
  CLEAR_ERRORS,
} from './actions'

//Login
export const callLogin = (payload) => {
  return {
    type: GET_USER,
    payload,
  }
}

export const loginSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  }
}
export const loginFall = (message) => {
  return {
    type: GET_USER_FALL,
    payload: message,
  }
}
//Register
export const callCreateUser = (payload) => {
  return {
    type: CREATE_USER,
    payload: payload,
  }
}
export const createUserSuccess = (payload) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  }
}
export const createUserFall = (message) => {
  return {
    type: CREATE_USER_FALL,
    payload: message,
  }
}

export const callGetUserData = () => {
  return {
    type: GET_USER_DATA,
  }
}

export const getUserDataSuccess = (data) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: data,
  }
}

export const getUserDataFall = (error) => {
  return {
    type: GET_USER_DATA_FALL,
    payload: error,
  }
}

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload,
  }
}
export const addNoteFall = (error) => {
  return {
    type: ADD_NOTE_FALL,
    payload: error,
  }
}

export const updateNote = (payload) => {
  return {
    type: UPDATE_NOTE,
    payload,
  }
}
export const updateNoteFall = (error) => {
  return {
    type: UPDATE_NOTE_FALL,
    payload: error,
  }
}

export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE,
    payload,
  }
}
export const deleteNoteFall = (error) => {
  return {
    type: DELETE_NOTE_FALL,
    payload: error,
  }
}
export const clearError = () => {
  return {
    type: CLEAR_ERRORS,
 
  }
}
