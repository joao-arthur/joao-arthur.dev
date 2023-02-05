import { ReactNode } from 'react';

type propsType = {
    children: ReactNode;
}

export function H2({ children }: propsType) {
    return <h2 className='text-xl py-4'>{children}</h2>;
}
