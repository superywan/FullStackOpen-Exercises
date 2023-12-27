const Header = props => {
  const { course } = props;
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = props => {
  const { exercise } = props;
  return (
    <>
      <p>
        {exercise.name} {exercise.exercises}
      </p>
    </>
  );
};

const Content = props => {
  const { exercises } = props;
  return (
    <div>
      {exercises.map(exercise => (
        <Part exercise={exercise} />
      ))}
    </div>
  );
};

const Total = props => {
  const { exercises } = props;
  console.log(exercises);
  const totalExercisesNumber = exercises.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return <p>Number of exercises {totalExercisesNumber}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content exercises={[part1, part2, part3]} />
      <Total exercises={[part1, part2, part3]} />
    </div>
  );
};

export default App;
