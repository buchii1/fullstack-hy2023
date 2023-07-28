const Header = (props) => {
	return (
		<>
			<h1>{props.name}</h1>
		</>
	);
};

const Content = (props) => {
	console.log(props);
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
	const course = {
		name: "Half Stack application development",
		parts: [
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
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
