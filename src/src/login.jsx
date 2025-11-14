import React, { useState } from "react";
import './App.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	function submit(e) {
		e.preventDefault();
		setError('');
		if (!email || !password) {
			setError('Please enter email and password.');
			return;
		}
		// placeholder: normally call API
		alert('Logged in (demo): ' + email);
	}

	return (
		<div className="form-container">
			<h2>Login</h2>
			<form onSubmit={submit}>
				<div className="form-row">
					<label>Email</label>
					<input value={email} onChange={e => setEmail(e.target.value)} type="email" />
				</div>
				<div className="form-row">
					<label>Password</label>
					<input value={password} onChange={e => setPassword(e.target.value)} type="password" />
				</div>
				{error && <div style={{color:'red', marginBottom:10}}>{error}</div>}
				<button className="btn" type="submit">Login</button>
			</form>
		</div>
	);
}
