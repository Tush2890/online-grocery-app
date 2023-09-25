import React from 'react';

interface Props {
    classNames: string;
    options: string[];
}

export const Dropdown = ({ classNames, options }: Props) => (
    <select className={classNames}>
        {options.map(option => <option>{option}</option>)}
    </select>
)