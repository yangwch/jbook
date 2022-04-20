import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { ActionType } from "./action-types";
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSER_CELL_BEFORE,
  payload: {
    id: 'null',
    type: 'code',
  }
})

console.log(store.getState());