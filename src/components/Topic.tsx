import { ReactNode } from 'react';

type propsType = {
    children: ReactNode;
}

export function Topic({ children }: propsType) {
    return (
        <span className='px-3 py-1 mx-1'>
            {children}
        </span>
    );
}
