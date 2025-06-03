import type { Image } from "./image";
import type { Tag } from "./tag";

export interface SpecialPackage {
    id: number
    image: Image,
    tags: Tag[],
    title: string,
    serviceType: string,
    serviceTime: string,
    price: string
}