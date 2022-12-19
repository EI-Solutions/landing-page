import Image from 'next/image'

interface NavProps {
    isTransparent: boolean,
    icon: any,
}

const NavigationBar = (props: NavProps) => {
    return (
        <div className={`flex flex-row justify-between ${props.isTransparent ? 'bg-transparent' : 'bg-white'}`}>
            <div>
                <Image
                    src={props.icon}
                    alt="Ei Solutions logo"
                />
            </div>
            <div className={props.isTransparent ? '' : 'text-ei-green'}>
                <a href="/about" className='text-xl px-5 mx-4'>
                    Om oss
                </a>
                <a href="/contact" className='text-xl px-5 mx-4'>
                    contact
                </a>
                <a 
                    href="mailto:contact@eisolutions.no" 
                    className='bg-ei-green p-3 px-5 mx-10 rounded-md text-black text-1xl font-bold'
                >
                    Forespør demo
                </a>
            </div>
        </div>
    )
}

export default NavigationBar