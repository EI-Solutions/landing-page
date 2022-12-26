import Link from "next/link"
import Image from "next/image"
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'


const NavigationDrawer = () => {
    return (
        <div className='bg-ei-dark-green pt-20 h-screen'>
            <div className='flex flex-col h-64 justify-between'>
                <Link href='/'>
                    <Image
                        src={eisolutionsLogo}
                        alt="Ei Solutions logo"
                        className=""
                    />
                </Link>
                <Link href='/about'>
                    Om oss
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

export default NavigationDrawer