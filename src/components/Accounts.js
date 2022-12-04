import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import '../styles/Accounts.css'

export default function Accounts({open, onClose}) {

	const [users, setUsers] = useState([])
	const [inputs, setInputs] = useState({
		id:'',
		username:'',
		password:'',
		access_lvl:''
	})

	const [update, setUpdate] = useState(false)

	const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((previousValue) => ({ ...previousValue, [name]: value }));
  };

	useEffect(() => {
		axios.get("http://localhost:80/rbimv5/server/Accounts.php").then(res => {
			setUsers(res.data)
		});
	}, [update]);

	const usersElement = users.map(user => {
		return(
		<tr>
			<td>{user.id}</td>
			<td>{user.username}</td>
			<td>{'●'.repeat(user.password.length)}</td>
			<td>{user.access_lvl}</td>
			<button
				className='Account__modal__btn'
				onClick={(e) => {
					setInputs({
						id: user.id,
						username: user.username,
						password: user.password,
						access_lvl: user.access_lvl
					})
				}}>
					Select</button>
		</tr>
		)
	})

	if(!open) return null;

  return ReactDom.createPortal  (
  	<>
      <div className='overlay'></div>
			<div className='Accounts__modal'>
				<button
          onClick={onClose}
          className='Accounts__modal__close__btn'>
            &#10006;
        </button>
				<h1>Accounts</h1>
				<div className='Accounts__modal__container'>
					<form>
						<div className='Accounts__modal__form'>
							<label for='username'>Username</label>
							<input 
								onChange={(e) => handleChange(e)}
								type='text' 
								id='' name='username' 
								placeholder='' 
								value={inputs.username} />
							<label for='password'>Password</label>
							<input
								onChange={(e) => handleChange(e)}
								type='password' 
								id='' name='password'
								placeholder='' 
								value={inputs.password} />
							<label for='access_lvl'>Access Level</label>
							<input
								onChange={(e) => handleChange(e)}
								type='text' 
								id='' 
								name='access_lvl' 
								placeholder='' 
								value={inputs.access_lvl} />
							<button
								onClick={(e) => {
									e.preventDefault()
									axios.post("http://localhost:80/rbimv5/server/Accounts.php", inputs);
									setUsers(prevValue => {
										return prevValue.map(user => {
											if(inputs.id === user.id){
												return {
													id: inputs.id,
													username: inputs.username,
													password: inputs.password,
													access_lvl: inputs.access_lvl
												}
											} else return user
										})
									})
								}}>
									Update</button>
						</div>
					</form>
					<div className='Accounts__modal__table'>
						<table>
							<tr>
								<th>ID</th>
								<th>Username</th>
								<th>Password</th>
								<th>Access Level</th>
								<th></th>
							</tr>
							{ usersElement }
						</table>
					</div>
				</div>
			</div>
  	</>,
		document.getElementById('portal')
  )
}
