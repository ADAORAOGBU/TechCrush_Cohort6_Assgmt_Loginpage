import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView 
} from 'react-native';
import { router } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../../store/useStore'; 

export default function Signup() {
  const { setTempUser } = useStore();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleNext = () => {
    if (!name || !email || !mobile) {
      alert("Please fill in all fields");
      return;
    }

    // Save data to the "Cloud" (Zustand)
    setTempUser({
      username: name,
      email: email,
      mobile: mobile
    });

    // Move to the next screen
    router.push('./setpassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={28} color="#3B62FF" />
            </TouchableOpacity>

            <View style={styles.textHeader}>
              <Text style={styles.title}>New Account</Text>
              <Text style={styles.subtitle}>Fill in your details to get started</Text>
            </View>

            <View style={styles.form}>
              {/* Full Name */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Savannah Nguyen"
                  placeholderTextColor="#A0AEC0"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              {/* Email */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="savannah@example.com"
                  placeholderTextColor="#A0AEC0"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* Mobile Number */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="+1 234 567 890"
                  placeholderTextColor="#A0AEC0"
                  keyboardType="phone-pad"
                  value={mobile}
                  onChangeText={setMobile}
                />
              </View>

              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next Step</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <TouchableOpacity onPress={() => router.push('./login')} style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account? <Text style={styles.loginLink}>Log In</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { paddingHorizontal: 30, paddingBottom: 40 },
  backBtn: { marginTop: 20, marginLeft: -10 },
  textHeader: { marginTop: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1A1A1A' },
  subtitle: { fontSize: 16, color: '#718096', marginTop: 10 },
  form: { marginTop: 40 },
  inputGroup: { marginBottom: 25 },
  label: { fontSize: 16, fontWeight: '600', color: '#1A1A1A', marginBottom: 10 },
  input: { 
    backgroundColor: '#F0F4FF', 
    padding: 18, 
    borderRadius: 15, 
    fontSize: 16,
    color: '#1A1A1A'
  },
  nextButton: { 
    backgroundColor: '#3B62FF', 
    padding: 20, 
    borderRadius: 35, 
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#3B62FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },
  nextButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  footer: { marginTop: 30, alignItems: 'center' },
  footerText: { color: '#718096', fontSize: 14 },
  loginLink: { color: '#3B62FF', fontWeight: 'bold' }
});