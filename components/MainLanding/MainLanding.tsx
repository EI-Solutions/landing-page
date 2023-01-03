import { useTranslations } from "next-intl";
import { BaseSyntheticEvent } from "react";


const MainLanding = () => {
    const t = useTranslations('MainLanding')

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
                className="bg-cover min-h-screen  bg-ei-darker-green/75 flex align-middle"
            >
                <div className="lg:w-1/2 py-5 lg:p-20">
                    <p className="text-2xl lg:text-5xl m-5">
                        {t('title')}
                    </p>
                    <p className="m-5">
                        {t('description')}
                    </p>
                    <div className="lg:flex-row flex-col flex text-lg text-center px-3">
                        <a
                            href="https://app.eisolutions.no"
                            className="bg-ei-dark-green p-5 w-full m-5"
                        >
                            {t('application')}
                        </a>
                        <a
                            href="mailto:contact@eisolutions.no"
                            className="bg-ei-green p-5 w-full m-5"
                        >
                            {t('demo')}
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainLanding