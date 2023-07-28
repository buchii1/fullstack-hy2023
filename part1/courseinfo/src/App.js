const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	);
};

const Content = (props) => {
	const parts = props.parts;

	return (
		<>
			{parts.map((part) => (
				<p key={part.name}>
					{part.name} {part.exercises}
				</p>
			))}
		</>
	);
};

const Total = (props) => {
	const parts = props.parts;
	const totalExercises = parts.reduce(
		(total, part) => total + part.exercises,
		0
	);

	return (
		<>
			<p>Number of exercises {totalExercises}</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			{/* <Content name={parts[0].name} exercise={parts[0].exercises} />
			<Content name={parts[1].name} exercise={parts[1].exercises} />
			<Content name={parts[2].name} exercise={parts[2].exercises} /> */}
			<Total parts={parts} />
			{/* <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
		</div>
	);
};

export default App;
