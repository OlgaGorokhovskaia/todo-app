import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchItems } from './itemsApi';

export interface Item {
    id: string;
    value: string;
    completed: boolean;
}

export interface ItemsState {
  name: string,
  items: Item[];
}

const initialState: ItemsState = {
  name: '',
  items: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItems: (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
    },
  },
});

export const { updateItems } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.todoItems.items;

export const addItem =
  (value: string): AppThunk =>
  (dispatch, getState) => {
    const items = selectItems(getState());
    const newItem = {value, id: value, completed: false}
    dispatch(updateItems([...items, newItem]));
  };

export const toggleCompletedItem =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    const items = selectItems(getState());
    const newItems = items.map(item => item.id === id ? {...item, completed: !item.completed} : item);
    dispatch(updateItems(newItems));
  };

export const deleteItem =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    const items = selectItems(getState());
    const newItems = items.filter(item => item.id !== id);
    dispatch(updateItems(newItems));
  };

export default itemsSlice.reducer;
