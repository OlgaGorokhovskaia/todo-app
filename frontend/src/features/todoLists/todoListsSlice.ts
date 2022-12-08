import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { addList, deleteList } from './todoListsApi';

export interface TodoList {
    id: string;
    name: string;
}

export interface TodoListsState {
    lists: TodoList[];
}

const initialState: TodoListsState = {
    lists: [],
};


export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    getTodoLists: (state, action: PayloadAction<TodoList[]>) => {
        state.lists = action.payload;
    },
    addTodoList: (state, action: PayloadAction<TodoList>) => {
        state.lists.push(action.payload);
    },
    updateItems: (state, action: PayloadAction<TodoList[]>) => {
        state.lists = action.payload;
    },
  },
});

export const { updateItems, addTodoList } = listSlice.actions;

export const selectTodoLists = (state: RootState) => state.todoLists.lists;

export const addNewTodoList =
  (name: string): AppThunk =>
  async (dispatch, getState) => {
    const data = await addList(name);

    dispatch(addTodoList(data));
  };


export const deleteTodoList =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    const lists = selectTodoLists(getState());
    const data = await deleteList(id);
    const newTodoLists= lists.filter(list => list.id !== id);
    dispatch(updateItems(newTodoLists));
  };

export default listSlice.reducer;
