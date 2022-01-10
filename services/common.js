import { auth } from "../firebase"
import { Alert } from "./Alert";


export const handleLogin = async (email, password)=>{
        try{
          const result = await auth.signInWithEmailAndPassword(email,password)
          Alert.fire({
            icon: "success",
            title: `welcome ${result.user.displayName ? result.user.displayName : result.user.email }`,
          });
          window.location.href = "/";

        }catch(err){
          Alert.fire({
            icon: "error",
            title: err.message,
          });
        }
        
     }

 export const handleRegister = async (name, email, password)=>{
        try{
          const result = await auth.createUserWithEmailAndPassword(email,password)
        await result.user.updateProfile({
            displayName:name
        })
        
        Alert.fire({
          icon: "success",
          title: `welcome ${result.user.displayName}`,
        });
        }catch(err){
          Alert.fire({
            icon: "error",
            title: err.message,
          });
        }
        
     }

    export const handleSignout = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
            Alert.fire({
              icon: "success",
              title: `Logged Out Sucessfully`,
            });
          }).catch(function(error) {
            // An error happened.
            Alert.fire({
              icon: "error",
              title: error.message,
            });
    
          });
       }