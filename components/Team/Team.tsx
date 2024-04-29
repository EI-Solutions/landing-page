import gustav from '/static/team/gustav.jpg';
import thomas from '/static/team/thomas.jpg';
import carl from '/static/team/carl.jpg';
import alba from '/static/team/alba.jpg';
import marit from '/static/team/Marit.jpg';
import mathias from '/static/team/mathias.jpg';
import szymon from '/static/team/szymon.jpg';
import alexandre from '/static/team/alexandre.jpg';
import celina from '/static/team/celina.jpg';
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
      role: 'CEO',
      email: 'gustav@eisolutions.no',
      phone: '+47 416 72 212',
      linkedIn: 'https://www.linkedin.com/in/gustav-haaland/',
    },
    {
      image: marit,
      name: 'Marit Bjerkreim',
      email: 'marit@eisolutions.no',
      phone: '+47 974 76 070',
      linkedIn: 'https://www.linkedin.com/in/maritbjerkreim/',
      role: 'CCO',
    },
    {
      image: mathias,
      name: 'Mathias Wahl',
      email: 'mathias@eisolutions.no',
      phone: '+47 452 37 996',
      linkedIn: 'https://www.linkedin.com/in/mathias-wahl/',
      role: 'CTO',
    },
    {
      image: carl,
      name: 'Carl Gützkow',
      role: 'Full-stack Developer',
      email: '',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
    },
    {
      image: thomas,
      name: 'Thomas Svendal',
      role: 'Full-stack Developer',
      email: '',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/thomas-svendal/',
    },
    {
      image: alba,
      name: 'Alba Marie Nesvik Arnesen',
      role: 'UX/UI Designer',
      email: '',
      phone: '',
      linkedIn: 'https://www.linkedin.com/in/alba-arnesen-3a179b254/',
    },
    {
      image: szymon,
      name: 'Szymon Mazur',
      linkedIn: 'https://www.linkedin.com/in/szymon-mazur-07554b15b/',
      role: 'UX/UI Designer',
    },
    {
      image: alexandre,
      name: 'Alexandre Didion',
      linkedIn: 'https://www.linkedin.com/in/alexandredidion/',
      role: 'Fullstack Developer',
    },
    {
      image: celina,
      name: 'Celina Berhane Sørtveit',
      linkedIn: 'https://www.linkedin.com/in/celinabs/',
      role: 'Frontend Developer',
    },
  ];

  return (
    <div className="p-10 md:p-20 container">
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
      <div className="place-items-stretch grid md:grid-cols-5 grid-cols-1">
        {team.map((member) => (
          <div key={member.name} className="p-2 lg:p-8 justify-center">
            <div className="w-min-content">
              <Image
                src={member.image || defaultImage}
                alt={member.name}
                width={1000}
                height={1000}
                className={`rounded-md object-cover aspect-square bg-ei-dark-green`}
              />
            </div>
            <div className="pt-3 flex max-sm:flex-col md:flex-col lg:flex-row justify-between">
              <div className="text-ei-dark-green">
                <b>{member.name}</b>
                <p>{member.role}</p>
                <p>
                  <a className="underline hover:text-ei-green" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                </p>
                <p>
                  <a className="underline hover:text-ei-green" href={`tlf:${member.phone}`}>
                    {member.phone}
                  </a>
                </p>
              </div>
              {/* <div>
                <a href={member.linkedIn}>
                  <Image src={linkedin} alt="Linked In icon" className="text-xs" />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
