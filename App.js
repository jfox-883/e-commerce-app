import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";

import Auth from './src/screens/Auth'
import Home from './src/screens/Home';

export default function App() {
  const [auth, setAuth] = React.useState(null)
  return (
    <PaperProvider>
      {auth
        ? <Home />
        : <Auth />
      }
    </PaperProvider>
  );
}