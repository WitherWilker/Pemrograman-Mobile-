// [ADI] Array of objects: daftar kota. Tambah kota = tambah satu objek.
import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    description: 'Culture, heritage, nature, food, and vibrant city experiences.',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
  },
  {
    id: 'bali',
    name: 'Bali',
    description: 'Beaches, nature, culture, nightlife, and tropical experiences.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    id: 'malang',
    name: 'Malang',
    description: 'Mountains, nature, city attractions, culinary, and Batu tourism.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80',
  },
];
