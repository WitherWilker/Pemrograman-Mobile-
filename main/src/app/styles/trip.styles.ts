// [IDRIS] External styles: ringkasan trip, kartu hari, kartu fitur.
import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const trip = StyleSheet.create({
  // Ringkasan
  summaryCard: { backgroundColor: colors.deep, borderRadius: 20, padding: 20, marginBottom: 16 },
  summaryTitle: { color: colors.white, fontSize: 24, fontWeight: '800' },
  summaryText: { color: colors.white, opacity: 0.9, fontSize: 14, marginTop: 4 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 12 },
  chip: { backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 4, paddingHorizontal: 12, borderRadius: 999, marginRight: 8, marginBottom: 6 },
  chipText: { color: colors.white, fontSize: 12, fontWeight: '600' },
  costBox: { marginTop: 10, paddingTop: 12, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.3)' },
  costLabel: { color: colors.white, opacity: 0.85, fontSize: 13 },
  costValue: { color: colors.white, fontSize: 22, fontWeight: '800' },

  // Kartu hari
  dayCard: { backgroundColor: colors.card, borderRadius: 20, padding: 18, marginBottom: 14 },
  dayLabel: { color: colors.accent, fontWeight: '700', fontSize: 13 },
  dayTitle: { color: colors.ink, fontSize: 20, fontWeight: '800', marginBottom: 10 },
  stopRow: { flexDirection: 'row', paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.line },
  stopTime: { width: 56, color: colors.muted, fontWeight: '600', fontSize: 13 },
  stopBody: { flex: 1 },
  stopName: { color: colors.ink, fontSize: 16, fontWeight: '700' },
  stopDesc: { color: colors.muted, fontSize: 13, marginTop: 2 },
  stopMeta: { color: colors.deep, fontSize: 12, marginTop: 4 },
  emptyText: { color: colors.muted, fontSize: 14 },

  // Kartu fitur
  featureCard: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: 16, padding: 16, marginBottom: 10 },
  featureIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  featureBody: { flex: 1 },
  featureTitle: { color: colors.ink, fontSize: 16, fontWeight: '700' },
  featureText: { color: colors.muted, fontSize: 13, marginTop: 2 },
});
