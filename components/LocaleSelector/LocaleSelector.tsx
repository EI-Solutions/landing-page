import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface DrawerProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const LocaleSelector = ({ setDrawerOpen }: DrawerProps) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <select
      defaultValue={activeLocale}
      onChange={(event) => {
        setDrawerOpen(false);
        router.push(router.asPath, router.asPath, {
          locale: event.target.value,
        });
      }}
      className="bg-transparent uppercase p-2 cursor-pointer text-xl"
    >
      {locales?.map((locale) => (
        <option key={locale} value={locale} className="bg-ei-dark-green">
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LocaleSelector;
