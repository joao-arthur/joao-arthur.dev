import { ReactNode } from 'react';

type propsType = {
    readonly children: ReactNode;
}

export function Topic({ children }: propsType) {
    return (
        <span className='px-3 py-1 mx-1 inline-block'>
            {children}
        </span>
    );
}
