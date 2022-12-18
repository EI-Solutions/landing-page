import eisolutionsLogo from '/static/eisolutions-logo.svg'
import Image from 'next/image'
import mapMarker from '/static/icons/map-marker-outline.svg'
import email from '/static/icons/email-outline.svg'
import phone from '/static/icons/phone-outline.svg'
import linkedin from '/static/icons/linkedin.svg'

const Footer = () => {

    const contactInfo = [
        {
            icon: mapMarker,
            alt: 'Map marker icon',
            value: <div>
                <p>Sem Sælands vei 1</p>
                <p>7034 Trondheim, Norway</p>
            </div>
        },
        {
            icon: email,
            alt: 'Email icon',
            value: <a
                href="mailto:contact@eisolutions.no"
                className='underline'
            >
                contact@eisolutions.no
            </a>
        },
        {
            icon: phone,
            alt: 'Phone icon',
            value: <p>+47 416 23 507</p>
        },
    ]

    return (
        <footer
            className='
            px-20
            pt-10
            bg-gradient-to-r from-[#012424] to-ei-dark-green
            '
        >
            <div className='pb-10'>
                <Image
                    src={eisolutionsLogo}
                    alt="Ei Solutions logo"
                />
            </div>
            <div className='justify-between flex flex-row'>
                <div>
                    {contactInfo.map(item => (
                        <div className='flex justify-items-center'>
                            <Image
                                src={item.icon}
                                alt={item.alt}
                                className='m-3 w-10'
                            />
                            {item.value}
                        </div>
                    ))}
                </div>
                <div className='flex'>
                    <a href='https://www.linkedin.com/company/ei-solutions-as/'>
                        <Image
                            src={linkedin}
                            alt='Linked In icon'
                            className='m-3 w-10'
                        />
                    </a>
                    <div className='flex flex-col text-ei-green font-bold p-5'>
                        <a href="/about" className='py-1'>Om oss</a>
                        <a href="/contact" className='py-1'>Kontakt</a>
                    </div>
                </div>
            </div>
            <p className='text-center pb-5'>
                Opphavsrett © 2022, Ei Solutions. Alle rettigheter bevart.
            </p>
        </footer>
    )
}

export default Footer
