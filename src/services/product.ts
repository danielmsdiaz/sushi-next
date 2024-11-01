import { Product } from "@/types/product";
import { products } from "@/data/products";

export const getAllSushi = async (): Promise<Product[]> => {
    return products.filter((product) => product.category === "sushi");
}

export const getAllCombos = async (): Promise<Product[]> => {
    return products.filter((product) => product.category === "pack");
}