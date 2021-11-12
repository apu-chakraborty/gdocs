import { auth } from "../firebase"


export const handleLogin = async (e)=>{
        e.preventDefault()
        try{
          const result = await auth.signInWithEmailAndPassword(email,password)
          alert( `welcome ${result.user.displayName}`)  
        }catch(err){
          alert( err.message)    
        }
        
     }

 export const handleRegister = async (e)=>{
        e.preventDefault()
        try{
          const result = await auth.createUserWithEmailAndPassword(email,password)
        await result.user.updateProfile({
            displayName:name
        })
        alert( `welcome ${result.user.displayName}`)  
        }catch(err){
         console.log(err.message, "hghghjg")    
        }
        
     }

    export const handleSignout = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
            alert("succes")
          }).catch(function(error) {
            // An error happened.
            alert(error)
    
          });
       }