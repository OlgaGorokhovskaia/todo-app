import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Button } from '../../components/Button';
import styles from './TodoList.module.css';
import { selectTodoLists } from './todoListsSlice';


export const TodoLists: FC = () => {
  const todoLists = useAppSelector(selectTodoLists);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandle = (value: string) => {
    setInputValue(value);
  };


  const selectTodoList = (id: string) => {

  }

  const addNewTodoList = () => {
    
  }


  return (
    <>
      <h1 className='title'>Todo Lists</h1>
      <ul className='list'>
        {todoLists.map(({ name, id }) => (
          <div onClick={() => selectTodoList(id)}>
              {name}
          </div>
        ))}
      </ul>
      <Button className={styles.button} name='Add new list' onClick={addNewTodoList}/>
    </>
  );
}
