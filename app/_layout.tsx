import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import useStore from '../store/useStore';

export default function RootLayout() {
  const { profile } = useStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // 1. Determine if we are currently inside the (tabs) folder
    const inTabsGroup = segments[0] === '(tabs)';

    // 2. If profile exists but we are in (auth), move to (tabs)
    if (profile && !inTabsGroup){
      router.replace('/(tabs)');
    } 
    // 3. If profile is gone (logout) but we are in (tabs), move to (auth)
    else if (!profile && inTabsGroup) {
      router.replace('/(auth)');
    }
  }, [profile, segments]); // RUNS EVERY TIME PROFILE CHANGES

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}