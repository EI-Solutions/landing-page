import Image from 'next/image'
import desktopPage from '/static/salepoints/desktop-page.png'
import laptopPages from '/static/salepoints/laptop-pages.png'

import automate from '/static/icons/automate.svg'
import fileCabinet from '/static/icons/file-cabinet.svg'
import fileTree from '/static/icons/file-tree.svg'
import check from '/static/icons/check.png'

const SalePoints = () => {

    const iconListItems = [
        {
            title: 'Automatisering',
            description: 'Fast mapping and automized reports through our simple application and fast fill-out form.',
            image: automate,
            alt: 'Automate'
        },
        {
            title: 'Systematisering',
            description: 'A standardized and fast  process to give you thorough report for all your plots.',
            image: fileTree,
            alt: 'File tree'
        },
        {
            title: 'Organisering',
            description: 'Easy to understand application and easy to understand reports with all the information needed.',
            image: fileCabinet,
            alt: 'File cabinet'
        },
    ]

    const checkmarkedItems = [
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ]

    return (
        <>
            <div className="bg-ei-dark-green p-20 flex flex-row">
                <div className='basis-4/5'>
                    <b className='text-3xl'>
                        Den første og mest automatiserte løsningen for analyse av eiendommer i henhold til EU-taksonomien
                    </b>
                    <p className='text-md'>
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <ul className='text-sm mt-10'>
                        {iconListItems.map(item => (
                            <li key={item.title}>
                                <div className='flex-row flex py-4'>
                                    <Image
                                        
                                        src={item.image}
                                        alt={item.alt}
                                        className='flex-none w-12'
                                    />
                                    <div className='ml-10 mr-40'>
                                        <b>{item.title}</b>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image
                        src={laptopPages}
                        alt="Laptop"
                    />
                </div>
            </div>
            <div className="
                bg-gradient-radial from-ei-green to-ei-dark-green
                p-20 flex flex-row
            ">
                <div>
                    <Image
                        src={desktopPage}
                        alt="Laptop"
                    />
                </div>
                <div className='basis-3/5 px-20'>
                    <b className='text-3xl'>
                        Vi generer unike klimarapporter for din eiendom
                    </b>
                    <p className='text-md mt-10'>
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <ul className='text-sm mt-10'>
                        {checkmarkedItems.map((item, i) => (
                            <li key={i}>
                                <div className='flex-row flex py-4'>
                                    <div className='aspect-square flex-none'>
                                        <Image
                                            src={check}
                                            alt='Checkmark'
                                        />
                                    </div>
                                    <div className='ml-10'>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SalePoints