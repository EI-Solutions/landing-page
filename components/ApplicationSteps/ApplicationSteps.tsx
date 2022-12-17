import brochure from '/static/salespoints/brochure.png'

const ApplicationSteps = () => {
    const steps = [
        {
            tabName: 'Gjør ferdig kartleggingen',
            title: 'Kartlegging',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
        {
            tabName: 'Initiell info',
            title: 'Initiell info',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
        {
            tabName: 'Ferdigstill klimatilpassningsplan',
            title: 'Klimatilpassningsplan',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
        {
            tabName: 'Implementer tiltak',
            title: 'Implementer tiltak',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
        {
            tabName: 'Hent ut endelig rapport',
            title: 'Endelig rapport',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
    ]

    return (
        <div className='bg-ei-dark-green text-center p-20'>
            <p className='text-4xl'>Våre steg</p>
            <div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ApplicationSteps
