import React from 'react';

interface Props {
    classNames: string;
    options: string[];
    value: string;
    onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Dropdown = ({ classNames, options, value, onChange }: Props) => (
    <select className={classNames} value={value} onChange={onChange}>
        {options.map(option => <option value={option}>{option}</option>)}
    </select>
)