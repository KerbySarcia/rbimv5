import React from 'react'
import '../styles/404style.css'
import ErrorPage from '../images/Error404Page.svg'
import { TabTitle } from '../features/GeneralFunction'

const Error404 = () => {
  TabTitle('404 | Page Not Available')
  return (
    <>
      <div className='Error'>
        <img src={ErrorPage} alt="404 Page Not Found"/>
      </div>
    </>
  )
}

export default Error404