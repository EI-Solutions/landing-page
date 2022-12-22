import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import Image from 'next/image'
import linkedin from '/static/icons/linkedin.svg'
import ContactInfo from './ContactInformation'
import Link from 'next/link'


const Footer = () => (
    <footer
        className='
                px-20
                pt-10
                bg-gradient-to-r from-ei-black-green to-ei-dark-green
            '
    >
        <div className='pb-10'>
            <Image
                src={eisolutionsLogo}
                alt="Ei Solutions logo"
            />
        </div>
        <div className='justify-between flex lg:flex-row flex-col'>
            <ContactInfo />
            <div className='flex'>
                <a href='https://www.linkedin.com/company/ei-solutions-as/'>
                    <Image
                        src={linkedin}
                        alt='Linked In icon'
                        className='m-3 w-10'
                    />
                </a>
                <div className='text-ei-green font-bold p-5'>
                    <p className='my-2'><Link href="/about">Om oss</Link></p>
                    <p className='my-2'><Link href="/contact">Kontakt</Link></p>
                    <p className='my-2'><Link href="/cookies">Cookie preferanser</Link></p>
                    <p className='my-2'><Link href="/terms-and-conditions">Vilkår for bruk</Link></p>
                </div>
            </div>
        </div>
        <p className='text-center p-5'>
            Opphavsrett © 2022, Ei Solutions AS. Alle rettigheter bevart.
        </p>
    </footer>
)

export default Footer

