import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect } from 'react';

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image'
import Modal from '../components/Modal';
import DocumentList from '../components/DocumentList';
import { db } from '../firebase';
import Landing from '../components/Landing';


export default function Home({ user }) {
  const [showmodal, setShowModal] = useState(false);
  const [lists, setList] = useState([]);

  const createDoc = () => {
    setShowModal(true)
  }

  useEffect(() => {
    getDocs(user?.email)
  }, [user?.email])


  // const [snapshot] = useCollectionOnce(
  //   db.collection("userDocs").doc(user?.email).collection("docs").orderBy('timestamp', 'desc')
  //   )

  const getDocs = (email) => {
    return db.collection("userDocs").doc(email).collection("docs").orderBy('timestamp', 'desc')
      .get()
      .then(querySnapshot => {
        // const data = querySnapshot.docs.map(doc => doc.data());
        // console.log(data); 
        setList(querySnapshot); // array of cities objects
      });
  }


if(!user) return <Landing />

  return (
    <>
      <Head>
        <title>Gdocs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header />

        <section className="bg-gray-100 pb-10 px-10">
          <div className="max-w-3xl mx-auto" >
            <div className="flex items-center justify-between py-6 pt-6" >
              <h2 className="text-gray-700 text-lg">Start a new document</h2>
              <Button
                color="gray"
                buttonType="outline"
                iconOnly={true}
                ripple="dark"
                className="border-none">
                <Icon name="more_vert"
                  size="3xl" />
              </Button>

            </div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-600" onClick={() => createDoc()}>
              <img src="/img/blank_doc.png"
                layout="fill"
                alt="blank"
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-600">Blank</p>
          </div>

        </section>

        <section className="bg-white px-10 md:px-0">
          <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
            <div className="flex items-center justify-between pb-5">
              <h2 className="font-medium flex-grow">My Documents</h2>
              <p className="mr-12">Date Created</p>
              <Icon name="folder"
                size="3xl" color="gray" />
            </div>
            {/* listing  */}
            {
              lists?.docs?.map((list, i) => (
                <DocumentList fileName={list.data().fileName} key={i} timestamp={list.data().timestamp} id={list.id} />

              ))
            }
          </div>

        </section>
      </main>

      <Modal showmodal={showmodal} setShowModal={setShowModal} user={user} lists={lists} setList={setList}/>
    </>
  )
}
