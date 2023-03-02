import {GET_ID_FAILURE, GET_ID_REQUEST, GET_ID_SUCCESS} from "../action/typeaction"
const initialState = {
    employe: null,
    loading: true,
    error: null,
  };
  
   const ReducerEmp = (state = initialState, action) => {
    switch (action.type) {
      case GET_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          employe: action.payload,
          error: null,
        };
      case GET_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default ReducerEmp;