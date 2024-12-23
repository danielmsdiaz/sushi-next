"use client"

import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { getAllCombos, getAllSushi } from '@/services/product';
import { Product } from '@/types/product';
import TabsSkeleton from '@/components/products/Skeleton';
import Item from '@/components/products/Item';

const ProductTabs = () => {
    const [sushis, setSushis] = useState<Product[]>([]);
    const [combos, setCombos] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [sushiData, comboData] = await Promise.all([getAllSushi(), getAllCombos()]);
                setSushis(sushiData);
                setCombos(comboData);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const categories = [
        { name: 'sushi', label: 'Sushis', items: sushis },
        { name: 'temaki', label: 'Temakis', items: [] },
        { name: 'combo', label: 'Combinados', items: combos }
    ];

    return (
        <Tabs defaultValue="sushi">
            {isLoading ? (
                <TabsSkeleton /> 
            ) : (
                <>
                    <TabsList className='mx-auto w-[90%] sm:w-full sm:mx-0 flex mb-6'>
                        {categories.map((category) => (
                            <TabsTrigger key={category.name} className='flex-1' value={category.name}>
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {categories.map((category) => (
                        <TabsContent key={category.name} value={category.name}>
                            {category.items.length > 0 ? (
                                <div className="p-3 sm:p-0 mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                                    {category.items.map((item, index) => (
                                        <Item key={item.id || index} item={item} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className='text-center p-3'>
                                    <h1 className='font-bold text-2xl mb-3'>Ops!</h1>
                                    <p className='opacity-70'>Infelizmente não temos produtos nesta categoria 😢</p>
                                </div>
                            )}
                        </TabsContent>
                    ))}
                </>
            )}
        </Tabs>
    );
}

export default ProductTabs;
