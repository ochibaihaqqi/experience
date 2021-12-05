import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import H_package from '../components/hosting-component/h_package'

export default function Hosting () {
	return (
		<>
		<Head>
        	<title>Experience | Hosting</title>
      	</Head>

		<Navbar/>
		
		<section className='h_welcoming'>
          <div className="container">

            <div className="content">
                <div className='title'>
                  <h1>Hosting Service And More</h1>
                </div>
                <div className='subtitle mt-4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies etiam proin vel malesuada aliquam est. Ut accumsan, accumsan augue ac lectus sed faucibus. Tincidunt varius.</p>
                </div>
            </div>

            <div className="illustrator">
              <Link href='#'><img src="hosting/welcoming/welcome-hosting-illustration.svg" alt="" /></Link>
            </div>
          </div>
        </section>

		<H_package/>


		<Footer/>
		</>
	)
}