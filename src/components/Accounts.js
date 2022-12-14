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
	const [clickUpdate, setClickUpdate] =  useState([])

	const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((previousValue) => ({ ...previousValue, [name]: value })); // eslint-disable-next-line
		if(value == ''){
			setClickUpdate('')
		}
  };

	useEffect(() => {
		axios.get("http://localhost:80/rbimv5/server/Accounts.php").then(res => {
			setUsers(res.data)
		});
	}, [update]);

	const usersElement = users.map(user => {
		const confirmAction = () => {
			if (window.confirm("Delete Account?")) {
				axios.post("http://localhost:80/rbimv5/server/Accounts_Delete.php", user);
        alert('Account Deleted!')
      } else {
        alert("Delete Cancelled!");
      }
		};
		return(
		<tr>
			<td>{user.id}</td>
			<td>{user.username}</td>
			<td>{'●●●●●'}</td>
			<td>{user.access_lvl}</td>
			<button
				className='Accounts__modal__select__btn'
				onClick={() => {
					setInputs({
						id: user.id,
						username: user.username,
						password: '',
						access_lvl: user.access_lvl
					})
					setClickUpdate(user.id)
				}}>
					Select
			</button>
			<button
					className='Accounts__modal__danger__btn'
					onClick={(e) => {
						e.preventDefault()
						confirmAction();
						setUpdate(previousValue => !previousValue)
					}}>
					Delete
				</button>
		</tr>
		)
	})

	const buttons = (id) => { // eslint-disable-next-line
		if(id != '' && inputs.username && inputs.password && inputs.access_lvl){
			return(
				<button
					className='Accounts__modal__main__btn'
					onClick={(e) => {
						e.preventDefault()
						axios.post("http://localhost:80/rbimv5/server/Accounts.php", inputs);
						alert('Credentials Changed!')
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
						setInputs({
							id:'',
							username:'',
							password:'',
							access_lvl:''
						})
					}}>
						Update
				</button>) // eslint-disable-next-line
		} else if(id =='' && inputs.username && inputs.password) {
				return(
					<button
					className='Accounts__modal__main__btn'
					onClick={(e) => {
						e.preventDefault();
						axios.post("http://localhost:80/rbimv5/server/Accounts_SignUp.php", inputs);
						alert('Credentials Saved!')
						setUpdate(previousValue => !previousValue)
						setInputs({
							id:'',
							username:'',
							password:'',
							access_lvl:''
						})
					}}>
						Save
				</button>)
		}
	}

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
							<select id='' name='access_lvl' onChange={(e) => handleChange(e)}>
								<option value='admin'>admin</option>
								<option value='secretary'>secretary</option>
								<option value='on-site'>on-site</option>
							</select>
							{ buttons(clickUpdate) }
						</div>
					</form>
					<div className='Accounts__modal__table'>
						<table className="Accounts__modal__inside__table">
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
