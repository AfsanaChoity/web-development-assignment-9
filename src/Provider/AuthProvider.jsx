import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //creating user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update user profile
    const userUpdateProfile = (name, image) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        
        })
        
    }

    //user login
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    //github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    //log out
    const logOut = () =>{
        
        setUser(null)
        signOut(auth)

    }

    //observer
    useEffect(() =>{
      const unsubscribe=   onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }

        });
        return () =>unsubscribe();

    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        loading,
        userUpdateProfile,
    }

    return (
         <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;