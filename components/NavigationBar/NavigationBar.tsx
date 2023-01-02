import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavigationDrawer from './NavigationDrawer'
import eisolutionsLogo from '/static/eisolutions-logo-green.svg'

import menuIcon from '/static/icons/menu_icon.svg'
import crossIcon from '/static/icons/cross.svg'
import { useTranslations } from 'next-intl'

interface NavProps {
    backgroundClasses: string,
    textClasses: string,
    icon: any,
}

const NavigationBar = (props: NavProps) => {
    const t = useTranslations('NavigationBar')

    const [atTop, setAtTop] = useState(true)
    useEffect(() => {
        const addScrollListener = () => {
            setAtTop(window.scrollY <= 0)
        }
        window.addEventListener("scroll", addScrollListener)
        return () => window.removeEventListener("scroll", addScrollListener)
    }, [atTop])

    const [drawerOpen, changeDrawerPosition] = useState(false)

    useEffect(() => {
        changeDrawerPosition(drawerOpen)
        document.body.style.height = drawerOpen ? '100%' : ''
        document.body.style.overflow = drawerOpen ? 'hidden' : ''
        return
    }, [drawerOpen])

    return (
        <>
            <button className='lg:hidden fixed z-20 m-2 p-3' onClick={() => (changeDrawerPosition(!drawerOpen))}

            >
                {(drawerOpen ?
                    <Image
                        alt='Cross icon'
                        src={crossIcon}
                    />
                    :
                    <Image
                        alt='Menu icon'
                        src={menuIcon}
                    />
                )}
            </button>
            <div className={`z-10 lg:hidden fixed transition-all duration-300 ${drawerOpen ? 'w-full' : 'w-0 scale-0'}`}>
                <NavigationDrawer setDrawerOpen={changeDrawerPosition} />
            </div>
            <div className={
                `max-lg:hidden transition-all duration-300 z-10 flex flex-row fixed w-full justify-between p-5 ${atTop ? props.backgroundClasses : 'bg-white'}`
            }>
                <Link href='/'>
                    <Image
                        src={atTop ? props.icon : eisolutionsLogo}
                        alt="Ei Solutions logo"

                    />
                </Link>
                <div className={`${props.textClasses} font-bold ${atTop ? '' : 'text-ei-green'}`}>
                    <Link href="/about" className='text-xl px-5 mx-4'>
                        {t('about')}
                    </Link>
                    <button
                        onClick={() => (
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                        )}
                        className='text-xl px-5 mx-4'
                    >
                        {t('contact')}
                    </button>
                    <a
                        href="mailto:contact@eisolutions.no"
                        className='bg-ei-green p-3 px-8 mx-10 rounded-md text-black text-1xl font-bold'
                    >
                        {t('demo')}
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavigationBar