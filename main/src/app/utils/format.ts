// [ADI] Custom function: pemformat teks. Dipanggil dari komponen & algoritma.

// 150000 -> "Rp150.000", 0 -> "Free"
export function formatRupiah(amount: number): string {
  if (amount === 0) {
    return 'Free';
  }
  return 'Rp' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// 570 -> "09:30" (menit sejak tengah malam -> jam:menit)
export function formatTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
}

// Conditions: label sesuai rating
export function getRatingLabel(rating: number): string {
  if (rating >= 4.6) {
    return 'Top rated';
  } else if (rating >= 4.4) {
    return 'Highly rated';
  } else {
    return 'Good';
  }
}
