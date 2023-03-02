import { GET_EMP_REQUEST , GET_EMP_SUCCESS , GET_EMP_FAILURE ,
        ADD_EMP_REQUEST,ADD_EMP_SUCCESS,ADD_EMP_FAILURE, 
        DELETE_EMP_REQUEST, DELETE_EMP_SUCCESS, DELETE_EMP_FAILURE, 
        UPDATE_EMP_REQUEST, UPDATE_EMP_SUCCESS, UPDATE_EMP_FAILURE, GET_ID_REQUEST, GET_ID_SUCCESS, GET_ID_FAILURE, GET_API_REQUEST, GET_API_FAILURE, GET_API_SUCCESS
       } from "./typeaction";

import serivce from '../services/service'

export const getEmp = () => {
  return async (dispatch) => {
    dispatch({ type: GET_EMP_REQUEST });
    try {
      const data = await serivce.get();
      dispatch({ type: GET_EMP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_EMP_FAILURE, error: error.message });
    }
  };
};
export const getApi = () => {
  return async (dispatch) => {
    dispatch({ type: GET_API_REQUEST });
    try {
      const data = await serivce.api();
      dispatch({ type: GET_API_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_API_FAILURE, error: error.message });
    }
  };
};
export const getId = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_ID_REQUEST });

    try {
    const data =   await serivce.getid(id);
      dispatch({ type: GET_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ID_FAILURE, error: error.message });
    }
  };
};

export const addEmp = (emp) => {
  return async (dispatch) => {
    dispatch({ type: ADD_EMP_REQUEST });

    try {
      const data = await serivce.add(emp);
      dispatch({ type: ADD_EMP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_EMP_FAILURE, error: error.message });
    }
  };
};



export const dellEmp = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EMP_REQUEST });

    try {
      await serivce.dell(id);
      dispatch({ type: DELETE_EMP_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_EMP_FAILURE, error: error.message });
    }
  };
};

export const updEmp = (id, emp) => {
  console.log(id)
  console.log(emp)
  return async (dispatch) => {
    dispatch({ type: UPDATE_EMP_REQUEST });

    try {
      const updateemp = await serivce.update(id, emp);
      dispatch({ type: UPDATE_EMP_SUCCESS, payload: updateemp });
    } catch (error) {
      dispatch({ type: UPDATE_EMP_FAILURE, error: error.message });
    }
  };
};

