import axios from "axios";
export const SET_HOME = 'SET_HOME';
export const SET_USER = 'SET_USER';
export const SET_USER_AUTO = 'SET_USER_AUTO';
export const SET_USER_PLAN = 'SET_USER_PLAN';
export const SET_KEY_TAB = 'SET_KEY_TAB';
export const getCotizar = (info) => {
  return async dispatch => {
    console.log('cotizandoi')
    await axios
      .get("https://randomuser.me/api/",)
      .then(result => {
        console.log(result.data.results[0])
        let data = result.data.results[0];
        dispatch({
          type: SET_USER,
          payload: data
        })
        dispatch({
          type: SET_HOME,
          payload: info
        })

      })
      .catch(err => console.log(err))
  }
}

