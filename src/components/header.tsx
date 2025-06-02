import Logo from '../assets/images/logo.svg';

export default function Header() {
    return (
        <header className='flex'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="Logo Tirar Visto" />
            </div>
            <nav className='hidden md:block'>
                <ul className=''>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">Quem somos</a>
                    </li>
                    <li>
                        <a href="/services">Serviços</a>
                    </li>
                    <li>
                        <a href="/contact">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}