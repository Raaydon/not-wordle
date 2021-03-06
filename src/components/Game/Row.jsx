import { clueClass } from "./clue";
export function Row(props) {

	const isLockedIn = props.rowState === "LockedIn";
	const letterDivs = props.cluedLetters
		.concat(Array(props.wordLength).fill({ clue: "absent", letter: "" }))
		.slice(0, props.wordLength)
		.map(({ clue, letter }, i) => {
			let letterClass = "Row-letter";

			if (isLockedIn && clue !== undefined) {
				letterClass += " " + clueClass(clue);
			}
			return (
				<div key={i} className={letterClass}>
					{letter}
				</div>
			);
		});
	let rowClass = "Row";
	if (isLockedIn) rowClass += " Row-locked-in";
	return <div className={rowClass}>{letterDivs}</div>;
}
