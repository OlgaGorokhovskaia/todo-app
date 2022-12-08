import React, { FC, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Icon, IconsTypes } from '../../components/Icon';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectItems, addItem, toggleCompletedItem, deleteItem, Item } from './itemsSlice';
import styles from './Items.module.css';


export const TodoItems: FC = () => {
  const items = useAppSelector<Item[]>(selectItems);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandle = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map(({id, value, completed}) => (
            <li key={id}>
              <Checkbox 
                className={styles.checkbox}
                label={value}
                checked={completed}
                onChange={() => dispatch(toggleCompletedItem(id))}
              />
              <Icon 
                className={styles.icon}
                icon={IconsTypes.Delete}
                onClick={() => dispatch(deleteItem(id))} 
              /> 
            </li>
          ))}
      </ul>
      <div className={styles.controls}>
        <Input 
          className={styles.input}
          placeholder='Input new item'
          value={inputValue}
          onChange={onChangeHandle}
        />
        <Button 
          className={styles.button}
          name='Add new item'
          onClick={() => dispatch(addItem(inputValue))}
        />
      </div>
    </div>
  );
}
