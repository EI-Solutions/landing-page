import { useTranslations } from 'next-intl';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import crossIcon from '/static/icons/cross.svg';
import Image from 'next/image';

interface ModalProps {
  content: string;
  children?: ReactNode;
  showing: boolean;
  setShowing: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ content, children, showing, setShowing }: ModalProps) => {
  const t = useTranslations(content);

  return (
    <div
      className={`${
        showing ? '' : 'invisible'
      } bg-slate-900 z-30 bg-opacity-25 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center align-center`}
    >
      <div
        className={`relative bg-white p-12 rounded-lg transition-all duration-300 w-4/5 h-4/5 translate-y-full opacity-0 ${
          showing ? 'translate-y-0 opacity-100' : ''
        }`}
      >
        <Image
          src={crossIcon}
          alt="Exit icon"
          onClick={() => {
            setShowing(false);
          }}
          className="absolute right-20 cursor-pointer"
        />
        <div className="flex flex-col justify-between w-full h-full">
          <div className="text-2xl text-black font-bold pb-8">{t('title')}</div>
          <div className="text-lg text-black overflow-y-scroll w-full h-full">
            {children}
          </div>
          <button
            className="rounded m-2 p-2 bg-ei-green"
            onClick={() => {
              setShowing(false);
            }}
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
