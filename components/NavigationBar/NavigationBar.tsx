import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import eisolutionsLogo from '/static/eisolutions-logo-green.svg'

interface NavProps {
    backgroundClasses: string,
    textClasses: string,
    icon: any,
}

const NavigationBar = (props: NavProps) => {

    const [atTop, setAtTop] = useState(true)
    useEffect(() => {
        console.log("Running the useEffect");

        const addScrollListener = () => {
            console.log("Running the listener");
            if (window.scrollY > 0)
                setAtTop(false)
            else
                setAtTop(true)
        }
        window.addEventListener("scroll", addScrollListener)
        return () => window.removeEventListener("scroll", addScrollListener)
    }, [atTop])

    return (
        <div className={
            `transition-all duration-300 z-10 flex flex-row fixed w-full justify-between p-5 ${atTop ? props.backgroundClasses : 'bg-white'}`
        }>
            <Link href='/'>
                <Image
                    src={atTop ? props.icon : eisolutionsLogo}
                    alt="Ei Solutions logo"

                />
            </Link>
            <div className={`${props.textClasses} font-bold ${atTop ? '' : 'text-ei-green'}`}>
                <Link href="/about" className='text-xl px-5 mx-4'>
                    Om oss
                </Link>
                <Link href="/contact" className='text-xl px-5 mx-4'>
                    Kontakt
                </Link>
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

export default NavigationBar