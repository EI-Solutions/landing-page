import Image from 'next/image'
import figure from '/static/figures/snake.png'

const AboutInfo = () => {
    return (
        <div className='bg-ei-green flex flex-col-reverse lg:flex-row pb-20 px-20'>
            <div className='basis-4/5'>
                <b className='text-4xl my-10'>Om oss</b>
                <p className='mt-8'>Ei Solutions is a technology company dedicated to enabling the green transformation of the real estate industry. Our analysis engine generates the sustainability insights the industry needs to comply with the EU-taxonomy’s screening requirements with just a click. This provides an overview of potential red flags instantly for real estate owners in order to target the sustainability issues that really matters in the portfolio.</p>
            </div>
            <div>
                <Image 
                    src={figure}
                    alt='Snake figure'
                />
            </div>
        </div>
    )    
}

export default AboutInfo
