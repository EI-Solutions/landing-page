import Image from 'next/image';
import ageraLogo from '/static/customer-logos/agera-logo.png';
import asplanViakLogo from '/static/customer-logos/asplanviak-logo.png';
import dnvLogo from '/static/customer-logos/dnv-logo.png';
import mollerEiendomLogo from '/static/customer-logos/mollereiendom-logo.png';
import baneNorLogo from '/static/customer-logos/banenor-logo.png';

const customers = [
  {
    image: ageraLogo,
    alt: 'Agera Eiendom',
    link: 'https://www.ageraeiendom.no/',
  },
  {
    image: asplanViakLogo,
    alt: 'Asplan Viak',
    link: 'https://www.asplanviak.no/',
  },
  {
    image: dnvLogo,
    alt: 'DNV',
    link: 'https://www.dnv.no/',
  },
  {
    image: mollerEiendomLogo,
    alt: 'Møller Eiendom',
    link: 'https://mollereiendom.no/',
  },
  {
    image: baneNorLogo,
    alt: 'Bane Nor Eiendom',
    link: 'https://www.banenor.no/',
  },
];

const Customers = () => {
  return (
    <div className="align-middle grid grid-cols-5 pb-2 px-4 lg:px-10 w-full">
      {customers.map((customer) => (
        <div key={customer.alt} className="flex justify-center">
          <a href={customer.link}>
            <Image
              className="p-3 object-contain max-h-32"
              src={customer.image}
              alt={customer.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
export default Customers;
