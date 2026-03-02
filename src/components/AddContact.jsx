import { useState } from "react";

const AddContact = ({ onAddPersonClicked }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  async function handleAddPersonClicked(event) {
    event.preventDefault();
    if (!name) {
      alert("Name is required");
      return;
    }
    if (!number) {
      alert("Number is required");
      return;
    }

    await onAddPersonClicked({
      name,
      number,
    });

    setName("");
    setNumber("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  return (
    <>
      <h3>Add Person to Contacts</h3>
      <form onSubmit={handleAddPersonClicked}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          ></input>
          <input
            type="text"
            name="number"
            placeholder="Number"
            value={number}
            onChange={handleNumberChange}
          ></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddContact;
