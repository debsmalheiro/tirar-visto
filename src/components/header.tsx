import Logo from '../assets/images/logo.svg';
import Sidebar from './sidebar';

export default function Header() {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Quem somos', href: '/about' },
        { label: 'Serviços', href: '/services' },
        { label: 'Contato', href: '/contact' },
    ];

    return (
        <header className='flex mt-5'>
            <Sidebar />
            <div className="flex justify-center md:justify-start items-center">
                <img src={Logo} alt="Logo Tirar Visto" className="w-32 h-auto" />
            </div>
            <nav className='hidden md:block md:ml-5'>
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
        </header>
    )
}