// [ARIF] Satu kartu kota. Data diterima lewat props.
import { Alert, Image, Text, View } from 'react-native';
import { landing } from '../styles/landing.styles';
import { Destination } from '../types';
import PrimaryButton from './PrimaryButton';

type Props = { destination: Destination };

export default function DestinationCard({ destination }: Props) {
  const handlePlan = () => {
    Alert.alert('Plan a trip', 'You picked ' + destination.name + '!');
  };

  return (
    <View style={landing.destCard}>
      <Image source={{ uri: destination.image }} style={landing.destImage} />
      <View style={landing.destBody}>
        <Text style={landing.destName}>{destination.name}</Text>
        <Text style={landing.destDesc}>{destination.description}</Text>
        <PrimaryButton label="Plan trip" variant="outline" onPress={handlePlan} />
      </View>
    </View>
  );
}
