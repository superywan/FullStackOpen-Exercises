const Part = ({ part }) => {
  return (
    <p id={part.id}>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const total = parts.reduce((acc, current) => acc + current.exercises, 0);

  return (
    <div>
      {parts.map(part => (
        <Part part={part} />
      ))}
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course => {
        return (
          <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Course courses={courses} />
    </div>
  );
};

export default App;
