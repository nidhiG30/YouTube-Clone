import { combineReducers, configureStore } from '@redux/toolkit';
import userReducer from '../slices/userSlices';

const reducer = combineReducers({
  userInfo: userReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    getDefaultMiddleware({ serializableCheck: false });
  },
});
