import { useTranslations } from "next-intl"
import { Dispatch, SetStateAction } from "react"


interface ModalProps {
    content: string,
    modalCardClasses: string
    showing: boolean,
    setShowing: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ content, modalCardClasses, showing, setShowing }: ModalProps) => {

    const t = useTranslations(content)

    return (
        <div className={`${showing ? '' : 'invisible'} bg-slate-900 bg-opacity-25 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center align-center`}>
            <div className={`bg-white p-20 rounded-lg transition-all duration-300 w-3/5 h-3/5 translate-y-full opacity-0 ${showing ? modalCardClasses : ''}`}>
                <div className='flex flex-col justify-between w-full h-full'>
                    <div className='text-2xl text-black font-bold pb-3'>
                        {t('title')}
                    </div>
                    <div className='text-lg text-black overflow-y-scroll w-full h-full'>
                        {t('content')}
                    </div>
                    <button className="rounded p-2 bg-ei-green" onClick={() => { setShowing(false) }}>Understood</button>
                </div>
            </div>
        </div>
    )
}

export default Modal