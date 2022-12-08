import React, { FC } from 'react';

interface IconProps {
    label: string;
    checked: boolean;
    className?: string;
    onChange: VoidFunction;
}

export const Checkbox: FC<IconProps> = ({ label, checked, className='', onChange }) => (
    <label className={className}>
        <input type='checkbox' checked={checked} onChange={onChange} />
        {label}
    </label>
);
