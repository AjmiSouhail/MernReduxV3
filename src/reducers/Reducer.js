import  {   GET_EMP_REQUEST,GET_EMP_SUCCESS,GET_EMP_FAILURE, 
    ADD_EMP_FAILURE, ADD_EMP_REQUEST, ADD_EMP_SUCCESS, 
    DELETE_EMP_SUCCESS, DELETE_EMP_FAILURE, DELETE_EMP_REQUEST, 
    UPDATE_EMP_FAILURE, UPDATE_EMP_REQUEST, UPDATE_EMP_SUCCESS, GET_API_FAILURE, GET_API_REQUEST, GET_API_SUCCESS,
    
    }from "../action/typeaction";

const initialState = {
    employes: [],
    loading: false,
    error: null,
  };
const Reducer = (state=initialState,action) =>{
    switch (action.type ){
        case GET_EMP_REQUEST:
        case UPDATE_EMP_REQUEST:
        case GET_API_REQUEST:
        case DELETE_EMP_REQUEST:
        case ADD_EMP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
              };
        case GET_EMP_SUCCESS:
      return {
        ...state,
        employes: action.payload,
        loading: false,
        error: null,
      };
      case GET_API_SUCCESS:
      return {
        ...state,
        employes: action.payload,
        loading: false,
        error: null,
      };

      case ADD_EMP_SUCCESS:
      return {
        ...state,
        employes: [...state.employes, action.payload],
        loading: false,
        error: null,
      };
      case DELETE_EMP_SUCCESS:
      const filteremp = state.employes.filter((emp) => emp._id !== action.payload);
      return {
        ...state,
        employes: filteremp,
        loading: false,
        error: null,
      };
      case UPDATE_EMP_SUCCESS:
      const updateemp = state.employes.map((emp) =>
        emp._id === action.payload._id ? action.payload : emp
      );
      return {
        ...state,
        employes: updateemp,
        loading: false,
        error: null,
      };

      case UPDATE_EMP_FAILURE:
      case GET_API_FAILURE:
      case DELETE_EMP_FAILURE:
      case ADD_EMP_FAILURE:
      case GET_EMP_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error,
          };

        default : return state;
    }
}
export default Reducer ;