import React from 'react';

interface Props {
    id: string;
    type: string;
    classNames: string;
    placeholder?: string;
    value?: string | number | undefined;
    onchange?: (evt: any) => void
    onKeyUp?: (evt: any) => void
}

export const Input = ({ id, type, classNames, placeholder, value, onchange, onKeyUp }: Props) => (
    <input id={id} type={type} className={classNames} placeholder={placeholder}
        value={value} onChange={onchange} onKeyUp={onKeyUp} />
)