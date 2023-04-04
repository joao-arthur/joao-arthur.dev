import { ReactNode } from 'react';

type props = {
    readonly children: ReactNode;
}

export function Topic({ children }: props) {
    return (
        <span className='px-3 py-1 mx-1 inline-block'>
            {children}
        </span>
    );
}
