import { Clock4, PhoneCall } from "lucide-react";

export default function BannerWhyChooseUs() {
    return (
        <section className="mt-10 py-10 px-4 md:px-12 bg-gray-01 font-medium uppercase text-4xl md:text-5xl">
            <div className="flex">
                <div className="flex-4 md:flex-2">
                    <p className="">Consultoria completa para tirar seu visto</p>
                </div>
                <div className="flex-1">
                    <div className="ml-6 md:ml-20 rotate-12 w-fit drop-shadow rounded-lg bg-white p-3">
                        <PhoneCall className="" />
                    </div>
                </div>
            </div>
            <div className="flex mt-8">
                <div className="flex-1 flex justify-center pt-12">
                    <div className="-rotate-12 w-fit drop-shadow rounded-lg bg-white p-3">
                        <Clock4 className="" />
                    </div>
                </div>
                <div className="flex-4 md:flex-2">
                    <p className="flex justify-end text-end italic">Você esta em boas mãos!</p>
                </div>
            </div>
        </section>
    )
} 