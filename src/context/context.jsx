import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";
import { seed } from "../components/util";
import socket from "../components/socketio";

export const MainContext = createContext();

export function ContextProvider(props) {
	const [lobby, setLobby] = useState(false);
	const [code, setCode] = useState("");
	const [name, setName] = useState(localStorage.getItem("name") || "");
	const maxGuesses = 6;
	const [seedUpdate, setSeedUpdate] = useState(seed);
	const [wordLength, setWordLength] = useState(
		parseInt(localStorage.getItem("wordLength") || 5)
	);
	const [users, setUsers] = useState([]);
	const [game, setGame] = useState(false);
	const [isHost, setIsHost] = useState(false);
	const [target, setTarget] = useState("");
	const [podium, setPodium] = useState(false);
	const [grids, setGrids] = useState({});
	const [winner, setWinner] = useState(false);
	const [username, setUsername] = useState("");

	// modals

	const [gridViewModal, gridViewOpen, gridViewClose, gridViewIsOpen] =
		useModal("root", {});
	const [statsModal, statsOpen, statsClose, statsIsOpen] = useModal(
		"root",
		{}
	);
	const [messagesModal, messagesOpen, messagesClose, messagesIsOpen] =
		useModal("root", {});
	const [createGameModal, CreateGameOpen, CreateGameClose, CreateGameIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

	return (
		<MainContext.Provider
			value={{
				socket,
				lobby,
				setLobby,
				code,
				setCode,
				name,
				setName,
				maxGuesses,
				seedUpdate,
				setSeedUpdate,
				statsModal,
				statsOpen,
				statsClose,
				statsIsOpen,
				messagesModal,
				messagesOpen,
				messagesClose,
				messagesIsOpen,
				createGameModal,
				CreateGameOpen,
				CreateGameClose,
				CreateGameIsOpen,
				gridViewModal,
				gridViewOpen,
				gridViewClose,
				gridViewIsOpen,
				users,
				setUsers,
				game,
				setGame,
				isHost,
				setIsHost,
				target,
				setTarget,
				podium,
				setPodium,
				grids,
				setGrids,
				winner,
				setWinner,
				username,
				setUsername,
				wordLength,
				setWordLength,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
