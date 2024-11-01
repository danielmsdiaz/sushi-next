import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const TabsSkeleton = () => {
    return (
        <div>
            <Skeleton className='mx-auto w-[90%] sm:w-full sm:mx-0 h-10 rounded-xl' />
            <div className="p-3 sm:p-0 mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 6 }, (item, index) => (
                    <div key={index}>
                        <Skeleton className='w-full h-32 rounded-xl' />
                        <Skeleton className='w-full mt-2 h-7 rounded-xl' />
                        <Skeleton className='w-16 mt-2 h-5 rounded-xl' />
                        <Skeleton className='mt-2 w-full h-9 rounded-xl' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabsSkeleton