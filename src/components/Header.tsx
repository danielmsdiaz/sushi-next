import React from 'react'

//theme toggle
import { ThemeToggle } from '@/components/theme-toggle'

//components
import Logo from '@/components/Logo'
import Sidebar from '@/components/cart/Sidebar'

const Header = () => {
    return (
        <>
            <header className='px-3 max-w-7xl md:px-0 xl:mx-auto w-full flex items-center justify-between'>
                <section className='flex items-center gap-x-4 p-9'>
                    <Logo />
                    <ThemeToggle />
                </section>
                <section>
                    <Sidebar />
                </section>
            </header>
        </>
    )
}

export default Header