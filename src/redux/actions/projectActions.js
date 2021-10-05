import * as actionTypes from '../constants/projectConstants';
import axios from 'axios';
import { API_URL } from '../../config';


export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROJECTS_REQUEST });

    const { data } = await axios.get(`${API_URL}/projects`);

    dispatch({
      type: actionTypes.GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`${API_URL}/projects/${id}`);

    dispatch({
      type: actionTypes.GET_PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};