import Image from 'next/image'
import ageraLogo from '/assets/customer-logos/agera-logo.png'
import asplanViakLogo from '/assets/customer-logos/asplanviak-logo.png'
import dnvLogo from '/assets/customer-logos/dnv-logo.png'
import mollerEiendomLogo from '/assets/customer-logos/mollereiendom-logo.png'
import baneNorLogo from '/assets/customer-logos/banenor-logo.png'


const Customers = () => {
    const customers = [
        {
            image: ageraLogo,
            alt: 'Agera Eiendom'
        },
        {
            image: asplanViakLogo,
            alt: 'Asplan Viak'
        },
        {
            image: dnvLogo,
            alt: 'DNV'
        },
        {
            image: mollerEiendomLogo,
            alt: 'Møller Eiendom'
        },
        {
            image: baneNorLogo,
            alt: 'Bane Nor Eiendom'
        },
    ]

    return (
        <div className='ei-gradient-to-right py-20'>
            <div className='align-middle grid grid-cols-3'>
                {customers.map(customer => (
                    <div
                        key={customer.alt}
                        className='h-40 flex justify-center'>

                        <Image
                            className='p-5 fit h-40'
                            src={customer.image}
                            alt={customer.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Customers;
