const Display = ({ persons, searchText, onDeleteClicked }) => {
  if (!persons || persons.length === 0) {
    return <p>No contacts to display</p>;
  }

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
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => onDeleteClicked(person.id)}>delete</button>
          </li>
        ))}
    </ul>
  );
};
export default Display;
