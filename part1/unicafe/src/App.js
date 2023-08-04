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
	for (let i = 0; i < scores.length; i++) {
		totScore += scores[i];
	}

	const total = good + neutral + bad;
	const average = totScore / scores.length;
	const positive = (good / total) * 100;

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodFeedback} text="good" />
			<Button handleClick={handleNeutralFeedback} text="neutral" />
			<Button handleClick={handleBadFeedback} text="bad" />
			<h1>statistics</h1>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				total={total}
				avg={average}
				positive={positive}
			/>
		</div>
	);
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
	const { good, neutral, bad, total, avg, positive } = props;

	return (
		<div>
			<StatisticsLine value={good} text="good" />
			<StatisticsLine value={neutral} text="neutral" />
			<StatisticsLine value={bad} text="bad" />
			<StatisticsLine value={total} text="all" />
			<StatisticsLine value={avg} text="average" />
			<StatisticsLine value={`${positive} %`} text="positive" />
		</div>
	);
};

const StatisticsLine = ({ value, text }) => (
	<>
		<div>
			{text} {value}
		</div>
	</>
);

export default App;
