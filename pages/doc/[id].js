import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import Link from 'next/link'
import Button from "@material-tailwind/react/Button";
import Image from 'next/image'
import Icon from '@material-tailwind/react/Icon';
import moment from 'moment';
import EditorHeader from '../../components/EditorHeader';
import TextEditor from '../../components/TextEditor';

function doc({user}) {
const [state, setstate] = useState({})
const router = useRouter()
const {id} = router.query;


  useEffect(() => {
    getDoc(user?.email)
  }, [user?.email])


    const getDoc = (email) => {
        return db.collection("userDocs").doc(email).collection("docs").doc(id)
          .get()
          .then(querySnapshot => {
            // const data = querySnapshot.docs.map(doc => doc.data());
            // console.log(querySnapshot?.data()); 
            setstate(querySnapshot?.data()); 
          });
      }
    
    
    return (
        <div>
            <EditorHeader fileName={state?.fileName} timestamp={state?.timestamp} />
           {state?.id}
           <TextEditor user={user} id={id} />
        </div>
    )
}

export default doc
