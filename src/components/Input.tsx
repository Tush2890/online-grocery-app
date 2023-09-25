import React from 'react';

interface Props {
    type: string;
    classNames: string;
    placeholder?: string;
    value: string | number | undefined;
}

export const Input = ({ type, classNames, placeholder, value }: Props) => (
    <input type={type} className={classNames} placeholder={placeholder} value={value} />
)