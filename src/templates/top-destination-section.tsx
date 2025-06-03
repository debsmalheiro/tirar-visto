import Button from "../components/button";
import Bali from "../assets/images/bali.jpg";
import Paris from "../assets/images/paris.jpg";
import NewYork from "../assets/images/ny.jpg";
import Santorini from "../assets/images/santorini.jpg";
import India from "../assets/images/india.jpg";
import CidadeDoCabo from "../assets/images/cdc.jpg";

export default function TopDestinationSection() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-full min-h-[423px] flex flex-col items-center justify-center text-center bg-[url('assets/images/bg-top-destination.png')] bg-cover bg-center bg-no-repeat">
                <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Top Destinos</Button>

                <h1 className="my-3 md:my-4 text-4xl md:text-5xl font-medium">Destinos mais procurados</h1>
                <p className="mb-8 md:mb-10 px-4 text-neutral-400">Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?</p>

                <Button className="py-2.5 px-5 md:mb-3">Conheça mais</Button>
            </div>

            <div>
                <div className="lg:flex lg:items-end gap-5">
                    <img src={Bali} alt="Bali" className="mb-5 w-full h-60 object-cover rounded-2xl" />
                    <img src={NewYork} alt="Nova York" className="mb-5 w-full h-60 md:h-72 object-cover rounded-2xl" />
                    <img src={Santorini} alt="Santorini" className="mb-5 w-full h-60 object-cover rounded-2xl" />
                </div>

                <div className="lg:flex lg:items-start mt-5 gap-5">
                    <img src={Paris} alt="Paris" className="mb-5 w-full h-60 object-cover rounded-2xl" />
                    <img src={CidadeDoCabo} alt="Cidade do Cabo" className="mb-5 w-full h-60 md:h-72 object-cover rounded-2xl" />
                    <img src={India} alt="Mumbai" className="mb-5 w-full h-60 object-cover rounded-2xl" />
                </div>
            </div>
        </section>
    );
}