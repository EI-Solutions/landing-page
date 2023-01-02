import Link from "next/link"
import Image from "next/image"
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import { Dispatch, SetStateAction } from "react"

interface DrawerProps {
    setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const NavigationDrawer = ({ setDrawerOpen }: DrawerProps) => {
    return (
        <div className='bg-ei-dark-green pt-20 h-screen'>
            <div className='flex flex-col h-64 justify-between'>
                <Link href='/' onClick={() => setDrawerOpen(false)}>
                    <Image
                        src={eisolutionsLogo}
                        alt="Ei Solutions logo"
                        className=""
                    />
                </Link>
                <Link href='/about' className='text-xl px-5 mx-4' onClick={() => setDrawerOpen(false)}>
                    Om oss
                </Link>
                <button
                    onClick={() => {
                        setDrawerOpen(false)
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                    }}
                    className='text-xl px-5 mx-4'
                >
                    Kontakt
                </button>
                <a
                    href="mailto:contact@eisolutions.no"
                    className='bg-ei-green p-3 px-8 mx-10 rounded-md text-black text-1xl font-bold'
                >
                    Forespør demo
                </a>
            </div>
        </div>
    )
}

export default NavigationDrawer