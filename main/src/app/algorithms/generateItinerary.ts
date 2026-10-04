// [ADI] Inti aplikasi: preferensi -> itinerary. Versi Modul 1 (sederhana).
// Langkah: (1) filter kota & kategori, (2) urutkan rating, (3) bagi ke setiap hari.
import { DayPlan, Place, Stop, TripPreferences } from '../types';
import { formatTime } from '../utils/format';

const START_TIME = 9 * 60; // mulai 09:00
const TRAVEL_TIME = 30; // jeda perjalanan antar tempat (menit)

export function generateItinerary(prefs: TripPreferences, allPlaces: Place[]): DayPlan[] {
  // 1. FILTER: for loop biasa (primitive loop) + condition
  const matched: Place[] = [];
  for (let i = 0; i < allPlaces.length; i++) {
    const place = allPlaces[i];
    if (place.city !== prefs.city) {
      continue; // lewati kota lain
    }
    // some() menerima callback: true jika ada kategori yang cocok
    const isMatch = place.categories.some((c) => prefs.categories.includes(c));
    if (isMatch) {
      matched.push(place);
    }
  }

  // 2. URUTKAN: sort() menerima callback pembanding (rating tertinggi dulu)
  matched.sort((a, b) => b.rating - a.rating);

  // 3. BAGI KE HARI: for di dalam for
  const plans: DayPlan[] = [];
  let nextIndex = 0;
  for (let day = 1; day <= prefs.days; day++) {
    const stops: Stop[] = [];
    let time = START_TIME;

    for (let n = 0; n < prefs.placesPerDay; n++) {
      if (nextIndex >= matched.length) {
        break; // tempat habis
      }
      const place = matched[nextIndex];
      stops.push({ time: formatTime(time), place: place });
      time = time + place.duration + TRAVEL_TIME;
      nextIndex++;
    }

    plans.push({ day: day, stops: stops });
  }

  return plans;
}

// Total biaya tiket per orang: loop di dalam loop
export function getTotalCost(plans: DayPlan[]): number {
  let total = 0;
  for (const plan of plans) {
    for (const stop of plan.stops) {
      total = total + stop.place.cost;
    }
  }
  return total;
}
