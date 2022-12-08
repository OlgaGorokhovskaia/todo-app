import React, { FC } from 'react';

interface InputProps {
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({ value, placeholder='', className='', onChange }) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: newValue }  = e.target;
        
        if (value === newValue) return;
        
        onChange(newValue);
    };

    return (
        <input 
            className={className} 
            value={value}
            placeholder={placeholder} 
            onChange={onChangeHandler} 
        />
    );
}
