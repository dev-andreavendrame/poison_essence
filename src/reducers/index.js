import {combineReducers} from "redux";

//import Reducer
import searchReducer from './searchReducer';

export default combineReducers({
    //used in the useSelector
    appRedux: searchReducer
});