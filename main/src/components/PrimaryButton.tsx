// [ARIF] Tombol yang dipakai ulang. Ikon dari @expo/vector-icons.
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import { landing } from '../styles/landing.styles';
import { colors } from '../styles/theme';

type Props = {
  label: string;
  onPress: () => void; // callback function: dijalankan saat tombol ditekan
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: 'primary' | 'outline';
};

export default function PrimaryButton({ label, onPress, icon, variant = 'primary' }: Props) {
  const isOutline = variant === 'outline';

  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={isOutline ? landing.buttonOutline : landing.buttonPrimary}>
      <Text style={isOutline ? landing.buttonTextDark : landing.buttonTextLight}>{label}</Text>
      {icon && <Ionicons name={icon} size={18} color={isOutline ? colors.ink : colors.white} style={{ marginLeft: 8 }} />}
    </Pressable>
  );
}
