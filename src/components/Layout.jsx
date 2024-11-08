
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      {/* here we are using this because  here header and footer will remain same and between content will change */} 
      <Outlet />
      <Footer /> 
    </>
  )
}

export default Layout
