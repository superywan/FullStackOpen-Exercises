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

export default Course;
