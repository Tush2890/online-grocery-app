import React from 'react';

interface Props {
    type: string;
    classNames: string;
    placeholder?: string;
    value?: string | number | undefined;
    onchange?: (evt: any) => void
    onKeyUp?: (evt: any) => void
}

export const Input = ({ type, classNames, placeholder, value, onchange, onKeyUp }: Props) => (
    <input type={type} className={classNames} placeholder={placeholder}
        value={value} onChange={onchange} onKeyUp={onKeyUp} />
)