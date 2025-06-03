import Header from "../components/header";
import Video from "../assets/images/video.png";
import FerrisWheel from "../assets/images/ferris-wheel.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="block mx-4 md:flex md:ml-4">
            <div className="flex flex-col md:flex-1 justify-center md:p-5">
                <Header />

                <h1 className="text-5xl md:text-[54px] mt-6 pb-6 md:mt-10 md:pb-8 text-neutral-800 font-medium border-b-2 border-neutral-200">Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>

                <div className="flex flex-col md:flex-row mt-6 md:mt-10">
                    <div className="md:flex-1 mb-6">
                        <p className="mb-6 md:mb-10 text-neutral-400">Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.</p>
                        <div className="w-fit flex text-white py-2.5 px-5 rounded-full bg-slate-800">
                            <button className="mr-2">Saiba mais</button>
                            <ArrowRight className="text-white" />
                        </div>
                    </div>

                    <div className="md:pl-2 md:flex-1">
                        <div>
                            <img src={Video} alt="Vídeo" className="w-full md:w-[400px] h-auto rounded-lg mb-4" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="mr-4">
                                <p className="font-semibold">Conheça a Bruna</p>
                                <span className="text-neutral-400">Ver vídeo</span>
                            </div>
                            <button className="p-2 bg-slate-800 rounded-full">
                                <ArrowRight className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-6 md:mt-10">
                    <div className="flex-1">
                        <p className="text-5xl font-medium">509</p>
                        <span className="text-base text-neutral-400">Vistos Tirados</span>
                    </div>
                    <div className="border border-neutral-200" />
                    <div className="ml-7 flex-1">
                        <p className="text-5xl font-medium">602</p>
                        <span className="text-base text-neutral-400">Passaportes Tirados</span>
                    </div>
                    <div className="border border-neutral-200" />
                    <div className="ml-7 flex-1">
                        <p className="text-5xl font-medium">634</p>
                        <span className="text-base text-neutral-400">Famílias Felizes</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 md:flex-1">
                <img src={FerrisWheel} alt="Roda gigante" className="w-full h-auto" />
            </div>
        </section>
    )
}