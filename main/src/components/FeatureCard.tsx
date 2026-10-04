// [IDRIS] Satu kartu fitur dengan ikon dari @expo/vector-icons.
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { colors } from '../styles/theme';
import { trip } from '../styles/trip.styles';
import { Feature } from '../types';

type Props = { feature: Feature };

export default function FeatureCard({ feature }: Props) {
  return (
    <View style={trip.featureCard}>
      <View style={trip.featureIcon}>
        <Ionicons name={feature.icon} size={22} color={colors.accent} />
      </View>
      <View style={trip.featureBody}>
        <Text style={trip.featureTitle}>{feature.title}</Text>
        <Text style={trip.featureText}>{feature.text}</Text>
      </View>
    </View>
  );
}
