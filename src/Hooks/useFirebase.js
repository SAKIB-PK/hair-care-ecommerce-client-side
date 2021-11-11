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
        onAuthStateChanged(auth,result=>{
            if(result){
                setUser(result)  
            }else{
                setUser({})
            }
            setLoading(false)
        })
    },[auth])
    // custom email and password signin
    const customSignin =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // custom email and password login
    const customLogin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateProfileInfo=(name,img)=>{
        updateProfile(auth.currentUser,{
            ...user,displayName:name,photoURL:img
        })
        .then(res =>{
            const newUser = {...user,displayName:name,photoURL:img}
            setUser(newUser)
        })
        .catch(err =>{
            //
        }).finally(()=>setLoading(false))
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
        loading,
        setLoading
    }
}

export default useFirebase
