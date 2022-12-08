import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from '../features/todoItems/itemsSlice';
import listsReducer from '../features/todoLists/todoListsSlice';

export const store = configureStore({
  reducer: {
    todoLists: listsReducer,
    todoItems: itemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
