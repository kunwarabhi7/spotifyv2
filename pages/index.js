import Head from 'next/head'
import MainBar from '../components/MainBar'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex'>
      <SideBar />
      <MainBar />
      </div>

      
    </div>
  )
}
