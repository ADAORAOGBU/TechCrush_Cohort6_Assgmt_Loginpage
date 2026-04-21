import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions, 
  Image, 
  TouchableOpacity, 
  } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../../store/useStore'; 
import {styles} from '../../styles/getstarted'

const { width, height } = Dimensions.get('window');
export default function GetStarted() {
  const { setUser } = useStore(); 

  const handleQuickStart = () => {
    setUser({
      username: 'Savannah Nguyen',
      email: 'savannah@example.com',
      mobile: '+1 234 567 890'
    });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4C6FFF', '#899add']}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Top Section: The Doctor Image */}
        <View style={styles.topSection}>
          <Image 
            source={require('../../assets/doctor-hero.png')} 
            style={styles.heroImage}
            
          />
        </View>

        {/* Lower Section: The White Card */}
        <View style={styles.whiteCard}>
          <View style={styles.textSection}>
            <Text style={styles.title}>
              More Comfortable Chat With the Doctor
            </Text>
            <Text style={styles.description}>
              Book an appointment with the doctor. Chat with doctor via virtual appointment and get consultation.
            </Text>
          </View>

          {/* Dots/Pagination Indicator */}
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>

        
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.getStartedBtn}
              onPress={handleQuickStart} 
            >
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
         <TouchableOpacity 
              style={styles.loginLink}
              onPress={() => router.push('/(auth)/login')}
            >
              <Text style={styles.loginLabel}> Existing account? 
                <Text style={styles.loginBlue}>Login here</Text>
              </Text>
            </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}

