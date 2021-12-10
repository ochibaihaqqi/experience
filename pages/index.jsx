import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Welcoming from '../components/home-page-component/welcoming'
import Ourclient from '../components/home-page-component/ourclient'
import Realstories from '../components/home-page-component/realstories'
import Features from '../components/home-page-component/features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Experience | Home</title>
      </Head>

      <body>
        <Navbar />

        <Welcoming />

        <Ourclient />
        
        <Realstories />

        <Features />

        <Footer/>
      </body>

    </>
  )
}
