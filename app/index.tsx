import { Redirect } from 'expo-router';
import useStore from '../store/useStore';

export default function Index() {
  const { profile } = useStore();

  // If no profile, go to Get Started. If profile exists, go to Dashboard.
  return <Redirect href={profile ? "./(tabs)" : "./(auth)"} />;
}