import { ReactNode } from 'react';

type propsType = {
    readonly children: ReactNode;
}

export function H1({ children }: propsType) {
    return <h1 className='text-2xl pt-4 pb-2'>{children}</h1>;
}
