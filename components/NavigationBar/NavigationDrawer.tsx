import Link from "next/link"
import Image from "next/image"
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import { Dispatch, SetStateAction } from "react"
import { useTranslations } from "next-intl"
import LocaleSelector from "../LocaleSelector/LocaleSelector"

interface DrawerProps {
    setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const NavigationDrawer = ({ setDrawerOpen }: DrawerProps) => {
    const t = useTranslations('NavigationBar')
    return (
        <div className='bg-ei-dark-green h-screen'>
            <div className='flex flex-col h-2/3 justify-around'>
                <Link href='/' onClick={() => setDrawerOpen(false)}>
                    <Image
                        src={eisolutionsLogo}
                        alt="Ei Solutions logo"
                    />
                </Link>
                <Link href='/about' className='text-xl py-5' onClick={() => setDrawerOpen(false)}>
                    {t('about')}
                </Link>
                <button
                    onClick={() => {
                        setDrawerOpen(false)
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                    }}
                    className='text-xl py-5'
                >
                    {t('contact')}
                </button>
                <a
                    href="mailto:contact@eisolutions.no"
                    className='bg-ei-green p-3 px-8 rounded-md text-black text-1xl font-bold'
                >
                    {t('demo')}
                </a>
                <LocaleSelector setDrawerOpen={setDrawerOpen} />
            </div>
        </div>
    )
}

export default NavigationDrawer