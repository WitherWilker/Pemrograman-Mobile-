// [ARIF] Bagian atas halaman: gambar, judul, tombol Start Planning.
import { Alert, ImageBackground, Text, View } from 'react-native';
import { landing } from '../styles/landing.styles';
import PrimaryButton from './PrimaryButton';

export default function HeroSection() {
  // Fungsi bawaan Alert.alert(judul, pesan)
  const handleStart = () => {
    Alert.alert('Start Planning', 'The planner form will be added in the next module.');
  };

  return (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80' }} style={landing.hero}>
      <View style={landing.heroOverlay}>
        <Text style={landing.brand}>Triply</Text>

        <View>
          <Text style={landing.heroTitle}>{'Plan Less.\nTravel More.'}</Text>
          <Text style={landing.heroText}>
            Create a personalized holiday itinerary in minutes. Choose your destination, tell us what you love, and let us organize your trip.
          </Text>
          <PrimaryButton label="Start Planning" icon="arrow-forward" onPress={handleStart} />
        </View>
      </View>
    </ImageBackground>
  );
}
