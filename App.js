import Rotas from './Routers';
import { AuthProvider } from './pages/Contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
    
  );
}