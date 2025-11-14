import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
			<Link to="/" style={{ marginRight: 10 }}>Home</Link>
			<Link to="/login" style={{ marginRight: 10 }}>Login</Link>
			<Link to="/registration">Register</Link>
		</nav>
	);
}
