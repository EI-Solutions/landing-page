import NavigationBar from "../NavigationBar/NavigationBar"
import eisolutionsLogo from '/static/eisolutions-logo.svg'


const MainLanding = () => {
    return (
        <div>
            <div 
                style={{backgroundImage: 'url("/static/videos/houses-topdown.png")'}} 
                className="bg-cover min-h-screen bg-ei-dark-green/80 bg-blend-darken"
            >
                <NavigationBar isTransparent={true} icon={eisolutionsLogo} />
                <div className="w-1/2 p-20">
                    <p className="text-5xl m-5">
                        Den første og mest automatiserte løsningen for analyse av eiendommer i henhold til EU-taksonomien
                    </p>
                    <p className="m-5">
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <div className="flex-row flex text-xl">
                        <a
                            href="https://app.eisolutions.no"
                            className="bg-ei-dark-green p-5 px-8 m-5"
                        >
                            Til applikasjonen
                        </a>
                        <a
                            href="mailto:contact@eisolutions.no"
                            className="bg-ei-green p-5 px-8 m-5"
                        >
                            Forespør demo
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainLanding