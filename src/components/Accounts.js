import React from 'react'
import ReactDom from 'react-dom'
import '../styles/Accounts.css'

export default function Accounts({open, onClose}) {

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
							<label>Username</label>
							<input type='text' />
							<label>Password</label>
							<input type='text' />
							<label>Access Level</label>
							<input type='text' />
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
							<tr>
								<td>1</td>
								<td>admin</td>
								<td>******</td>
								<td>admin</td>
								<button>Select</button>
							</tr>
							<tr>
								<td>2</td>
								<td>Secretary</td>
								<td>******</td>
								<td>Secretary</td>
								<button>Select</button>
							</tr>
							<tr>
								<td>3</td>
								<td>User</td>
								<td>******</td>
								<td>User</td>
								<button>Select</button>
							</tr>
						</table>
					</div>
				</div>
			</div>
  	</>,
		document.getElementById('portal')
  )
}
