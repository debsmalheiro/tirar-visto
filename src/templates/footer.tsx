import { MoveUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer>
            <div>
                <h1>Está com alguma dúvida?</h1>
                <div className="flex">
                    <div className="flex-1">
                        <span className="text-neutral-400">Entre em contato através do nosso canal direto ao cliente através do botão abaixo</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between border-b border-neutral-01">
                            <span>Receba novidades</span>
                            <MoveUpRight />
                        </div>
                    </div>
                    <button>Central de Atendimento</button>
                </div>
            </div>
            <div className="flex">
                <div>
                    <p>Siga em nossas redes:</p>
                    <div className="flex gap-3 mt-2">
                        <div className="px-5 rounded-full border border-neutral-01 font-semibold">Instagram</div>
                        <div className="px-5 rounded-full border border-neutral-01 font-semibold">X</div>
                        <div className="px-5 rounded-full border border-neutral-01 font-semibold">Facebook</div>
                        <div className="px-5 rounded-full border border-neutral-01 font-semibold">Youtube</div>
                    </div>
                </div>

                <div className="flex">
                    <div className="">
                        <span>Empresa</span>
                        <span>Home</span>
                        <span>Quem somos</span>
                        <span>Serviços</span>
                        <span>Contato</span>
                    </div>
                    <div>
                        <span>Novidades</span>
                        <span>Passaporte</span>
                        <span>Visto</span>
                        <span>Entrevista</span>
                        <span>Polícia Federal</span>
                    </div>
                    <div>
                        <span>Suporte</span>
                        <span>FAQ</span>
                        <span>Contato</span>
                        <span>Dúvidas Frequentes</span>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-neutral-200 flex justify-center items-center px-4 md:px-12 py-3">
                <span className="text-neutral-01 text-sm">© 2025 Tirar Visto - Todos os Direitos Reservados</span>
            </div>
        </footer>
    )
}