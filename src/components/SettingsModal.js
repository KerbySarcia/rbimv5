import React from 'react'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom";
import "../styles/Settings.css"

export default function SettingsModal({open, onClose}) {

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
                <Link
                  className="Settings__modal__btn"
                  end
                  to="">
                  <li>Account</li>
                </Link>
                <Link
                  className="Settings__modal__btn"
                  to="">
                  <li>Import From Excel Data</li>
                </Link>
                <Link
                  className="Settings__modal__btn"
                  to="">
                  <li>Export To Excel Data</li>
                </Link>
                <Link
                  className="Settings__modal__btn"
                  to="about-the-team">
                  <li>About Us</li>
                </Link>
              </ul>
          </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
