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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
        <div className='bg-ei-darker-green text-center p-20'>
            <p className='text-4xl mb-5'>Våre steg</p>
            <div className='flex flex-col md:flex-row justify-center'>
                {steps.map((step, i) => (
                    <button
                        key={i}
                        onClick={() => { setCurrentTab(i) }}
                        className={`text-sm m-4 translate-all duration-150 ${currentTab === i ? 'border-b-2 border-ei-green' : ''}`}
                    >
                        {i + 1}. {step.tabName}
                    </button>
                ))}
            </div>
            <div className='overflow-hidden relative'>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={
                            `transition-transform duration-500 
                                ${currentTab === i ? '' : 'absolute opacity-0 translate-y-full'}`
                        }
                    >
                        <div className='flex flex-wrap'>
                            <div className='md:basis-3/5 px-20'>
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                />
                            </div>
                            <div className='md:basis-2/5 flex- text-start'>
                                <p className='my-10 text-2xl font-bold'>
                                    {step.title}
                                </p>
                                <div className=''>
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
