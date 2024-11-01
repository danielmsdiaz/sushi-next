import React, { Suspense } from 'react'

//components
import Footer from '@/components/Footer'
import ProductTabs from '@/components/products/Tabs'
import TabsSkeleton from '@/components/products/Skeleton'

const Page = () => {
  return (
    <main className='max-w-4xl mx-auto h-screen-minus-header flex flex-col justify-between'>
      <section>
          <ProductTabs />
      </section>
      <Footer />
    </main>
  )
}

export default Page