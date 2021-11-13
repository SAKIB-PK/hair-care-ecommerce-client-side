import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import firebaseInitialize from '../Firebase/firebase.initial'


firebaseInitialize()
const useFirebase = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();  


    useEffect(()=>{
        const updateProfileAuth =onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
              } else {
                // User is signed out
                setUser({})
              }
              setLoading(false)
            });
            return ()=> updateProfileAuth
      },[auth])
  
    // custom email and password signin
    const customSignin =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // custom email and password login
    const customLogin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateProfileInfo =(name,img)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          }).then((res) => {
            const newUser = {...user,displayName:name,photoURL:img}
            setUser(newUser)
          }).catch((error) => {
            // An error occurred
            // ...
          })
    }
    const googleSignIn = ()=>{
       return signInWithPopup(auth,googleProvider)
    }

    // custom signout
    const customSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        googleSignIn,
        customSignin,
        updateProfileInfo,
        customLogin,
        customSignOut,
        user,
        setUser,
        loading,
        setLoading
    }
}

export default useFirebase
