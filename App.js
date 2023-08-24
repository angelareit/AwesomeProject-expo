import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/Home/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   /*  <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Wassup</Text>
            <Text>Open up App.js to start working on your app! Wassup</Text>

      <StatusBar style="auto" />
    </View> */
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
