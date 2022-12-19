import eisolutionsLogo from '/static/eisolutions-logo.svg'
import Image from 'next/image'

const NavigationBar = () => {
    return (
        <div className="flex flex-row bg-ei-dark-green justify-between">
            <div>
                <Image 
                    src={eisolutionsLogo}
                    alt="Ei Solutions logo"
                />
            </div>
            <div className='items-baseline'>
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