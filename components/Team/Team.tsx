import gustav from '/static/team/gustav.jpg';
import thomas from '/static/team/thomas.jpg';
import carl from '/static/team/carl.jpg';
import alba from '/static/team/alba.jpg';
import defaultImage from '/static/team/default-member-image.svg';
import linkedin from '/static/icons/linkedin.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Team = () => {
  const t = useTranslations('Team');

  const team = [
    {
      image: gustav,
      name: 'Gustav Haaland',
      role: 'CEO & Co-founder',
      email: 'gustav@eisolutions.no',
      phone: '+47 416 67 212',
      linkedIn: 'https://www.linkedin.com/in/gustav-haaland/',
    },
    {
      image: null,
      name: 'Jenni Skaara',
      role: 'Product Manager',
      email: 'jenni@eisolutions.no',
      phone: '+47 920 56 264',
      linkedIn: 'https://www.linkedin.com/in/jenni-susanne-skaara-027626158/',
    },
    {
      image: null,
      name: 'Eik Hvattum Røgeberg',
      role: 'Frontend Developer & Co-founder',
      email: 'eik@eisolutions.no',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/eik-hvattum-rogeberg/',
    },
    {
      image: carl,
      name: 'Carl Gützkow',
      role: 'Backend Developer & Co-founder',
      email: 'carl@eisolutions.no',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
    },
    {
      image: thomas,
      name: 'Thomas Svendal',
      role: 'Backend Developer',
      email: 'thomas@eisolutions.no',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/thomas-svendal/',
    },
    {
      image: alba,
      name: 'Alba Marie Nesvik Arnesen',
      role: 'UX Designer',
      email: 'alba@eisolutions.no',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/alba-arnesen-3a179b254/',
    },
  ];

  return (
    <div className="p-10 md:p-20">
      <div className="md:w-2/5">
        <span className="font-bold text-4xl text-ei-dark-green">
          {t.rich('title', {
            green: (text) => <span className="text-ei-green">{text}</span>,
          })}
        </span>
      </div>
      <p className="text-ei-dark-green py-5 md:w-3/5">
        <i>{t('description')}</i>
      </p>
      <div className="place-items-stretch grid md:grid-cols-3 grid-cols-1">
        {team.map((member) => (
          <div key={member.name} className="p-4 justify-center">
            <div className="w-min-content">
              <Image
                src={member.image || defaultImage}
                alt={member.name}
                className={`rounded-md object-cover aspect-square bg-ei-dark-green`}
              />
            </div>
            <div className="p-1 flex max-sm:flex-col md:flex-col lg:flex-row justify-between">
              <div className="text-ei-dark-green">
                <b>{member.name}</b>
                <p>{member.role}</p>
                <p>
                  <a className="underline" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                </p>
                <p>
                  <a className="underline" href={`tlf:${member.phone}`}>
                    {member.phone}
                  </a>
                </p>
              </div>
              <div>
                <a href={member.linkedIn}>
                  <Image src={linkedin} alt="Linked In icon" className="m-3 " />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
