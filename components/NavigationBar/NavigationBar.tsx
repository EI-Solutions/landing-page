import Image from 'next/image'
import Link from 'next/link'

interface NavProps {
    backgroundClasses: string,
    textClasses: string,
    icon: any,
}

const NavigationBar = (props: NavProps) => {
    return (
        <div className={`flex flex-row justify-between p-5 ${props.backgroundClasses}`}>
            <Link href='/'>
                <Image
                    src={props.icon}
                    alt="Ei Solutions logo"

                />
            </Link>
            <div className={`${props.textClasses} font-bold`}>
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