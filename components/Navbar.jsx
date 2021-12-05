import Link from 'next/link'
import { withRouter } from 'next/router'

function Navbar({ router }) {

  const navs = [
    { text: 'Home', href:'/'},
    { text: 'Hosting', href:'/hosting'},
    { text: 'Domain', href:'/domain'},
    { text: 'Email', href:'/email'},
    { text: 'Support', href:'/support'},
  ]
	return (
		<>
		<nav className='navbar'>
          <div className="flex flex-wrap overflow-hidden lg:-mx h-20">
            <div className="lg:px-6 lg:w-3/12 flex justify-center items-center">
              <div className="navbar-brand">
                <Link href='#'><a className='flex'><img className='' src="navbar/e-xperience_logo-01.svg" alt=""/></a></Link>
              </div>
            </div>
            <div className="lg:px-6 lg:w-6/12 flex justify-center items-center">
              <ul className='navbar-menu flex'>
                { navs.map(nav => (
                <li><Link href={nav.href}><a className={`nav-item mx-5 ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
                ))}
              </ul>
            </div>
              <div className="lg:px-6 lg:w-3/12 flex justify-center items-center">
                <ul className='navbar-user flex '>
                  <li className='list-none mr-6'><Link href=''><a><img src="navbar/user-section/cart.svg" alt="" /></a></Link></li>
                  <li className='list-none ml-6'><Link href=''><a><img src="navbar/user-section/user.svg" alt="" /></a></Link></li>
                </ul>
              </div>
          </div>
    </nav>
		</>
	)
}

export default withRouter(Navbar);