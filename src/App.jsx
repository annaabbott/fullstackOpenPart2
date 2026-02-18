import { useState } from "react";

import Course from "./components/Course";
import Search from "./components/Search";
import AddContact from "./components/AddContact.jsx";
import Display from "./components/Display.jsx";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
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
          name: "Middleware",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    // const name = event.target;
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <>
      <div>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
      <div>
        <h2>Phonebook</h2>

        <Search searchText={searchText} setSearchText={setSearchText} />
        <h3>Add Person to Contacts</h3>
        <AddContact></AddContact>
        <h2>Numbers</h2>
        <Display persons={persons} searchText={searchText}></Display>
      </div>
    </>
  );
};

export default App;
