import Head from 'next/head'
import Header from '../components/Header'


import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image'
import {
  signIn,
  signOut,
  useSession
} from 'next-auth/client';


export default function Home() {
  const [session, loading] = useSession();
  console.log(session, "ghgjh")
  return (
    <div className="container">
      <Head>
        <title>Gdocs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header user={session?.user} />

        <section className="bg-gray-100 pb-10 px-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between py-6 pt-6">
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
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-600">
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
          </div>
        </section>
      </main>
    </div>
  )
}
