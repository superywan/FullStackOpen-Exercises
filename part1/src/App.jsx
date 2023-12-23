const Header = props => {
  const { course } = props;
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = props => {
  const { exercises } = props;
  return (
    <div>
      {exercises.map(exercise => (
        <p>
          {exercise.name} {exercise.number}
        </p>
      ))}
    </div>
  );
};

const Total = props => {
  const { exercises } = props;
  console.log(exercises);
  const totalExercisesNumber = exercises.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.number;
  }, 0);

  return <p>Number of exercises {totalExercisesNumber}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const exercises = [
    { name: "Fundamentals of React", number: 10 },
    { name: "Using props to pass data", number: 7 },
    { name: "State of a component", number: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
