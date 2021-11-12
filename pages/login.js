import Login from "../components/Login"
import Head from 'next/head'

function login() {
  return (
    <>
      <Head>
        <title>Login Gdocs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
    <Login />
    </>
  )
}

export default login
