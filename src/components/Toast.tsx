import React, { ReactNode } from "react";

type Props = {
    children: ReactNode,
    className: string
}

export const Toast = ({ children, className }: Props) => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3">
            <div className={`toast mx-auto ${className}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body d-flex">
                    {children}
                </div>
            </div>
        </div>
    )
}