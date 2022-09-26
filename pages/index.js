import Head from 'next/head'

import Login from '../components/Login/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Back-office Eazypass is a work management web application" />
        <link rel="icon" href="/favicon.ico" />
       </Head>


      <Login />
    </div>
  )
}
