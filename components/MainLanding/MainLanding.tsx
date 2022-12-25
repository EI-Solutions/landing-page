import { BaseSyntheticEvent } from "react";
import NavigationBar from "../NavigationBar/NavigationBar"
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'


const MainLanding = () => {

    const opacity = "opacity-10"
    const duration = 500

    const fadeToStart = (e: BaseSyntheticEvent) => {
        const element = e.target
        element.play();
        element.classList.remove(opacity);
        setTimeout(() => {
            element.classList.add(opacity);
        }, (element.duration / element.playbackRate - duration / 1000) * 1000)
    }

    return (
        <div>
            <video
                src="/static/videos/houses.mp4"
                autoPlay
                playsInline
                loop
                muted
                onEnded={fadeToStart}
                onCanPlay={fadeToStart}
                onPlay={fadeToStart}
                className={
                    `fixed -z-10 min-h-screen object-cover transition-opacity duration-[${duration}ms] blur-none`
                }
            >
            </video>
            <div
                className="bg-cover min-h-screen  bg-ei-darker-green/75"
            >

                <NavigationBar
                    backgroundClasses='bg-transparent'
                    textClasses='text-white'
                    icon={eisolutionsLogo}
                />
                <div className="lg:w-1/2 p-20 py-32">
                    <p className="text-3xl lg:text-5xl m-5">
                        Den første og mest automatiserte løsningen for analyse av eiendommer i henhold til EU-taksonomien
                    </p>
                    <p className="m-5">
                        Vi benytter oss av romlig analyse av data for å generere automatisk dokumentasjon for å avgjøre om prosjekter er innenfor miljøkravene i EU-taksonomien
                    </p>
                    <div className="lg:flex-row flex-col flex text-xl">
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

        </div >
    )
}

export default MainLanding