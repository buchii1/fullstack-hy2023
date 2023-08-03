import { useState } from "react";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const goodFeedback = () => setGood(good + 1);
	const neutralFeedback = () => setNeutral(neutral + 1);
	const badFeedback = () => setBad(bad + 1);

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={goodFeedback} text="good" />
			<Button handleClick={neutralFeedback} text="neutral" />
			<Button handleClick={badFeedback} text="bad" />
			<h1>statistics</h1>
			<Statistics stats={good} name="good" />
			<Statistics stats={neutral} name="neutral" />
			<Statistics stats={bad} name="bad" />
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
