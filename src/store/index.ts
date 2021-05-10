import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {UserState} from './user/types';
import {userReducer} from './user/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

export interface StoreStateType {
  user: UserState;
}

export type AppState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function () {
  const store = createStore(persistedReducer);
  console.log(store.getState());
  //@ts-ignore
  const persistor = persistStore(store);
  return {store, persistor};
}
