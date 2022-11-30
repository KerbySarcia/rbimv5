import React from 'react'
import ReactDom from 'react-dom'
import '../styles/Logout.css'
import { useNavigate } from "react-router-dom";

export default function Logout({open, onClose}) {

	const navigate = useNavigate()

  if (!open) return null;

  return ReactDom.createPortal (
    <>
			<div className='overlay' />
			<div className='Logout__modal'>
				<h2>Logout?</h2>
				<button
					onClick={onClose}
					className='Logout__modal__cancel'>
						Cancel
				</button>
				<button
					onClick={()=>{
            localStorage.removeItem('dataKey')
            navigate('/login')}}
						className='Logout__modal__confirm'>
							Confirm
				</button>
			</div>
    </>,
    document.getElementById("portal")
  )
}