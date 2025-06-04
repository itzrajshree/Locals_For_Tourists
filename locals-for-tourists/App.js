import { Platform } from 'react-native';
import MobileApp from './MobileApp';
import WebApp from './WebApp';

export default function App() {
  return Platform.OS === 'web' ? <WebApp /> : <MobileApp />;
}