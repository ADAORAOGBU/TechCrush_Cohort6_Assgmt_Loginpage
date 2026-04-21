import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { router } from 'expo-router'; 
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../../store/useStore'; 

export default function Login() {
  const { setUser } = useStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

      setUser({ 
      username: 'Savannah Nguyen', 
      email: email,
      mobile: '+1 234 567 890'
    }); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.replace('/(auth)')}>
              <Ionicons name="chevron-back" size={28} color="#3B62FF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Welcome Back</Text>
            <View style={{ width: 28 }} /> 
          </View>

          <View style={styles.form}>
            <Text style={styles.subtitle}>Login to your account</Text>

            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput 
                style={styles.input}
                placeholder="example@example.com"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

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

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Social Logins */}
            <View style={styles.socialContainer}>
              <Text style={styles.socialText}>or login with</Text>
              <View style={styles.socialIcons}>
                <TouchableOpacity style={styles.socialCircle}>
                  <FontAwesome name="google" size={20} color="#DB4437" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialCircle}>
                  <FontAwesome name="facebook" size={20} color="#4267B2" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Link to Signup */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
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
  subtitle: { fontSize: 16, color: '#718096', textAlign: 'center', marginVertical: 20 },
  form: { marginTop: 20 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', color: '#1A1A1A', marginBottom: 10 },
  input: { 
    backgroundColor: '#F0F4FF', 
    padding: 18, 
    borderRadius: 15, 
    fontSize: 15,
    color: '#1A1A1A'
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    borderRadius: 15,
    paddingHorizontal: 18,
  },
  passwordInput: { flex: 1, paddingVertical: 18, fontSize: 15, color: '#1A1A1A' },
  forgotBtn: { alignSelf: 'flex-end', marginBottom: 25 },
  forgotText: { color: '#3B62FF', fontWeight: '600', fontSize: 14 },
  loginButton: { 
    backgroundColor: '#3B62FF', 
    padding: 20, 
    borderRadius: 35, 
    alignItems: 'center',
  },
  loginButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  socialContainer: { alignItems: 'center', marginTop: 30 },
  socialText: { color: '#718096', marginBottom: 15 },
  socialIcons: { flexDirection: 'row', gap: 20 },
  socialCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 40 },
  footerText: { color: '#718096' },
  signupLink: { color: '#3B62FF', fontWeight: 'bold' }
});