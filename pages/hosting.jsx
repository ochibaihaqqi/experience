import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

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

		<section className='h_package'>
			<div className="container">

				<div className="title">
					<h1>Choose the Best</h1>
					<h2>Web Hosting Package</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ullamcorper a placerat. At neque, massa sapien nec mi sed rhoncus. Scelerisque proin maecenas in diam suscipit. Scelerisque elementum massa quam ullamcorper. Morbi id lorem tortor, lacus, eu urna felis porttitor. Dictumst massa velit varius massa scelerisque.</p>
				</div>

				<div className="card">
					<div className="card-top">
						<div className="card-title">
							<h1>Gold</h1>
						</div>
						<div className="card-price">
							<h1>$4.95/mo*</h1>
							<p>Normally $13.99 12/mo term</p>
						</div>
						<div className="card-button">
							<Link href="#"><a>Select</a></Link>
						</div>
					</div>

					<div className="card-bottom">
						<div className="card-title">
							<h1>Features</h1>
						</div>
						
						<div className="card-features">
							<ul>
								<li>Unlimited Website</li>
								<li>Unlimited SSD Storage</li>
								<li>Custom Themes</li>
								<li>24/7 Customer Support</li>
								<li>WordPress Integration</li>
								<li>Free Domain - 1 year</li>
								<li>Free CDN Include</li>
								<li>Free SSL Certificate</li>
								<li>Free Office 365 - 30 Days</li>
								<li>Free Domain Privacy</li>
								<li>Free Automated Backup - 1 Year</li>
								{/* <li>Free CDN Includede</li> */}
							</ul>
						</div>
					</div>
				</div>

			</div>
		</section>

		<Footer/>
		</>
	)
}