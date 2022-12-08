import React, { FC } from 'react';

export enum IconsTypes {
    Delete = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    Edit = 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
};

interface IconProps {
    icon: IconsTypes;
    size?: number;
    color?: string;
    className?: string;
    onClick?: VoidFunction;
};

export const Icon: FC<IconProps> = ({ icon, color='#000000', size=16, className='', onClick }) => (
    <i className={className} onClick={onClick}>
        <svg 
            viewBox='0 0 24 24'
            width={size + 'px'}
            height={size + 'px'}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'>
                <path fill={color} d={icon} />
        </svg>
    </i>
);