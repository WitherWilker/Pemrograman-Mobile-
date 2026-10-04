// [ADI] Array of objects: tempat wisata (data dummy/estimasi).
import { Place } from '../types';

export const places: Place[] = [
  // ===== Yogyakarta =====
  { id: 'y1', city: 'Yogyakarta', name: 'Malioboro Street', categories: ['city', 'shopping', 'culinary'], rating: 4.6, cost: 0, duration: 120, openHours: '08:00 - 22:00', description: 'Iconic shopping street with street food and batik.' },
  { id: 'y2', city: 'Yogyakarta', name: 'Keraton Yogyakarta', categories: ['culture', 'city'], rating: 4.6, cost: 15000, duration: 90, openHours: '08:30 - 14:00', description: "The Sultan's palace and royal museum." },
  { id: 'y3', city: 'Yogyakarta', name: 'Prambanan Temple', categories: ['culture', 'sunset'], rating: 4.7, cost: 50000, duration: 150, openHours: '06:30 - 17:00', description: 'Largest Hindu temple complex in Indonesia.' },
  { id: 'y4', city: 'Yogyakarta', name: 'Parangtritis Beach', categories: ['beach', 'nature', 'sunset'], rating: 4.4, cost: 10000, duration: 120, openHours: '06:00 - 19:00', description: 'Famous south coast beach, great for sunset.' },
  { id: 'y5', city: 'Yogyakarta', name: 'Breksi Cliff', categories: ['nature', 'sunset'], rating: 4.5, cost: 15000, duration: 90, openHours: '07:00 - 21:00', description: 'Carved limestone cliff park.' },

  // ===== Bali =====
  { id: 'b1', city: 'Bali', name: 'Kuta Beach', categories: ['beach', 'sunset'], rating: 4.4, cost: 0, duration: 120, openHours: '06:00 - 20:00', description: 'Lively beach famous for surfing and sunsets.' },
  { id: 'b2', city: 'Bali', name: 'Uluwatu Temple', categories: ['culture', 'nature', 'sunset'], rating: 4.7, cost: 50000, duration: 120, openHours: '09:00 - 18:00', description: 'Cliff-top sea temple with ocean views.' },
  { id: 'b3', city: 'Bali', name: 'Tegallalang Rice Terrace', categories: ['nature'], rating: 4.5, cost: 20000, duration: 120, openHours: '08:00 - 18:00', description: 'Layered rice terraces near Ubud.' },
  { id: 'b4', city: 'Bali', name: 'Melasti Beach', categories: ['beach', 'nature'], rating: 4.6, cost: 15000, duration: 120, openHours: '08:00 - 18:00', description: 'White sand beach below limestone cliffs.' },
  { id: 'b5', city: 'Bali', name: 'Ubud Monkey Forest', categories: ['nature', 'family'], rating: 4.5, cost: 80000, duration: 90, openHours: '08:30 - 18:00', description: 'Sacred forest sanctuary with macaques.' },
  { id: 'b6', city: 'Bali', name: 'Canggu', categories: ['beach', 'cafe'], rating: 4.5, cost: 0, duration: 150, openHours: '08:00 - 22:00', description: 'Surf town with cafes and rice-field views.' },
  { id: 'b7', city: 'Bali', name: 'Jimbaran Bay', categories: ['beach', 'culinary', 'sunset'], rating: 4.5, cost: 150000, duration: 90, openHours: '16:00 - 22:00', description: 'Grilled seafood on the beach at sunset.' },

  // ===== Malang =====
  { id: 'm1', city: 'Malang', name: 'Jatim Park 2', categories: ['family', 'entertainment'], rating: 4.5, cost: 130000, duration: 240, openHours: '09:00 - 17:00', description: 'Zoo, museum, and rides in Batu.' },
  { id: 'm2', city: 'Malang', name: 'Museum Angkut', categories: ['culture', 'family'], rating: 4.5, cost: 100000, duration: 150, openHours: '12:00 - 20:00', description: 'Transportation museum with themed zones.' },
  { id: 'm3', city: 'Malang', name: 'Kampung Warna-Warni', categories: ['city', 'instagrammable'], rating: 4.3, cost: 5000, duration: 90, openHours: '08:00 - 17:00', description: 'Colorful riverside village.' },
  { id: 'm4', city: 'Malang', name: 'Coban Rondo Waterfall', categories: ['nature', 'family'], rating: 4.4, cost: 35000, duration: 120, openHours: '08:00 - 17:00', description: 'Waterfall surrounded by pine forest.' },
  { id: 'm5', city: 'Malang', name: 'Paralayang Batu', categories: ['adventure', 'nature'], rating: 4.5, cost: 25000, duration: 120, openHours: '08:00 - 18:00', description: 'Paragliding hill with a wide valley view.' },
];
