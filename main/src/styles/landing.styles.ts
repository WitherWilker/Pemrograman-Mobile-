// [ARIF] External styles: halaman utama, hero, kartu destinasi, tombol, footer.
import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const landing = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.bg },

  // Hero
  hero: { height: 560, backgroundColor: colors.deep },
  heroOverlay: { flex: 1, backgroundColor: 'rgba(8,20,26,0.5)', paddingTop: 60, paddingHorizontal: 22, paddingBottom: 32, justifyContent: 'space-between' },
  brand: { color: colors.white, fontSize: 24, fontWeight: '800' },
  heroTitle: { color: colors.white, fontSize: 46, fontWeight: '800', lineHeight: 50 },
  heroText: { color: colors.white, opacity: 0.9, fontSize: 16, lineHeight: 24, marginTop: 10, marginBottom: 20 },

  // Section
  section: { paddingHorizontal: 22, paddingTop: 32 },
  sectionTitle: { color: colors.ink, fontSize: 26, fontWeight: '800' },
  sectionSubtitle: { color: colors.muted, fontSize: 14, marginTop: 4, marginBottom: 16 },

  // Kartu destinasi
  destCard: { width: 260, backgroundColor: colors.card, borderRadius: 20, overflow: 'hidden', marginRight: 14 },
  destImage: { width: '100%', height: 150, backgroundColor: colors.deep },
  destBody: { padding: 16 },
  destName: { color: colors.ink, fontSize: 20, fontWeight: '800' },
  destDesc: { color: colors.muted, fontSize: 13, marginTop: 4, marginBottom: 14, minHeight: 36 },

  // Tombol
  buttonPrimary: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.accent, paddingVertical: 14, paddingHorizontal: 24, borderRadius: 999, minHeight: 48 },
  buttonOutline: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.card, borderWidth: 1.5, borderColor: colors.ink, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 999, minHeight: 48 },
  buttonTextLight: { color: colors.white, fontSize: 16, fontWeight: '700' },
  buttonTextDark: { color: colors.ink, fontSize: 15, fontWeight: '700' },

  // Footer
  footer: { marginTop: 32, padding: 28, backgroundColor: colors.deep, alignItems: 'center' },
  footerTitle: { color: colors.white, fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: 16 },
});
