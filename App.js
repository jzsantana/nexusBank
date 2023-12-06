import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routers from './Routers';
import { UserProvider } from './services/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Routers />
    </UserProvider>
    
  );
}
