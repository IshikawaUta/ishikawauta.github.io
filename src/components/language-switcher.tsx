
'use client';

import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: 'id', name: 'Indonesia', flag: '/flags/id.svg' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {i18n.language ? (
             <Image src={currentLanguage.flag} alt={currentLanguage.name} width={24} height={18} className="w-6 h-auto" />
          ) : (
            <Globe className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(lang => (
          <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
            <Image src={lang.flag} alt={lang.name} width={20} height={15} className="mr-2 h-auto w-5" />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
