const AddContact = ({
  addPerson,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newName}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="number"
          placeholder="Number"
          value={newNumber}
          onChange={handleNumberChange}
        ></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddContact;
