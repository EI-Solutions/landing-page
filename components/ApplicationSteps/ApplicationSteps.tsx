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
    const changeTab = () => {

    }

    return (
        <div className='bg-ei-dark-green text-center p-20'>
            <p className='text-4xl'>Våre steg</p>
            <div className='flex flex-row justify-center'>
                {steps.map((step, i) => (
                    <button
                        key={i}
                        onClick={() => { setCurrentTab(i); changeTab() }}
                        className={`text-sm m-4  ${currentTab === i ? 'border-b-2 border-ei-green' : ''}`}
                    >
                        {step.tabName}
                    </button>
                ))}
                <div>

                </div>
            </div>
        </div>
    )
}

export default ApplicationSteps
