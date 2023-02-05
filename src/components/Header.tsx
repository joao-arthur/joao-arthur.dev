import Link from 'next/link';

type propsType = {
    active: 'about' | 'blog' | 'projects';
}

export function Header({ active }: propsType) {
    return (
        <header className='w-1/3 m-auto pt-3'>
            <nav className='flex justify-around'>
                <Link className={active === 'about' ? 'underline' : ''} href='/'>
                    about
                </Link>
                <Link className={active === 'blog' ? 'underline' : ''} href='/blog'>
                    blog
                </Link>
                <Link className={active === 'projects' ? 'underline' : ''} href='/projects'>
                    projects
                </Link>
            </nav>
        </header>
    );
}
