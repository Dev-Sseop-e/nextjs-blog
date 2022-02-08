export const SET_USER = 'SET_USER'

//action!!!
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});


//plain object
//dispatch(setUser({ssss....}))

const initialState = {
  user:null,
  hardship: "yes",
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:{
      return {
        ...state,
        user: action.payload,
      }
    }

    default:
      return state;
  }
};

export default user;