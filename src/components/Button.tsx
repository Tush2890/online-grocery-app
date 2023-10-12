import { ReactNode } from 'react';

type Props = {
    btnClassnames: string,
    btnDisabled?: boolean,
    btnOnClick?: () => void,
    children: ReactNode
}

export const Button = ({ btnClassnames, btnDisabled = false, btnOnClick, children }: Props) => {
    return <button
        className={`btn ${btnClassnames}`}
        disabled={btnDisabled}
        onClick={btnOnClick}>
        {children}
    </button>
}