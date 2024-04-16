import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const googleProvider = new GoogleAuthProvider();

    //creating user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user login
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        googleLogin,
    }

    return (
         <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;