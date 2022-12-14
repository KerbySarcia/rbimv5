import React from 'react'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom";
import "../styles/Settings.css"

export default function SettingsModal({open, onClose}) {

  const items = JSON.parse(sessionStorage.getItem('dataKey'))

  const Admin = () => {
    return (
      <>
        <Link
          className="Settings__modal__btn"
          end
          to=""
          onClick={onClose}>
          <li>Import From Excel Data</li>
        </Link>
        <Link
          className="Settings__modal__btn"
          to=""
          onClick={onClose}>
          <li>Export To Excel Data</li>
        </Link>
      </> 
    )
  }

  if (!open) return null;

  return ReactDom.createPortal (
    <>
      <div className='overlay' />
      <div className='Settings__modal'>
        <button
          onClick={onClose}
          className='Settings__modal__close__btn'>
            &#10006;
        </button>
        <h1>Settings</h1>
          <div className='Settings__modal__container'>
              <ul>
                  { (items.access_lvl === 'admin' || items.access_lvl === 'secretary') && Admin() }
                <Link
                  className="Settings__modal__btn"
                  to="about-the-team"
                  onClick={onClose}>
                  <li>About Us</li>
                </Link>
              </ul>
          </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
