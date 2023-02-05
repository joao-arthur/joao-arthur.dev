import Link from 'next/link';

type propsType = {
    active: 'about' | 'blog' | 'projects';
}

export function Header({ active }: propsType) {
    return (
        <header className='w-1/3 mx-auto pt-3 pb-10'>
            <nav className='flex justify-around'>
                <Link className={active === 'about' ? 'underline' : ''} href='/'>
                    about
                </Link>
                <Link className={active === 'projects' ? 'underline' : ''} href='/projects'>
                    projects
                </Link>
                <Link className={active === 'blog' ? 'underline' : ''} href='/blog'>
                    blog
                </Link>
            </nav>
        </header>
    );
}
