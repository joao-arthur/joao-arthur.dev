import { ReactNode } from 'react';

type props = {
    readonly children: ReactNode;
}

export function H2({ children }: props) {
    return <h2 className='text-xl pt-5 py-2'>{children}</h2>;
}
