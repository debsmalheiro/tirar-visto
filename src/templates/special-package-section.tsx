import Button from "../components/button";
import Passport from "../assets/images/passport.jpg";
import Queue from "../assets/images/queue.jpg";
import CheckIn from "../assets/images/check-in.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardPackage from "../components/card-package";
import { useRef } from "react";

export const specialPackages = [
    {
        id: 1,
        image: {
            url: Passport,
            alt: "Imagem de um passaporte"
        },
        tags: [{ id: 1, label:"basic" }, {id: 2, label: "premium" }],
        title: "Passaporte",
        serviceType: "On-line",
        serviceTime: "45 dias",
        price: "R$ 890,00"
    },
    {
        id: 2,
        image: {
            url: Queue,
            alt: "Imagem de uma pessoa na fila"
        },
        tags: [{ id: 1, label:"basic" }, {id: 2, label: "premium" }],
        title: "Passaporte + Visto",
        serviceType: "On-line + Presencial",
        serviceTime: "25 dias",
        price: "R$ 1.290,00"
    },
    {
        id: 3,
        image: {
            url: CheckIn,
            alt: "Imagem de um atendente fazendo o check-in"
        },
        tags: [{ id: 1, label:"basic" }, {id: 2, label: "premium" }],
        title: "Consultoria Completa",
        serviceType: "Presencial Completo",
        serviceTime: "10 dias",
        price: "R$ 1.890,00"
    }
];

export default function SpecialPackageSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    }

    return (
        <section id="services" className="mt-10 py-10 px-4 lg:px-12 overflow-hidden">
            <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Pacotes</Button>
            <div className="mt-3 mb-14 flex justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl  font-medium">Confira nossos pacotes</h1>
                </div>
                <div className="flex gap-3">
                    <Button className="p-2" onClick={scrollLeft}>
                        <ArrowLeft className="text-white" />
                    </Button>
                    <Button className="p-2" onClick={scrollRight}>
                        <ArrowRight className="text-white" />
                    </Button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-6 overflow-y-auto no-scrollbar">
                {specialPackages.map(({ id, image, price, serviceTime, serviceType, title, tags }) => (
                    <div key={id} className="min-w-[350px] flex-shrink-0">
                        <CardPackage id={id} image={image} price={price} serviceTime={serviceTime} serviceType={serviceType} tags={tags} title={title} />
                    </div>
                ))}
            </div>
        </section>
    );
}