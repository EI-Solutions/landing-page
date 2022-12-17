import { useState } from 'react'
import brochure from '/static/salespoints/brochure.png'

const ApplicationSteps = () => {
    const steps = [
        {
            tabName: 'Initiell info',
            title: 'Initiell info',
            image: brochure,
            alt: 'Brochure',
            description: ''
        },
        {
            tabName: 'Gjør ferdig kartleggingen',
            title: 'Kartlegging',
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

    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className='bg-ei-dark-green text-center p-20'>
            <p className='text-4xl'>Våre steg</p>
            <div className='flex flex-row justify-center'>
                {steps.map((step, i) => (
                    <button
                        key={i}
                        onClick={() => { setCurrentTab(i) }}
                        className={`text-sm m-4  ${currentTab === i ? 'border-b-2 border-ei-green' : ''}`}
                    >
                        {i + 1}. {step.tabName}
                    </button>
                ))}
            </div>
            <div>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={currentTab === i ? '' : 'hidden'}
                    >
                        <div>
                            {step.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApplicationSteps
