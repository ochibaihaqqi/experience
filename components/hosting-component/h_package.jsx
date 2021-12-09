import Link from "next/dist/client/link"

export default function H_package() {

	return(
		<>
		<section className='h_package'>
			<div className="container">

				<div className="title">
					<h1>Choose the Best</h1>
					<h2>Web Hosting Package</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ullamcorper a placerat. At neque, massa sapien nec mi sed rhoncus. Scelerisque proin maecenas in diam suscipit. Scelerisque elementum massa quam ullamcorper. Morbi id lorem tortor, lacus, eu urna felis porttitor. Dictumst massa velit varius massa scelerisque.</p>
				</div>

				<div className="card-section">
					<div className="card">
						<div className="card-top">
							<div className="card-title">
								<h1>Silver</h1>
							</div>
							<div className="card-price">
								<h1>$2.65/mo*</h1>
								<p>Normally $9.99 12/mo term</p>
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
									{/* <li>Free CDN Includede</li> */}
								</ul>
							</div>
						</div>
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

					<div className="card">
						<div className="card-top">
							<div className="card-title">
								<h1>Platinum</h1>
							</div>
							<div className="card-price">
								<h1>$11.95/mo*</h1>
								<p>Normally $28.99 12/mo term</p>
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
									<li>Free Automated Backup</li>
									<li>Free Dedicated IP</li>
									{/* <li>Free CDN Includede</li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>
		</>
	)
}