import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';  // Adjust the path as necessary

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Navigate to HomeScreen and pass the name and email as parameters
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../pictures/iPhone X.png')}
          style={styles.statusBar}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.jobizzText}>Jobizz</Text>
      <Image source={require('../../pictures/Group 46.png')} style={styles.filterIcon} />
      <View style={styles.container}>
       
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomButton title="Login" onPress={handleLogin} />
      </View>
      <Image source={require('../../pictures/Group 52.png')} style={styles.filterIcon2} />
      <Image source={require('../../pictures/Group 57.png')} style={styles.filterIcon3} />
      <Text style={styles.accountText}>
        <Text style={styles.transparentText}>Have an account? </Text>
        <Text style={styles.registerText}>Register</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBarContainer: {
    width: '100%',
    height: 40, // Adjust height as needed for your status bar image
  },
  statusBar: {
    width: '100%',
    height: '100%',
  },
  jobizzText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: -0.02 * 22, // -2% of font size
    textAlign: 'left',
    color: '#356899',
    marginTop: 90, 
    marginBottom: 80, 
    marginLeft: 25,
    top: 110,
  },
  filterIcon: {
    width: 320,
    height: 90,
    position: 'absolute',
    top: 300,
    left: 24,
    opacity: 1,  // Assuming you want it visible; adjust as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    bottom: 30,
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 8,
    borderRadius: 10,  // Added border radius
  },
  filterIcon2: {
    width: 290,  // Specify the width
    height: 23,  // Specify the height
    position: 'absolute',
    top: 800,  // Adjust top position to place it under the text inputs
    left: (width - 290) / 2,  // Center align based on screen width
    opacity: 1,
    
  },
  filterIcon3: {
    width: 290,  // Specify the width
    height: 50,  // Specify the height
    position: 'absolute',
    top: 900,  // Adjust top position to place it under the text inputs
    left: (width - 290) / 2,  // Center align based on screen width
    opacity: 1,
    
  },
  accountText: {
    position: 'absolute',
    top: 1000,  // Adjust top position to place it under filterIcon3
    left: (width - 290) / 2,  // Center align based on screen width
    textAlign: 'center',
    flexDirection: 'row',
    marginLeft: 60,
  },
  transparentText: {
    color: 'gray',
  },
  registerText: {
    color: '#356899',
  },
});

export default LoginScreen;
