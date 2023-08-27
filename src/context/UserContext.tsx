import React, { useState, useEffect, useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { validateAuth } from '../functions/validateAuth';
import initializeFirebase from '../functions/initializeFirebase';

interface UserData {
  //Define struc here for the data
}

interface UserContextType {
  userData: any | null;
  token: any | null;
}

interface UserUpdateContextType {
  googleLogin: () => void;
  googleLogout: () => void;
}

export const UserContext = React.createContext<any | null>(null);
export const UserUpdateContext = React.createContext<UserUpdateContextType | any>("");

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    initializeFirebase()
    authCall();
  }, []);

  async function authCall() {
    const auth = getAuth();
    const authListener = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const response = await validateAuth(token);
          if (response.statusCode === 200) {
            setUserData(response.userData);
            setToken(token);
          }
        } catch (error) {
          console.error('Error validating auth:', error);
        }
      } else {
        setUserData(null);
        setToken(null);
      }
    });

    return () => {
      authListener();
    };
  }

  async function googleLogin() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCred = await signInWithPopup(auth, provider);
      const token = await userCred.user.getIdToken();
      const response = await validateAuth(token);

      if (response.statusCode === 200) {
        setUserData(response.userData);
        setToken(token);
      }
    } catch (error) {
      console.error('Google login error:', error);
      setUserData(null);
    }
  }

  async function googleLogout() {
    const auth = getAuth();
    try {
      await auth.signOut();
      setUserData(null);
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <UserContext.Provider value={{ userData, token }}>
      <UserUpdateContext.Provider value={{ googleLogin, googleLogout }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
