// [ARIF] Layout root expo-router (wajib ada). Modul 2: diganti <Stack>.
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
