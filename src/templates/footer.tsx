import { ArrowRight } from "lucide-react";
import Button from "../components/button";

export default function Footer() {
    const socialMediaLinks = [
        { name: "Instagram", url: "#" },
        { name: "X", url: "#" },
        { name: "Facebook", url: "#" },
        { name: "Youtube", url: "#" }
    ];

    const footerLinks = [
        {
            title: "Empresa", items: [
                { name: "Home", url: "#" },
                { name: "Quem somos", url: "#" },
                { name: "Serviços", url: "#" },
                { name: "Contato", url: "#" },
            ]
        },
        {
            title: "Novidades", items: [
                { name: "Passaporte", url: "#" },
                { name: "Visto", url: "#" },
                { name: "Entrevista", url: "#" },
                { name: "Polícia Federal", url: "#" },
            ]
        },
        {
            title: "Suporte", items: [
                { name: "FAQ", url: "#" },
                { name: "Contato", url: "#" },
                { name: "Dúvidas Frequentes", url: "#" },
            ]
        }
    ]

    return (
        <footer>
            <div className="py-10 px-4 md:px-12">
                <div className="">
                    <h1 className="text-4xl md:text-5xl text-neutral-01 font-medium">Está com alguma dúvida?</h1>
                    <div className="block md:flex">
                        <div className="flex-1 mt-3">
                            <span className="text-neutral-400">Entre em contato através do nosso canal direto ao cliente através do botão abaixo</span>
                            <Button className="mt-6 py-2.5 px-5 md:mb-3">Central de Atendimento</Button>
                        </div>
                        <div className="flex-1 mt-3 mb:mt-0">
                            <div className="flex justify-between items-center border-b border-neutral-01">
                                <span className="mb-3 text-4xl">Receba novidades</span>
                                <ArrowRight className="text-neutral-01 text-4xl -rotate-45" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:flex md:justify-between">
                    <div className="mt-6 md:flex md:flex-col md:justify-end">
                        <p className="font-semibold">Siga em nossas redes:</p>
                        <div className="flex gap-3 mt-2">
                            {socialMediaLinks.map((link) => (
                                <a key={link.name} href={link.url} className="px-5 rounded-full border border-neutral-01 font-semibold">{link.name}</a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 text-neutral-400">

                        {footerLinks.map((links) => (
                            <div key={links.title} className="flex flex-col">
                                <span className="mb-5 font-medium text-neutral-01">{links.title}</span>
                                {links.items.map((item) => (
                                    <a key={item.name} href={item.url} className="mb-3">{item.name}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-neutral-200 flex justify-center items-center px-4 md:px-12 py-3">
                <span className="text-neutral-01 text-sm">© 2025 Tirar Visto - Todos os Direitos Reservados</span>
            </div>
        </footer>
    )
}