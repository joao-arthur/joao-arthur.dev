import classNames from 'classnames';
import { ReactNode } from 'react';

type props = {
    readonly children: ReactNode;
    readonly className?: string;
}

export function H1({ children, className }: props) {
    return (
        <h1
            className={classNames('text-2xl pt-4 pb-2', className)}
        >
            {children}
        </h1>
    );
}
