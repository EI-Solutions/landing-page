import gustav from '/static/team/gustav.jpg'
import Image from 'next/image'

const Team = () => {

    const team = [
        {
            image: gustav,
            name: 'Gustav Haaland',
            linkedIn: 'https://www.linkedin.com/in/gustav-haaland/',
            role: 'CEO',
        },
        {
            image: gustav,
            name: 'Eik Hvattum Røgeberg',
            linkedIn: 'https://www.linkedin.com/in/eik-hvattum-rogeberg/',
            role: 'Frontend Lead',
        },
        {
            image: gustav,
            name: 'Carl Gützkow',
            linkedIn: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
            role: 'Backend Lead',
        },
        {
            image: gustav,
            name: 'Thomas Svendal',
            linkedIn: 'https://www.linkedin.com/in/thomas-svendal/',
            role: 'Backend Developer',
        },
        {
            image: gustav,
            name: 'Alba Arnesen',
            linkedIn: 'https://www.linkedin.com/in/alba-arnesen-3a179b254/',
            role: 'UX Designer',
        },
    ]

    return (
        <div className='bg-ei-green p-20'>
            <b className='text-4xl my-10'>Vårt Team</b>
            <div className='align-middle grid lg:grid-cols-2 grid-cols-1'>
                {team.map(member => (
                    <div key={member.name} className='text-center p-5 justify-center flex'>
                        <a href={member.linkedIn}>
                            <div className='w-min-content'>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className='rounded-full object-cover p-5 h-80 w-80'
                                />
                            </div>
                            <b>{member.name}</b>
                            <p>{member.role}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
