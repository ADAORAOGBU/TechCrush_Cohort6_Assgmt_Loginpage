import React, { useState } from 'react';
import {useRouter} from 'expo-router';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../../store/useStore'; 
import {styles} from '../../styles/dashboard';

const DOCTORS = [
  { id: '1', name: 'Dr. Esther', specialty: 'Dentist', rating: 4.5, image: require('../../assets/asian-doctor-hero.png'), type: 'favourite' },
  { id: '2', name: 'Dr. Warren', specialty: 'Physician', rating: 4.8, image: require('../../assets/indian-doctor-hero.png'), type: 'favourite' },
  { id: '3', name: 'Dr. Jenny Wilson', specialty: 'Neurologist', clinic: 'Vcare Clinic', rating: 5.0, reviews: 332, image: require('../../assets/caucasian-doctor-hero.png'), type: 'top' }
];

export default function Dashboard() {
  const { profile, setUser, logout } = useStore();
  const router = useRouter();
  const handleLogout = () => {
  // Option A: Use the dedicated logout function from your store
  if (logout) {
    logout(); 
  } else {
    // Option B: Manually clear it if logout() isn't fully written yet
    setUser(null); 
  }
    // Always redirect to the root of the auth group
  router.replace('/(auth)'); 
};
  const [activeCategory, setActiveCategory] = useState('🔥 All');
  const categories = ['🔥 All', '🤒 Fever', '🤧 Cough', '🤢 Nauseated'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* SECTION 1: Blue Header */}
        <View style={styles.header}>
          <View style={styles.userInfoRow}>
            <Image 
              source={{ uri: "https://media.licdn.com/dms/image/v2/D4D03AQG-Z01SOaeICA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718215886613?e=1777507200&v=beta&t=OZhDXBeIo6BEJ65I4eWSmO14uC-bZogiBez43SwRO-8" }} 
              style={styles.avatar} 
            />
            <View>
              <Text style={styles.welcomeText}>Hello, Welcome 👋</Text>
              <Text style={styles.userName}>{profile?.username || 'Savannah Nguyen'}</Text>
            </View>
          </View>

          {/* LOGOUT BUTTON */}
            <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
              <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="gray" />
            <TextInput placeholder="Search Doctor..." style={{ marginLeft: 10, flex: 1 }} />
          </View>
        
        {/* SECTION 2: Categories */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item) => {
              const isActive = activeCategory === item;
              return (
                <TouchableOpacity 
                  key={item} 
                  style={[styles.categoryBadge, isActive && styles.activeCategory]}
                  onPress={() => setActiveCategory(item)}
                >
                  <Text style={[styles.categoryText, isActive && styles.activeText]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

       {/* SECTION 3: Favourite Doctors (Horizontal) */}
<View style={styles.section}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Favourite Doctors</Text>
    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
  </View>
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={DOCTORS.filter(d => d.type === 'favourite')} // Shows Esther & Warren
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardSub}>{item.specialty}</Text>
      </View>
    )}
  />
</View>

{/* SECTION 4: Top Doctors (Vertical) */}
<View style={styles.section}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Top Doctors</Text>
    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
  </View>
  
  
  {DOCTORS.filter(d => d.type === 'top').map((doc) => (
    <View key={doc.id} style={styles.topDoctorCard}>
      <Image source={doc.image} style={styles.topDoctorImage} />
      <View style={styles.topDoctorInfo}>
        <Text style={styles.topDoctorName}>{doc.name}</Text>
        <Text style={styles.topDoctorSub}>{doc.specialty} | {doc.clinic}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{doc.rating} ({doc.reviews} reviews)</Text>
        </View>
      </View>
    </View>
  ))}
</View>
      </ScrollView>
    </SafeAreaView>
  );
}

