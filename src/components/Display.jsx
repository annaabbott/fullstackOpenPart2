const Display = ({
  personList,
  searchText,
  onEditClicked,
  onDeleteClicked,
}) => {
  if (!personList || personList.length === 0) {
    return <p>No contacts to display</p>;
  }

  return (
    <ul>
      {personList
        .filter((person) => {
          return (
            !searchText ||
            person.name.toLowerCase().includes(searchText.toLowerCase())
          );
        })
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => onEditClicked(person)}>edit</button>
            <button onClick={() => onDeleteClicked(person.id)}>delete</button>
          </li>
        ))}
    </ul>
  );
};
export default Display;
