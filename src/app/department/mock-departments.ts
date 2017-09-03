import { Department } from './department';

export const DEPARTMENTS: Department[] = [
  {id: 1, name: 'Juhtkond', manager: 'Tõnu Terane', description: 'Ettevõtte juhtkond tegeleb ettevõtte juhtimisega.'},
  {id: 2, name: 'Finantsosakond', manager: 'Peeter Meeter', description: 'Finantsosakonna ülesandeks on jälgida finantsdistipliini.'},
  {id: 3, name: 'Müügiosakond', manager: 'Rein Vihm', description: 'Müügiosakond tegeleb igapäevaselt uute klientidega ja otsib uusi.'},
  {id: 4, name: 'Logistika', manager: 'Vladimir Ivanov', description: 'Logistika tellib tooraineid ja korraldab kaubaveo klientideni.'},
  {id: 5, name: 'Tootmine', manager: 'Mati Maasikas', description: 'Tootmine valmistab tellimustele vastavalt tooteid.'},
  {id: 6, name: 'IT-osakond', manager: 'Jüri Mets', description: 'IT hoiab olemasolevat arvutiparki töös ja arendab uusi rakendusi.'}
];
