import React from 'react'
import styles from './Modal.module.css'

export default function index() {
const date = new Date().toDateString();

  return (

    <div className={`${styles.container} flex flex-col`} >
      <div className='font-Roboto text-2xl text-center'>
{date}
      </div>
    </div>
  )
}
