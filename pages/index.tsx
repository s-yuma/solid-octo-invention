import Head from 'next/head'
import Image from 'next/image'
import Heder from '../components/heder/Heder'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Heder/>
      <Sidebar/>
    </>
  )
}
