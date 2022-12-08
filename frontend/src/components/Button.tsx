import React, { FC } from 'react';
import { VoidExpression } from 'typescript';

interface ButtonProps {
    name: string;
    className?: string;
    onClick: VoidFunction;
}

export const Button: FC<ButtonProps> = ({ name, className='', onClick }) => (
    <button className={className} onClick={onClick}>
       {name}
    </button>
);
