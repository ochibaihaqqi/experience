import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import D_welcoming from '../components/domain-component/d_welcoming'

export default function Domain() {
	return (
		<>
		<Head>
        	<title>Experience | Domain</title>
    	</Head>

		<Navbar/>

		<D_welcoming/>

		<section className="d_check">
			<div className="container">

				<div className="title">
					<h1>Check Your</h1>
					<h2>Domain Name</h2>
				</div>

				<div className="search_input">
					<input type="text" placeholder="Type your desired domain here" name="search"></input>
				</div>
			</div>
		</section>

		<Footer/>
		</>
	)
}