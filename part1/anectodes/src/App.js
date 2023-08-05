import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	const [point, setPoint] = useState(Array(anecdotes.length).fill(0));

	const handleQuoteClick = () => {
		const randIndex = Math.floor(Math.random() * anecdotes.length);
		setSelected(randIndex);
	};

	const handleVotePoint = () => {
		const copyPoints = [...point];
		copyPoints[selected] += 1;
		setPoint(copyPoints);
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p>has {point[selected]} votes</p>
			<Button handleClick={handleVotePoint} text="vote" />
			<Button handleClick={handleQuoteClick} text="next anecdote" />
			<DisplayHighestVote points={point} anecdotes={anecdotes} />
		</div>
	);
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const DisplayHighestVote = ({ points, anecdotes }) => {
	const calcHighestVote = () => {
		let highest = 0;
		let range = 0;
		for (let i = 0; i < points.length; i++) {
			if (points[i] > highest) {
				highest = points[i];
				range = i;
			}
		}
		return range;
	};

	return (
		<>
			<h1>Anecdote with most votes</h1>
			<p>{anecdotes[calcHighestVote()]}</p>
		</>
	);
};

export default App;
