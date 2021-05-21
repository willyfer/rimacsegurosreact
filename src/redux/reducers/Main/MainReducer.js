import {
  SET_USER,
  SET_USER_AUTO,
  SET_USER_PLAN,
  SET_KEY_TAB,
  SET_HOME
} from '../../actions/Main/MainActions'
const initialState = {
  user: [],
  auto: [{ 'marca': '', 'age': '', 'radio': '' }],
  plan: [{ 'monto': 20 }],
  home: [],
  keytabdafault: 'first'
}

const mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME:

      return { ...state, home: [action.payload] }

    case SET_USER:

      return { ...state, user: [action.payload] }
    case SET_USER_AUTO:

      return { ...state, auto: [action.payload] }
    case SET_USER_PLAN:

      return { ...state, plan: [{ monto: action.payload }] }
    case SET_KEY_TAB:

      return { ...state, keytabdafault: action.payload }

    default:
      return state
  }
}

export default mainreducer
