"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { getAllCombos, getAllSushi } from '@/services/product'
import { Product } from '@/types/product'
import TabsSkeleton from '@/components/products/Skeleton'

const ProductTabs = () => {
    const [sushis, setSushis] = useState<Product[]>()
    const [combos, setCombos] = useState<Product[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const sushi = await getAllSushi()
            const combo = await getAllCombos()
            setSushis(sushi)
            setCombos(combo)
            setLoading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return <TabsSkeleton />
    }

    return (
        <Tabs defaultValue="sushi">
            <TabsList className='mx-auto w-[90%] sm:w-full sm:mx-0 flex mb-6'>
                <TabsTrigger className='flex-1' value='sushi'>Sushis</TabsTrigger>
                <TabsTrigger className='flex-1' value='temaki'>Temakis</TabsTrigger>
                <TabsTrigger className='flex-1' value='combo'>Combinados</TabsTrigger>
            </TabsList>
            <TabsContent value='sushi'>
                <div className="p-3 sm:p-0 mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                    {sushis?.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} className="w-full h-32 rounded-xl" alt={`Sushi ${index}`} />
                            <div className="w-full mt-2 h-7 rounded-xl">{item.name}</div>
                            <div className="mt-2 w-full h-9 rounded-xl text-sm opacity-50">{`R$ ${item.price},00`}</div>
                            <div className='cursor-pointer border text-center p-1 rounded-xl hover:border-sushiOrange transition-all'>
                                Adicionar
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value='temaki'>
                <div className='text-center'>
                    <h1 className='font-bold text-2xl mb-3'>Ops!</h1>
                    <p className='opacity-70'>Infelizmente não temos produtos nesta categoria 😢</p>
                </div>
            </TabsContent>
            <TabsContent value='combo'>
                <div className="p-3 sm:p-0 mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                    {combos?.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} className="w-full h-32 rounded-xl" alt={`Combos ${index}`} />
                            <div className="w-full mt-2 h-7 rounded-xl">{item.name}</div>
                            <div className="mt-2 w-full h-9 rounded-xl text-sm opacity-50">{`R$ ${item.price},00`}</div>
                            <div className='cursor-pointer border text-center p-1 rounded-xl hover:border-sushiOrange transition-all'>
                                Adicionar
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default ProductTabs
