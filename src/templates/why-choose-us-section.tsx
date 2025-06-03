import Button from "../components/button";
import Family from "../assets/images/family.jpg";
import { Plus } from "lucide-react";

export default function WhyChooseUsSection() {
    return (
        <section id="about" className="mt-10 py-10 px-4 lg:px-12">
            <div>
                <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Veja como funciona</Button>
                
                <div className="block md:block lg:flex lg:justify-between">
                    <div className="md:flex-1">
                        <h1 className="py-6 md:py-6 lg:py-0 font-medium text-4xl md:font-5xl">Sua tranquilidade não tem preço!</h1>
                    </div>
                    <div className="md:flex-2">
                        <p className="text-neutral-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>

                <div className="mt-16 block md:block lg:flex">
                    <div className="flex-2 mr-6">
                        <img src={Family} alt="Família" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col mt-6 md:mt-6 lg:mt-0">
                        <div className="border-b border-neutral-200 pb-6">
                            <p className="text-4xl md:text-5xl mb-3 font-medium">Etapa Inicial</p>
                            <span className="text-neutral-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                        </div>
                        <div className="border-b border-neutral-200 py-6">
                            <p className="text-4xl md:text-5xl mb-3 font-medium">Processo de Entrevista</p>
                            <div className="flex">
                                <Plus className="" />
                                <span className="ml-2">Leia mais</span>
                            </div>
                        </div>
                        <div className="border-b border-neutral-200 py-6">
                            <p className="text-4xl md:text-5xl mb-3 font-medium">Entrega de Documentos</p>
                            <div className="flex">
                                <Plus className="" />
                                <span className="ml-2">Leia mais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}