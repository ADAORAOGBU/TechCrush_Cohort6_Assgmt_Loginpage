// styles/main.ts
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2a2929',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  header: {
    borderRadius: '10',
    backgroundColor: 'blue'}
});

export default globalStyles;