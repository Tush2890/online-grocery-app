import React from 'react';

interface Props {
    type: string;
    classNames: string;
    placeholder?: string;
    value: string | number | undefined;
    onchange: () => void
}

export const Input = ({ type, classNames, placeholder, value, onchange }: Props) => (
    <input type={type} className={classNames} placeholder={placeholder} value={value} onChange={onchange}/>
)