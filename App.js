import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { RootSiblingParent } from 'react-native-root-siblings'
import jwtDecode from 'jwt-decode'

import AuthContext from './src/context/AuthContext';

import { setTokenApi, getTokenApi, removeTokenApi } from './src/api/token'

import Auth from './src/screens/Auth'
import Home from './src/screens/Home';

export default function App() {
  const [auth, setAuth] = React.useState(undefined)

  const login = user => {
    setTokenApi(user.jwt)
    setAuth({
      token: user.jwt,
      idUser: user.user._id
    })
  }

  const logout = () => {
    if(auth) {
      setAuth(null)
      removeTokenApi()
    }
  }

  const authData = React.useMemo(() => ({
    auth: undefined,
    login,
    logout,
  }),
  [auth]
  )
  
  React.useEffect(() => {
    (async() => {
      const token = await getTokenApi()
      if(!token) return setAuth(null)
      setAuth({
        token,
        idUser: jwtDecode(token).id
      })
    })()
  },[])

  if(auth === undefined) return null
  
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        <RootSiblingParent>
          {auth
            ? <Home />
            : <Auth />
          }
        </RootSiblingParent>
      </PaperProvider>
    </AuthContext.Provider>
  );
}