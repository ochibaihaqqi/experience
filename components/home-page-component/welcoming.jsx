import Link from 'next/link'


export default function Welcoming() {
	return(
		<>
		<section className='welcoming'>
          <div className="container">

            <div className="content">
                <div className='title'>
                  <h1>Welcome To X-Perience</h1>
                </div>
                <div className='subtitle mt-4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies etiam proin vel malesuada aliquam est. Ut accumsan, accumsan augue ac lectus sed faucibus. Tincidunt varius.</p>
                </div>
                <div className="mt-7">
                  <Link href="hosting"><a className='button'>Get Started</a></Link>
                </div>
            </div>

            <div className="illustrator">
              <Link href='#'><img src="home-page/welcoming/welcome-homepage-illustration.svg" alt="" /></Link>
            </div>
          </div>
        </section>
		</>
	)
}