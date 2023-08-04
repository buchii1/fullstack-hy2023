import { useState } from "react";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [scores, setScores] = useState([]);

	const handleGoodFeedback = () => {
		setGood(good + 1);
		setScores(scores.concat(1));
	};

	const handleNeutralFeedback = () => {
		setNeutral(neutral + 1);
		setScores(scores.concat(0));
	};

	const handleBadFeedback = () => {
		setBad(bad + 1);
		setScores(scores.concat(-1));
	};

	let totScore = 0;
	let totPositiveNum = 0;

	for (let i = 0; i < scores.length; i++) {
		totScore += scores[i];

		if (scores[i] > 0) {
			totPositiveNum += scores[i];
		}
	}

	const total = good + neutral + bad;
	const average = totScore / scores.length;
	const positive = (totPositiveNum / scores.length) * 100;

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodFeedback} text="good" />
			<Button handleClick={handleNeutralFeedback} text="neutral" />
			<Button handleClick={handleBadFeedback} text="bad" />
			<h1>statistics</h1>
			<Statistics stats={good} name="good" />
			<Statistics stats={neutral} name="neutral" />
			<Statistics stats={bad} name="bad" />
			<Statistics stats={total} name="all" />
			<Statistics stats={average} name="average" />
			<Statistics stats={`${positive} %`} name="positive" />
		</div>
	);
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const Statistics = ({ stats, name }) => (
	<>
		<div>
			{name} {stats}
		</div>
	</>
);

export default App;
