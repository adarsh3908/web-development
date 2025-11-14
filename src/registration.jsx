import React, { useState } from "react";
import './App.css';

export default function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');

	function submit(e) {
		e.preventDefault();
		setError('');
		if (!name || !email || !password) {
			setError('Please fill all fields.');
			return;
		}
		if (password !== confirm) {
			setError('Passwords do not match.');
			return;
		}
		alert('Registered (demo): ' + name + ' — ' + email);
	}

	return (
		<div className="form-container">
			<h2>Register</h2>
			<form onSubmit={submit}>
				<div className="form-row">
					<label>Full name</label>
					<input value={name} onChange={e => setName(e.target.value)} />
				</div>
				<div className="form-row">
					<label>Email</label>
					<input value={email} onChange={e => setEmail(e.target.value)} type="email" />
				</div>
				<div className="form-row">
					<label>Password</label>
					<input value={password} onChange={e => setPassword(e.target.value)} type="password" />
				</div>
				<div className="form-row">
					<label>Confirm Password</label>
					<input value={confirm} onChange={e => setConfirm(e.target.value)} type="password" />
				</div>
				{error && <div style={{color:'red', marginBottom:10}}>{error}</div>}
				<button className="btn" type="submit">Create account</button>
			</form>
		</div>
	);
}
