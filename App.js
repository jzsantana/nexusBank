import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routers from './Routers';
import AuthProvider from './pages/Contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
    
  );
}
