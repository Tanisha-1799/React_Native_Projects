import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TouchableHighlight } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';


export default function App() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  //for face detection or fingerprint scan
useEffect(()=>{
  (async() =>{
    //hasHardwareAsync() determines whether a face or fingerprint scanner is available on the device
    const compatible=await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
    
  })();
});

const fallBackToDefaultAuth=()=>{
  console.log("Fallback to password authentication");
};

const alertComponent = (title, mess, btnTxt, btnfunc) => {
  return Alert.alert(title, mess,[
    {
      text: btnTxt,
      onPress: btnfunc
    }
  ]);
};

const TwoButtonAlert = () =>
Alert.alert("Welcome To App","Subscribe Now",[
  {
    text: "Back",
    onPress: () => console.log("Cancel Pressed"),
    style:'cancel'
  },
  {
    text: 'OK', onPress: () => console.log('Ok Pressed')
  },
]);

const handleBiometricAuth =async () => {
  //checking if hardware supports biometric
  const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

  //fall back to default authentication method (password) if biometric is not available
  if(isBiometricAvailable)
  return alertComponent(
    'Please Enter your password',
    'Biometric Auth not supported',
    'OK',
    () => fallBackToDefaultAuth()
  );

  //check biometric types available (fingerprint, facila recognition, iris recognition
  let supportedBiometrics;
  if(isBiometricAvailable)
  supportedBiometrics =await LocalAuthentication.supportedAuthenticationTypesAsync()

  //check biometrics are saved locally in user's device
  const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  if(!savedBiometrics)
  return alertComponent(
    'Biometric record not found',
    'Please Login with Password',
    'OK',
    () => fallBackToDefaultAuth()
  );

  //authenticate with biometric 
  const biometricAuth =await LocalAuthentication.authenticateAsync({
    promptMessage: 'Login With Biometric',
    cancelLabel: 'cancel',
    disableDeviceFallback: true,

  });

  //Log the user in on success
  if(biometricAuth){TwoButtonAlert();}
  console.log({isBiometricAvailable});
  console.log({supportedBiometrics});
  console.log({savedBiometrics});
  console.log({biometricAuth});
};

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
<SafeAreaView>
  <View style={styles.container}>
  <Text>
    {isBiometricSupported
      ? 'Your Device is Compatible with Biometrics'
      : 'Face or fingerprint sacnner is available on this device'}
  </Text>
  <TouchableHighlight
    style={{
      height: 60,
      marginTop:200
    }}
    >
    <Button 
      title='Login With Biometrics'
      color='black'
      onPress={handleBiometricAuth}
    />

    </TouchableHighlight>
    <Statusbar style='auto' />

  </View>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});
