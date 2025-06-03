import Button from "../components/button";

export default function TopDestinationSection() {
    return (
        <section>
            <div>
                <div>
                    <Button variant="secondary" className="py-2.5 px-5 md:mb-3">Top Destinos</Button>
                </div>
                <h1>Destinos mais procurados</h1>
                <p>Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?</p>
                <div>
                    <Button className="py-2.5 px-5 md:mb-3">Conheça mais</Button>
                </div>
            </div>

            <div>
                grid destinos
            </div>
        </section>
    );
}