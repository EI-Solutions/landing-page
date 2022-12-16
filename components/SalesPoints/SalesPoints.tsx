import Image from 'next/image'
import desktopPage from '/assets/salepoints/desktop-page.png'
import laptopPages from '/assets/salepoints/laptop-pages.png'

import automate from '/assets/icons/automate.svg'
import fileCabinet from '/assets/icons/file-cabinet.svg'
import fileTree from '/assets/icons/file-tree.svg'
import check from '/assets/icons/check.png'

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
            <div className="dark-green p-20 flex flex-row">
                <div className='basis-4/5'>
                    <b className='text-white text-3xl'>
                        Den første og mest automatiserte løsningen for analyse av eiendommer i henhold til EU-taksonomien
                    </b>
                    <p className='text-md text-white'>
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <ul className='text-sm mt-10'>
                        {iconListItems.map(item => (
                            <li key={item.title}>
                                <div className='flex-row flex py-4'>
                                    <Image 
                                        width={45}
                                        src={item.image}
                                        alt={item.alt}
                                        className='flex-none'
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
            <div className="ei-gradient-radial p-20 flex flex-row">
                <div>
                    <Image
                        src={desktopPage}
                        alt="Laptop"
                    />
                </div>
                <div className='basis-3/5'>
                    <b className='text-white text-3xl'>
                        Den første og mest automatiserte løsningen for analyse av eiendommer i henhold til EU-taksonomien
                    </b>
                    <p className='text-md text-white'>
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <ul className='text-sm mt-10'>
                        {checkmarkedItems.map((item, i) => (
                            <li key={i}>
                                <div className='flex-row flex py-4'>
                                    <Image 
                                        width={45}
                                        src={check}
                                        alt='checkmark'
                                        className='flex-none'
                                    />
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