import { useRouter } from 'next/router'
import Head from 'next/head'

import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import Link from 'next/link'
import Button from "@material-tailwind/react/Button";
import Image from 'next/image'
import Icon from '@material-tailwind/react/Icon';
import moment from 'moment';
import EditorHeader from '../../components/EditorHeader';
import TextEditor from '../../components/TextEditor';
import login from '../../components/Login';
import Landing from '../../components/Landing';

function doc({user}) {
const [state, setstate] = useState({})
const router = useRouter()
const {id} = router.query;




  useEffect(() => {
    getDoc(user?.email)
  }, [user?.email])


    const getDoc = async (email)  => {
        return db.collection("userDocs").doc(email).collection("docs").doc(id)
          .get()
          .then(querySnapshot => {
            // const data = querySnapshot.docs.map(doc => doc.data());
            // console.log(querySnapshot?.data()); 
            setstate(querySnapshot?.data()); 
          });
      }
    
      if(!user) return <Landing />


    
    return (
        <div>
           <Head>
        <title>{state?.fileName ?? "loading"}  -Gdocs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

            <EditorHeader fileName={state?.fileName} timestamp={state?.timestamp} />
         
           <TextEditor user={user} id={id} state={state} />
        </div>
    )
}

export default doc
