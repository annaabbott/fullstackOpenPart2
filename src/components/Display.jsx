const Display = ({ persons, searchText }) => {
  return (
    <ul>
      {persons
        .filter((person) => {
          return (
            !searchText ||
            person.name.toLowerCase().includes(searchText.toLowerCase())
          );
        })
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
    </ul>
  );
};
export default Display;
