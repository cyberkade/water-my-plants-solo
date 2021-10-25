export const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
