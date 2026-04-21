import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  imageWrapper: {
        justifyContent: 'center',
    alignItems: 'center',
  },
  
  blueText: {
    color: '#3B62FF',
  },
  
  loginLink: {
    marginTop: 25,
    alignItems: 'center',
    paddingBottom: 20
  },
  loginLabel: {
    color: '#718096',
    fontSize: 15,
  },
  loginBlue: {
    color: '#3B62FF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  
  container: { flex: 1 },
  safeArea: { flex: 1 },
  
  topSection: {
    flex: 1.2, 
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  heroImage: {
    width: '120%',
    height: '100%',
    resizeMode: 'cover',
    transform: [{ scale: 1.2 }], // Increase this number until he fills the screen
  marginBottom: -40,           // This pulls his feet down to the card

  },

  whiteCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 22,
  },

  pagination: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24, // Longer dot like in the design
    backgroundColor: '#3B62FF',
  },

  buttonContainer: {
    width: '100%',
  },
  getStartedBtn: {
    backgroundColor: '#3B62FF',
    paddingVertical: 18,
    borderRadius: 15, // Match the square-ish rounded look in the screenshot
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
