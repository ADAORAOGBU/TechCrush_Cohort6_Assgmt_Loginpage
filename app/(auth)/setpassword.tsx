import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Alert 
} from 'react-native';
import { router } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../../store/useStore'; 

export default function SetPassword() {
  const { tempUser, setUser } = useStore();
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    const handleCreateAccount = () => {
  // 1. Validation Logic
  if (!password || password.length < 6) {
    Alert.alert("Error", "Password must be at least 6 characters");
    return;
  }
  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }

  // 2. Finalize the user
  if (tempUser) {
    // We "promote" the tempUser to a real profile
    setUser({
      ...tempUser,
     
    });

    
  } else {
    Alert.alert("Error", "Signup data missing. Please go back.");
    router.replace('./signup'); 
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="#3B62FF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Set Password</Text>
            <View style={{ width: 28 }} />
          </View>

          <View style={styles.form}>
            <Text style={styles.subtitle}>
              Hello {tempUser?.username || 'there'}! Create a secure password to finish setting up your account.
            </Text>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput 
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor="#A0AEC0"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons 
                    name={showPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#A0AEC0" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput 
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor="#A0AEC0"
                  secureTextEntry={!showPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
              <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, paddingHorizontal: 30 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 20
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
  subtitle: { fontSize: 16, color: '#718096', textAlign: 'center', marginVertical: 20, lineHeight: 24 },
  form: { marginTop: 20 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', color: '#1A1A1A', marginBottom: 10 },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    borderRadius: 15,
    paddingHorizontal: 18,
  },
  passwordInput: { flex: 1, paddingVertical: 18, fontSize: 15, color: '#1A1A1A' },
  createButton: { 
    backgroundColor: '#3B62FF', 
    padding: 20, 
    borderRadius: 35, 
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#3B62FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },
  createButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});