import mapMarker from '/static/icons/map-marker-outline.svg'
import email from '/static/icons/email-outline.svg'
import phone from '/static/icons/phone.svg'
import Image from 'next/image'

const ContactInfo = () => {
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
            value: <a
                href="tel:+4741672212"
                className='underline'
            >
                +47 416 72 212
            </a>
        },
    ]

    return (
        <div>
            {contactInfo.map(item => (
                <div className='flex' key={item.alt}>
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        className='m-2 mx-5 w-7 object-fill'
                    />
                    {item.value}
                </div>
            ))}
        </div>
    )
}

export default ContactInfo
