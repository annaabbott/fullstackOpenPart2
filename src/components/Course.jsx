const Course = ({ course }) => {
  const totExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0,
  );

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <h2>Total Number of Exercises: {totExercises}</h2>
    </div>
  );
};
export default Course;
