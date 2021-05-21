import axios from "axios";
export const SET_HOME = 'SET_HOME';
export const SET_USER = 'SET_USER';
export const SET_USER_AUTO = 'SET_USER_AUTO';
export const SET_USER_PLAN = 'SET_USER_PLAN';
export const SET_KEY_TAB = 'SET_KEY_TAB';
export const SET_LOADING = 'SET_LOADING';
export const getCotizar = (info) => {

  return async dispatch => {
    dispatch({
      type: SET_LOADING,
      payload: true
    })
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
        dispatch({
          type: SET_LOADING,
          payload: false
        })

      })
      .catch(err => console.log(err))
  }
}

