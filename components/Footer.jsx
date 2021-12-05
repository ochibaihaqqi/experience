import Link from "next/dist/client/link";

export default function Footer() {
	return (
		<>        
      <footer className='footer'>
	     	<div className="container">

		        <div className="content">
              <div className="section-1">
                <Link href='#'><a className=''><img className='' src="footer/footer-logo.svg" alt=""/></a></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus mi venenatis gravida sagittis, sed et proin gravida. Mattis fames.</p>
                <div className="socialmedia-icon">
                <Link href='#'><a className=''><img className='' src="footer/instagram-icon.svg" alt=""/></a></Link>
                <Link href='#'><a className='mx-4'><img className='' src="footer/basketball-icon.svg" alt=""/></a></Link>
                <Link href='#'><a className='mr-4'><img className='' src="footer/twitter-icon.svg" alt=""/></a></Link>
                <Link href='#'><a className=''><img className='' src="footer/youtube-icon.svg" alt=""/></a></Link>
                </div>
              </div>

              <div className="section-2">
                <div className="title">
                <h1>Quick Links</h1>
                </div>
                <ul>
                  <li className=''><Link href='hosting'><a>Hosting</a></Link></li>
                  <li className='my-1'><Link href='domain'><a>Domain</a></Link></li>
                  <li className='my-1'><Link href='pricing'><a>Pricing</a></Link></li>
                  <li className='my-1'><Link href='support'><a>Support</a></Link></li>
                  <li className=''><Link href='carrers'><a>Carrers</a></Link></li>
                </ul>
              </div>

              <div className="section-3">
                <div className="title">
                <h1>Services</h1>
                </div>
                <ul>
                  <li className=''><Link href='app-development'><a>App Development</a></Link></li>
                  <li className='my-1'><Link href='web-development'><a>Web Development</a></Link></li>
                  <li className='my-1'><Link href='quality-assurance'><a>Quality Assurance</a></Link></li>
                  <li className='my-1'><Link href='machine-learning'><a>Machine Learning</a></Link></li>
                </ul>
              </div>

              <div className="section-4">
                <div className="title">
                <h1>Services</h1>
                </div>
                <ul>
                  <li className=''><a className='flex' href='mailto: hello@e-xperience.com' target="_blank" rel="noopener noreferrer" ><img className='mr-2' src="footer/email-icon.svg" alt=""/>hello@e-xperience.com</a></li>
                  <li className='my-6'><Link href='mailto: hello@e-xperience.com'><a className='flex'><img className='mr-2' src="footer/phone-icon.svg" alt=""/>+91 98765 43210</a></Link></li>
                  <li className='my-6'><a className='flex' target="_blank" href="https://www.google.com/maps/place/772+Lyonwood+Ave,+Walnut,+CA+91789,+USA/@34.004069,-117.8430365,16z/data=!4m13!1m7!3m6!1s0x80c32b82b56889ff:0x1d22c2665a2d25ef!2s772+Lyonwood+Ave,+Walnut,+CA+91789,+USA!3b1!8m2!3d34.0040561!4d-117.8428193!3m4!1s0x80c32b82b56889ff:0x1d22c2665a2d25ef!8m2!3d34.0040561!4d-117.8428193" rel="noopener noreferrer"><img className='mr-2' src="footer/location-icon.svg" alt=""/>772 Lyonwood Ave
                  Walnut, CA 91789</a></li>
                </ul>
              </div>

            </div>

            <div className="copyright">
              <h1>© 2021 E-Xperience. All rights reserved</h1>
            </div>


		  

		  </div>
	  </footer>
		</>
	)
}