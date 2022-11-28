import { ProductToSearch } from '@/types/product';

export const productToSearchList: ProductToSearch[] = [
  {
    id: '1',
    name: 'jamón cocido',
    brand: ['paladini'],
    type: ['sodio'],
    package: '150',
    fullName: 'Jamon Cocido Paladini reducido en sodio 150g',
  },
  {
    id: '2',
    name: 'mayonesa',
    brand: ['hellmann', 'hellmanns', 'hellmann´s'],
    type: ['clasica', 'regular'],
    package: '475',
    fullName: 'Mayonesa clasica Hellmanns 475g',
  },
  {
    id: '3',
    name: 'leche',
    brand: ['la serenísima'],
    type: ['entera'],
    package: 'sachet',
    fullName: 'Leche entera clasica La serenisima x litro',
  },
];
