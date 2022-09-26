import Head from 'next/head'
import React from 'react'

export default function Layout(props) {
  return (
    <div className='main-container'>
    <Head>
        <title>{props.title}</title>
    </Head>
    {props.children}
    </div>
  )
}
