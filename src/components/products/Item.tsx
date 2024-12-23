"use client"

import { Product } from '@/types/product';
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import useCartStore from '@/stores/cart';

type ItemProps = {
    item: Product;
    index: number;
};

const Item = ({ item, index }: ItemProps) => {
    const { toast } = useToast();
    const addToCart = useCartStore((state) => state.addToCart); // Hook usado no nível superior

    const handleItemBtn = () => {
        toast({
            title: "Sucesso!",
            description: "O item foi adicionado ao carrinho",
        });

        addToCart(item);
    };

    return (
        <div>
            <img 
                src={item.image} 
                className="w-full h-32 rounded-xl" 
                alt={`${item.category} ${index}`} 
            />
            <div className="w-full mt-2 h-7 rounded-xl">{item.name}</div>
            <div className="mt-2 w-full h-9 rounded-xl text-sm opacity-50">{`R$ ${item.price},00`}</div>
            <div 
                onClick={handleItemBtn} 
                className="cursor-pointer border text-center p-1 rounded-xl hover:border-sushiOrange transition-all"
            >
                Adicionar
            </div>
        </div>
    );
};

export default Item;
