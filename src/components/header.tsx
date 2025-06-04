import Logo from '../assets/images/logo.svg';
import Sidebar from './sidebar';

export default function Header() {
    const links = [
        { label: 'Home', href: '#hero' },
        { label: 'Quem somos', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Contato', href: '#footer' },
    ];

    return (
        <header className='top-0 left-0 w-full z-50 bg-white'>
            <Sidebar />
            <div className="flex items-center justify-center md:justify-between md:px-8">
                <div className="hidden lg:flex justify-center md:justify-start items-center">
                    <img src={Logo} alt="Logo Tirar Visto" className="w-40 h-auto" />
                </div>
                <nav className='hidden lg:block md:ml-5'>
                    <ul className='flex justify-between'>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="mr-4"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}