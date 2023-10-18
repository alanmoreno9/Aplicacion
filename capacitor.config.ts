import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tellevo.app',
  appName: 'Aplicacion',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
