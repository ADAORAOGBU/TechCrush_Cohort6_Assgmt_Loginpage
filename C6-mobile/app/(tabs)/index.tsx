
import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import styles from "@/styles/main2";

export default function HomeScreen (){
  // 1. State controlling visibility
  const [showForm, setShowForm] = useState(false);
    // 2. Separate states for each input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    // 3. Login Event
  const handleLoginPress = () => {
    setShowForm(true); // Shows input boxes when clicked
  };
const handleSubmit = () => { alert(`Logging in ${username}...`);
    // 2. Clear the inputs after submission)
  setUsername('');
  setPassword('');
    // 3. Go back to the original Login button
  setShowForm(false);
};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Image 
          style={{ height: 150, width: 150, marginBottom: 50, borderRadius: 40 }} 
          source={{ uri: "https://img.freepik.com/free-vector/smiling-scout-boy-sitting-showing-peace-sign_1308-182479.jpg?semt=ais_hybrid&w=740&q=80" }}
        />
        
        <View style={styles.Box}>
          {/* Updated Header */}
          <Text style={styles.textStyle}>Welcome TechCrush Cohort 6</Text>
        </View>

{/* THE BLUE LOGIN BUTTON */}
        {!showForm && (
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        )}
        
        {/* Conditional Rendering: This only shows if showForm is TRUE */}
        {showForm && (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter Username'
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
                  <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
               <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowForm(false)}>
           <Text style={styles.cancelButton}>CANCEL</Text>
          </TouchableOpacity>
          </View>
        )}
              
      </ScrollView>
    </SafeAreaView>
  );
}