import Button from "../components/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SpecialPackageSection() {
    return (
        <section className="mt-10 py-10 px-4 md:px-12">
            <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Pacotes</Button>
            <div className="mt-3 mb-14 flex justify-between">
                <div>
                    <h1 className="text-4xl md:text-5xl  font-medium">Confira nossos pacotes</h1>
                </div>
                <div className="flex">
                    <Button className="p-2">
                        <ArrowLeft className="text-white" />
                    </Button>
                    <Button className="p-2">
                        <ArrowRight className="text-white" />
                    </Button>
                </div>
            </div>

            <div>
                <div className="p-3 rounded-2xl border border-neutral-200 flex flex-col">
                    <div>
                        img
                    </div>
                    <div className="flex my-6">
                        <div className="px-5 rounded-full border border-neutral-01 font-semibold">Basic</div>
                        <div className="px-5 rounded-full text-neutral-400 border border-neutral-400 font-semibold">Premium</div>
                    </div>
                    <p className="mb-4 text-2xl font-semibold">Passaporte</p>
                    <div className="flex border-b border-neutral-200 pb-4">
                        <div className="flex-1">
                            <p className="text-neutral-01">Atendimento</p>
                            <span className="text-neutral-400">On-line</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-neutral-01">Tempo</p>
                            <span className="text-neutral-400">45 dias</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <div>
                            <p className="text-neutral-400">A partir de</p>
                            <span>R$ 890,00</span>
                        </div>
                        <Button className="py-2.5 px-5 md:mb-3">Contratar</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}