import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.scss'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='shop' className='nav-link'>
            <div>SHOP</div>
          </Link>
          <Link to='sign-in' className='nav-link'>
            <div>SIGN IN</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation