import Button from "../components/button";
import Passport from "../assets/images/passport.jpg";
import Queue from "../assets/images/queue.jpg";
import CheckIn from "../assets/images/check-in.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardPackage from "../components/card-package";

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

    return (
        <section className="mt-10 py-10 px-4 md:px-12">
            <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Pacotes</Button>
            <div className="mt-3 mb-14 flex justify-between">
                <div>
                    <h1 className="text-4xl md:text-5xl  font-medium">Confira nossos pacotes</h1>
                </div>
                <div className="flex gap-3">
                    <Button className="p-2">
                        <ArrowLeft className="text-white" />
                    </Button>
                    <Button className="p-2">
                        <ArrowRight className="text-white" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {specialPackages.map(({ id, image, price, serviceTime, serviceType, title, tags }) => (
                    <CardPackage id={id} image={image} price={price} serviceTime={serviceTime} serviceType={serviceType} tags={tags} title={title} />
                ))}
            </div>
        </section>
    );
}