import {
  CLEAR_ERRORS,
  CREATE_USER_FALL,
  CREATE_USER_SUCCESS,
  GET_USER_DATA_FALL,
  GET_USER_DATA_SUCCESS,
  GET_USER_FALL,
  GET_USER_SUCCESS,
} from './actions'

let INIT_STATE = {
  token: '', //user access token
  isValidUser: false,
  userName: '',
  errorMessage: '', // will be the error from auth api
  uid: '',// user id
  notes: [],// notes
  errors: { // will be the errors of note operations (add,edit,delete)
    addNote: '',
    updateNote: '',
    getNotes: '',
    getUserData: '',
  },
}

export function MainReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      localStorage.setItem('user', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        isValidUser: true,
        errorMessage: '',
      }

    case GET_USER_FALL:
      localStorage.removeItem('user')

      return {
        ...state,
        token: '',
        userName: '',
        isValidUser: false,
        errorMessage: action.payload,
      }

    case CREATE_USER_SUCCESS:
      localStorage.setItem('user', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        isValidUser: true,
        errorMessage: '',
      }

    case CREATE_USER_FALL:
      localStorage.removeItem('user')

      return {
        ...state,
        token: '',
        userName: '',
        isValidUser: false,
        errorMessage: action.payload,
      }
    case GET_USER_DATA_SUCCESS:
      state.errors.addNote = ''
      state.errors.updateNote = ''
      state.errors.getNotes = ''
      return {
        ...state,
        notes: action.payload.notes,
        uid: action.payload.id,
        userName: action.payload.userName,
        token: localStorage.getItem('user'),
        isValidUser: true,
      }

    case GET_USER_DATA_FALL:
      state.errors.getUserData = action.payload

      return {
        ...state,
        errors: state.errors,
      }
      case CLEAR_ERRORS:
     
        return {
          ...state,
          errorMessage:"",
        }
    default:
      return state
  }
}
