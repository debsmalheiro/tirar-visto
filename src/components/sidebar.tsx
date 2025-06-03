import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Quem somos', href: '/about' },
        { label: 'Serviços', href: '/services' },
        { label: 'Contato', href: '/contact' },
    ];

    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-50 text-3xl text-gray-800"
                onClick={() => setIsOpen(true)}
            >
                <Menu className='' />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
            >
                <div className="flex float-right mb-6 md:hidden">
                    <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-800" aria-label="Fechar menu">
                        <X />
                    </button>
                </div>

                <nav>
                    <ul className="space-y-4 text-neutral-800">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className=""
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
