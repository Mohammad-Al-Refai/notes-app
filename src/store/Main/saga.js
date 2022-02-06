import { call, takeLeading, put } from 'redux-saga/effects'
import { login, register } from '../../services/authApi'
import {
  addNewNote,
  deleteNote,
  getUserData,
  updateNote,
} from '../../services/mainApi'
import {
  ADD_NOTE,
  CREATE_USER,
  DELETE_NOTE,
  GET_USER,
  GET_USER_DATA,
  UPDATE_NOTE,
} from './actions'
import {
  createUserFall,
  createUserSuccess,
  loginFall,
  loginSuccess,
  getUserDataFall,
  getUserDataSuccess,
  callGetUserData,
  addNoteFall,
  updateNoteFall,
} from './actionTypes'

function* fetchLogin(action) {
  try {
    const response = yield call(
      login,
      action.payload.userName,
      action.payload.pin,
    )
  
    yield put(loginSuccess(response.result))
  } catch (error) {
    if (error.response) {
      yield put(loginFall(error.response.data.result))
    } else {
      yield put(loginFall(error.message))
    }
  }
}
function* fetchRegister(action) {
  try {
    const response = yield call(
      register,
      action.payload.userName,
      action.payload.pin,
    )

    yield put(createUserSuccess(response.result))
  } catch (error) {
    if (error.response) {
      yield put(createUserFall(error.response.data.result))
    } else {
      yield put(createUserFall(error.message))
    }
  }
}

function* fetchUserData() {
  try {
    const response = yield call(getUserData)
    yield put(getUserDataSuccess(response.result))
  } catch (error) {
    if (error.response) {
      yield put(getUserDataFall(error.response.data.result))
    } else {
      yield put(getUserDataFall(error.message))
    }
  }
}
function* fetchAddNote(action) {
  try {
    const response = yield call(
      addNewNote,
      action.payload.title,
      action.payload.description,
    )
  
    yield put(callGetUserData())
  } catch (error) {
    if (error.response) {
      yield put(addNoteFall(error.response.data.result))
    } else {
      yield put(addNoteFall(error.message))
    }
  }
}

function* fetchUpdateNote(action) {

  try {
    const response = yield call(
      updateNote,
      action.payload.uid,
      action.payload.id,
      action.payload.title,
      action.payload.description,
    )
 
    yield put(callGetUserData())
  } catch (error) {
    if (error.response) {
      yield put(updateNoteFall(error.response.data.result))
    } else {
      yield put(updateNoteFall(error.message))
    }
  }
}

function* fetchDeleteNote(action) {
 
  try {
    const response = yield call(deleteNote, action.payload.id)

    yield put(callGetUserData())
  } catch (error) {
    if (error.response) {
      yield put(updateNoteFall(error.response.data.result))
    } else {
      yield put(updateNoteFall(error.message))
    }
  }
}
export function* MainSaga() {
  yield takeLeading(GET_USER, fetchLogin)
  yield takeLeading(CREATE_USER, fetchRegister)
  yield takeLeading(GET_USER_DATA, fetchUserData)
  yield takeLeading(ADD_NOTE, fetchAddNote)
  yield takeLeading(UPDATE_NOTE, fetchUpdateNote)
  yield takeLeading(DELETE_NOTE, fetchDeleteNote)
}
