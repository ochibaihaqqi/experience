import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import H_package from '../components/hosting-component/h_package'
import H_welcoming from '../components/hosting-component/h_welcoming'
import H_allplaninclude from '../components/hosting-component/h_allplaninclude'


export default function Hosting () {
	return (
		<>
		<Head>
        	<title>Experience | Hosting</title>
    </Head>

		<Navbar/>
		
    <H_welcoming/>

		<H_package/>

    <H_allplaninclude/>

    <section>
      
    </section>

		<Footer/>
		</>
	)
}