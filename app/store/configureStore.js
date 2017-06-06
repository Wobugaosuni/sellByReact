import { createStore } from 'redux';
import RootReducer from '../reducers';

export default function configureStore (initialState) {
  const store = createStore(
    RootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined  // 触发 redux-devtools
  );

  return store;
}
