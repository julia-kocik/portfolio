import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getProjectsReducer,
  getProjectDetailsReducer,
} from './reducers/projectReducers';


// Reducers
const reducer = combineReducers({
  projects: getProjectsReducer,
  project: getProjectDetailsReducer,
});

const middleware = [thunk];

const INITIAL_STATE = [];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
