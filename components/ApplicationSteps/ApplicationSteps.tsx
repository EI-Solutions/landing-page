import Image from 'next/image'
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
            <p className='text-4xl mb-5'>Våre steg</p>
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
                        <div className='flex flex-row relative'>
                            <div className='basis-1/2 px-20'>
                                <Image 
                                    src={step.image}
                                    alt={step.alt}
                                    className=''
                                />
                            </div>
                            <div className='basis-1/2 text-start'>
                                <p className='absolute top-0 mt-10 text-2xl font-bold'>
                                    {step.title}
                                </p>
                                <div>
                                    {step.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApplicationSteps
