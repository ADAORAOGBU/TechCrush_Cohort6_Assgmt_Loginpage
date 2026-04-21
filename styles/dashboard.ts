import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FE' },
  header: { 
    backgroundColor: '#4C6FFF', 
    padding: 25, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    paddingTop: 50
  },
  userInfoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 55, height: 55, borderRadius: 27.5, marginRight: 15, borderWidth: 2, borderColor: 'rgba(255,255,255,0.3)' },
  welcomeText: { color: 'white', opacity: 0.8, fontSize: 14 },
  userName: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  searchBar: { backgroundColor: 'white', flexDirection: 'row', padding: 12, borderRadius: 15, marginTop: 20 },
  section: { paddingHorizontal: 20, marginTop: 20 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  seeAll: { color: '#3B62FF', fontWeight: '600' },
  categoryBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, marginRight: 12, elevation: 2 },
  activeCategory: { backgroundColor: '#4C6FFF' },
  categoryText: { fontSize: 14, fontWeight: '500', color: '#1A1A1A' },
  activeText: { color: '#FFFFFF' },
  card: { backgroundColor: 'white', padding: 10, borderRadius: 20, marginRight: 15, width: 150, elevation: 3 },
  cardImage: { width: '100%', height: 100, borderRadius: 15 },
  cardName: { fontWeight: 'bold', marginTop: 10 },
  cardSub: { color: 'gray', fontSize: 12, marginBottom: 5 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  
  topDoctorCard: {
    flexDirection: 'row', 
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    alignItems: 'center',
  },
  topDoctorImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#F0F4FF',
  },
  topDoctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  topDoctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  topDoctorSub: {
    fontSize: 13,
    color: '#718096',
    marginVertical: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#4A5568',
    fontWeight: '600',
  },
  logoutBtn: {
    padding: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle glass effect
  borderRadius: 10,
  },
});
