import { useEffect, useState } from "react";

export default function ContactForm({ contact, onSave }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  async function handleSaveClicked(event) {
    event.preventDefault();
    if (!name) {
      alert("Name is required");
      return;
    }
    if (!number) {
      alert("Number is required");
      return;
    }

    await onSave({
      id: contact ? contact.id : undefined,
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

  useEffect(() => {
    if (!contact) {
      setName("");
      setNumber("");
      return;
    }

    setName(contact.name);
    setNumber(contact.number);
  }, [contact]);

  return (
    <>
      <h3>{contact ? "Edit" : "Add"} Person to Contacts</h3>
      <form onSubmit={handleSaveClicked}>
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
          <button type="submit">{contact ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
}
