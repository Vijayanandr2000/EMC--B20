import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import "./App.css";
import { auth, googleProvider } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      setUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out with Google:", error);
    } finally {
      setUser(null);
    }
  };

  return (
    <>
      <h1>Sign In with Firebase Provider (Google)</h1>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}
    </>
  );
}

export default App;
