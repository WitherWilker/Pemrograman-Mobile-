// [IDRIS] Kartu satu hari: daftar pemberhentian (pakai .map()).
import { Text, View } from 'react-native';
import { trip } from '../styles/trip.styles';
import { DayPlan } from '../types';
import { formatRupiah, getRatingLabel } from '../utils/format';

type Props = { plan: DayPlan };

export default function DayCard({ plan }: Props) {
  return (
    <View style={trip.dayCard}>
      <Text style={trip.dayLabel}>DAY {plan.day}</Text>
      <Text style={trip.dayTitle}>{plan.stops.length} places to visit</Text>

      {/* Condition: kalau tidak ada tempat, tampilkan pesan */}
      {plan.stops.length === 0 ? (
        <Text style={trip.emptyText}>No more places match your preferences. Try another category.</Text>
      ) : (
        plan.stops.map((stop) => (
          <View key={stop.place.id} style={trip.stopRow}>
            <Text style={trip.stopTime}>{stop.time}</Text>
            <View style={trip.stopBody}>
              <Text style={trip.stopName}>{stop.place.name}</Text>
              <Text style={trip.stopDesc}>{stop.place.description}</Text>
              {/* inline style: warna rating tergantung nilainya */}
              <Text style={[trip.stopMeta, { color: stop.place.rating >= 4.6 ? '#1F8A5B' : '#0F4C5C' }]}>
                ★ {stop.place.rating} · {getRatingLabel(stop.place.rating)} · {stop.place.duration} min · {formatRupiah(stop.place.cost)}
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
}
