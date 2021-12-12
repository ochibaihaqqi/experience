import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import H_package from '../components/hosting-component/h_package'
import H_welcoming from '../components/hosting-component/h_welcoming'
import H_allplaninclude from '../components/hosting-component/h_allplaninclude'
import H_faq from '../components/hosting-component/h_faq'




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

		<H_faq/>				

		<Footer/>
		</>
	)
}