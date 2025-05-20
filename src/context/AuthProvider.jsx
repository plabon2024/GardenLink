import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const [reviewsable, setReviewsable] = useState([]);
  const [user, setUser] = useState(null);   
  const installApp = (app) => {
    setInstalledApps((prev) => [...prev, app]);
  };
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      });
  }, [user]);

  const uninstallApp = (appId) => {
    setInstalledApps((prev) => prev.filter((item) => item.id !== appId));
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    emailSignIn,
    createAccount,
    signOutUser,
    loading,
    setLoading,
    installedApps,
    installApp,
    uninstallApp,
    reviewsable,
    setReviewsable,
    apps,
    setApps,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
