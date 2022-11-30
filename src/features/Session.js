import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: 'session',
	initialState:{
		value: {
			username: '',
			password: '',
			access_lvl: ''
		},
		login: false
	},
	reducers: {
		onLogIn: (state, action) => {
			state.value.username = action.payload.username
			state.value.password = action.payload.password
			state.value.access_lvl = action.payload.access_lvl

			if(state.value.username === '' && state.value.password === '' && state.value.access_lvl === ''){
				state.login = false
			} else state.login = true

			localStorage.setItem('dataKey', JSON.stringify(state.value));
		}
	}
})

export const {isLoggedIn, onLogIn} =
  sessionSlice.actions;
export default sessionSlice.reducer;