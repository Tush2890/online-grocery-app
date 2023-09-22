import React, { MouseEventHandler } from 'react';

interface Props {
    btnClassnames: string,
    btnDisabled?: boolean,
    btnOnClick: MouseEventHandler,
    btnText: string
}

export const Button = ({ btnClassnames, btnDisabled = false, btnOnClick, btnText }: Props) => (
    <button
        className={`btn ${btnClassnames}`}
        disabled={btnDisabled}
        onClick={btnOnClick}>
        {btnText}
    </button>
)