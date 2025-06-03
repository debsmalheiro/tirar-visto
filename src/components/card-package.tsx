import clsx from "clsx";
import type { Image } from "../types/image";
import type { Tag } from "../types/tag";
import Button from "./button";

interface CardPackageProps {
    id: number;
    image: Image;
    price: string;
    serviceTime: string;
    serviceType: string;
    tags: Tag[];
    title: string;
}

export default function CardPackage({ id, image, price, serviceTime, serviceType, tags, title }: CardPackageProps) {

    return (
        <div key={id} className="p-3 rounded-2xl border border-neutral-200 flex flex-col">
            <div>
                <img src={image.url} alt={image.alt} className="w-full h-64 object-cover rounded-2xl" />
            </div>
            <div className="flex my-6 gap-3">
                {tags.map((tag) => (
                    <div className={clsx('px-5 rounded-full font-semibold border capitalize', tag.label === "basic" ? "border-neutral-01" : "border-neutral-400 text-neutral-400")}>{tag.label}</div>
                ))}
            </div>
            <p className="mb-4 text-2xl font-semibold">{title}</p>
            <div className="flex border-b border-neutral-200 pb-4">
                <div className="flex-1">
                    <p className="text-neutral-01">Atendimento</p>
                    <span className="text-neutral-400">{serviceType}</span>
                </div>
                <div className="flex-1">
                    <p className="text-neutral-01">Tempo</p>
                    <span className="text-neutral-400">{serviceTime}</span>
                </div>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div>
                    <p className="text-neutral-400">A partir de</p>
                    <span className="text-3xl text-neutral-01 font-semibold">{price}</span>
                </div>
                <Button className="py-2.5 px-5 md:mb-3">Contratar</Button>
            </div>
        </div>
    )
}