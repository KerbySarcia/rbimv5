import React, { useState, useEffect } from 'react'
import '../styles/DateTime.css'

const DateTime = () => {
  const [dateState, setDateState] =  useState(new Date())

	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000)
	}, []);

  return(
		<>
			<div className='DateTime'>
				<div className='DateTime__time'>
					{dateState.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true,
					})}
				</div>
				<div className='DateTime__date'>
					{' '}
					{dateState.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</div>
			</div>
		</>
	)
}
export default DateTime;