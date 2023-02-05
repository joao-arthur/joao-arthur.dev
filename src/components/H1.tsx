import { ReactNode } from 'react';

type propsType = {
    children: ReactNode;
}

export function H1({ children }: propsType) {
    return <h1 className='text-2xl py-4'>{children}</h1>;
}
