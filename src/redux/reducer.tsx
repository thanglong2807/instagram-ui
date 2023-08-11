const initState = {
  checkLogin: {
    loggedIn: false,
  },
  dataLogin: [],
};
const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "admin/checkLogin":
      const login = action.data;

      return {
        ...state,
        checkLogin: { loggedIn: login },
      };

    case "admin/dataLogin":
      const datalogin = action.data;

      return {
        ...state,
        dataLogin: datalogin,
      };
    default:
      return state;
  }
};
export default rootReducer;
