import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col items-center p-16 min-h-screen">

        <h1>
          Navbar 
        </h1>
        <h1 className="font-bold">
          Home 
        </h1>

        <p>
          40,000+ footfall blah blah 
        </p>

        <h1>
          About us 
        </h1>

      </main>
    </>
  )
}
