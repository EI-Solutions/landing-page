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
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Team = () => {
  const t = useTranslations('Team');

  const team = [
    {
      image: gustav,
      name: 'Gustav Haaland',
      linkedIn: 'https://www.linkedin.com/in/gustav-haaland/',
      role: 'CEO',
    },
    {
      image: marit,
      name: 'Marit Bjerkreim',
      linkedIn: 'https://www.linkedin.com/in/maritbjerkreim/',
      role: 'CCO',
    },
    {
      image: mathias,
      name: 'Mathias Wahl',
      linkedIn: 'https://www.linkedin.com/in/mathias-wahl/',
      role: 'CTO',
    },
    {
      image: carl,
      name: 'Carl Gützkow',
      linkedIn: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
      role: 'Backend Developer',
    },
    {
      image: thomas,
      name: 'Thomas Svendal',
      linkedIn: 'https://www.linkedin.com/in/thomas-svendal/',
      role: 'Backend Developer',
    },
    {
      image: alba,
      name: 'Alba Marie Nesvik Arnesen',
      linkedIn: 'https://www.linkedin.com/in/alba-arnesen-3a179b254/',
      role: 'UX Designer',
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
      <div className="place-items-start grid md:grid-cols-3 grid-cols-1">
        {team.map((member) => (
          <div key={member.name} className="p-4 justify-center flex">
            <a href={member.linkedIn}>
              <div className="w-min-content">
                <Image
                  src={member.image || defaultImage}
                  alt={member.name}
                  className={`rounded-md object-cover aspect-square bg-ei-dark-green`}
                />
              </div>
              <div className="p-1 text-ei-dark-green">
                <b>{member.name}</b>
                <p>{member.role}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
