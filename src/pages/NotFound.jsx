import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../utilities/PageWrapper'
import doggie from '../img/doggie-new.gif'
import doggie_dark from '../img/doggie-new-dark.gif'
import { useTheme } from '../utilities/Layout'

const NotFound = () => {

  const {theme} = useTheme()

  return (
    <PageWrapper>
      <div className="not-found">
        <h1>Oops!</h1>
        <img src={theme ? doggie_dark : doggie} alt="doggie" />
        <div className="error">404 - Page Not Found</div>
        <Link to="/">Let's go back home</Link>
      </div>
    </PageWrapper>
  )
}

export default NotFound