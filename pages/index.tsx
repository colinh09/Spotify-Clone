import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>
      
      <div>
        {/* Player */}
      </div>
    </div>
  )
}

export default Home
