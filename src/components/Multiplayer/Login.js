import React, { useEffect, useState } from "react";

export default function Login(props) {
	const name = props.name;
	const setName = props.setName;
	const socket = props.socket;
	const setLogin = props.setLogin;

	useEffect(() => {
		if (name !== "") {
			localStorage.setItem("name", name);
		}
	}, [name]);

	function handleNameChange(event) {
		setName(event.target.value);
	}

	return (
		<div className="loginContainer">
			<input
				id="name-input"
				className="neumorphic-input"
				type="text"
				placeholder="Name..."
				value={name}
				onChange={handleNameChange}
			></input>
			<button
				type="button"
				className="nameSubmit"
				onClick={() => {
					socket.emit("getAllUsers");
					socket.on("getAllUsersRes", (users) => {
						var dupe = false;
						if (users.length > 0) {
							for (var i = 0; i < users.length; i++) {
								var user = users[i];
								if (user === name) {
									alert("that name is taken");
									dupe = true;
									return;
								}
							}
						}
						console.log("users: ", users);
						if (name.length > 2 && !dupe) {
							setLogin(false);
						}
					});
				}}
			>
				Submit
			</button>
		</div>
	);
}
