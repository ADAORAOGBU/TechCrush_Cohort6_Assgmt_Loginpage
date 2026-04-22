import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        flexGrow: 1
  },
  Box: {
    marginBottom: 20,
    borderRadius: '10',
    backgroundColor: 'red',
    padding: 30
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center', 
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'italic'
  },
  inputBox: {
    borderColor:'green',
    borderWidth:2,
    padding:10,
    marginTop:10,
    borderRadius:10
  },
  button: {
    backgroundColor: '#007AFF', // Solid Blue for Login
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  loginButton:{
    backgroundColor: '#2c2ad2', //blue for Login
    paddingVertical: 15,
    paddingHorizontal:60,
    elevation:3,
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#28a745', // Green for Submit/Success
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: 'grey', // Grey for Cancel
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',   
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '800',
    alignSelf: 'flex-start',
  },

  formContainer: {
    width: '85%',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
  }
});
export default styles;