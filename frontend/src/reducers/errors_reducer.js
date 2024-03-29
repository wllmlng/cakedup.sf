import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import OrderErrorsReducer from './order_errors_reducer';


export default combineReducers ({
     session: SessionErrorsReducer,
     order: OrderErrorsReducer
});