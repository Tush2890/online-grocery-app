import React from 'react';

interface Props {
    classNames: string;
    options: Array<{ id: string, name: string }>;
    value: string;
    onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Dropdown = ({ classNames, options, value, onChange }: Props) => (
    <select className={classNames} value={value} onChange={onChange}>
        {options.map(option => (
            <option key={option.id} value={option.name}>
                {option.name}
            </option>
        ))}
    </select>
)