import Image from 'next/image';
import ageraLogo from '/static/customer-logos/agera-logo.png';
import asplanViakLogo from '/static/customer-logos/asplanviak-logo.png';
import dnvLogo from '/static/customer-logos/dnv-logo.png';
import mollerEiendomLogo from '/static/customer-logos/mollereiendom-logo.png';
import baneNorLogo from '/static/customer-logos/banenor-logo.png';

const Customers = () => {
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

  return (
    <div className="bg-gradient-to-r from-ei-dark-green to-ei-green">
      <div
        className="align-middle grid grid-cols-2 md:grid-cols-5 p-10 lg:p-20 h-full w-full"
        style={{ backgroundImage: 'url(/static/figures/grain.svg)' }}
      >
        {customers.map((customer) => (
          <div key={customer.alt} className="flex justify-center">
            <a href={customer.link}>
              <Image
                className="p-3 object-contain h-40"
                src={customer.image}
                alt={customer.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customers;
