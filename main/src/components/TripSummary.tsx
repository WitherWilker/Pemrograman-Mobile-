// [IDRIS] Ringkasan trip (kota, hari, traveler, kategori, estimasi biaya).
import { Text, View } from 'react-native';
import { trip } from '../styles/trip.styles';
import { TripPreferences } from '../types';
import { formatRupiah } from '../utils/format';

type Props = {
  prefs: TripPreferences;
  totalPerPerson: number;
};

export default function TripSummary({ prefs, totalPerPerson }: Props) {
  const totalAll = totalPerPerson * prefs.travelers;

  return (
    <View style={trip.summaryCard}>
      <Text style={trip.summaryTitle}>
        {prefs.city} · {prefs.days} {prefs.days === 1 ? 'Day' : 'Days'}
      </Text>
      <Text style={trip.summaryText}>{prefs.travelers} travelers</Text>

      <View style={trip.chipRow}>
        {prefs.categories.map((c) => (
          <View key={c} style={trip.chip}>
            <Text style={trip.chipText}>{c}</Text>
          </View>
        ))}
      </View>

      <View style={trip.costBox}>
        <Text style={trip.costLabel}>Attraction tickets (per person)</Text>
        <Text style={trip.costValue}>{formatRupiah(totalPerPerson)}</Text>
        <Text style={[trip.costLabel, { marginTop: 6 }]}>For {prefs.travelers} travelers: {formatRupiah(totalAll)}</Text>
      </View>
    </View>
  );
}
