import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //creating user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
    }

    return (
         <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;