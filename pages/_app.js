import "@material-tailwind/react/tailwind.css";
import 'tailwindcss/tailwind.css'
import { Provider } from 'next-auth/client'
import {auth} from '../firebase'
import {useEffect,useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState(null)
  useEffect(()=>{
       auth.onAuthStateChanged(user=>{
         if(user) setUser(user)
         else setUser(null)
       })
  },[user])
  return (
    <>

      <Component {...pageProps}  user={user}  />

    </>
  )
}



export default MyApp