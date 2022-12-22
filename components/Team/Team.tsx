import gustav from '/static/team/gustav.jpg'
import thomas from '/static/team/thomas.jpg'
import carl from '/static/team/carl.jpg'
import alba from '/static/team/alba.jpg'
import defaultImage from '/static/team/default-member-image.svg'
import Image from 'next/image'

const Team = () => {

    const team = [
        {
            image: gustav,
            name: 'Gustav Haaland',
            linkedIn: 'https://www.linkedin.com/in/gustav-haaland/',
            role: 'CEO & Co-founder',
        },
        {
            image: null,
            name: 'Eik Hvattum Røgeberg',
            linkedIn: 'https://www.linkedin.com/in/eik-hvattum-rogeberg/',
            role: 'Frontend Lead & Co-founder',
        },
        {
            image: carl,
            name: 'Carl Gützkow',
            linkedIn: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
            role: 'Backend Developer & Co-founder',
        },
        {
            image: thomas,
            name: 'Thomas Svendal',
            linkedIn: 'https://www.linkedin.com/in/thomas-svendal/',
            role: 'Backend Developer',
        },
        {
            image: alba,
            name: 'Alba Arnesen',
            linkedIn: 'https://www.linkedin.com/in/alba-arnesen-3a179b254/',
            role: 'UX Designer',
        },
    ]

    return (
        <div className='p-20'>
            <b className='text-4xl my-10 text-ei-dark-green'>Møt vårt
                <b className='text-ei-green'> kreative</b> og
                <b className='text-ei-green'> kompetente</b> team!
            </b>
            <p className='text-black'><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</i></p>
            <div className='align-middle grid lg:grid-cols-3 grid-cols-1'>
                {team.map(member => (
                    <div key={member.name} className='p-5 justify-center flex'>
                        <a href={member.linkedIn}>
                            <div className='w-min-content'>
                                <Image
                                    src={member.image || defaultImage}
                                    alt={member.name}
                                    className={`rounded-lg object-cover aspect-square bg-ei-dark-green`}
                                />
                            </div>
                            <div className='p-1 text-ei-dark-green'>
                                <b>{member.name}</b>
                                <p>{member.role}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
