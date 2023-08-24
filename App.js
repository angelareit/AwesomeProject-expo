import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/Home/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<>
    <HomeScreen/>
    <StatusBar style="auto" />

  </>
    
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