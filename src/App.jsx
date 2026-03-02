import { useState, useEffect } from "react";
import axios from "axios";

import Course from "./components/Course";
import Search from "./components/Search";
import AddContact from "./components/AddContact.jsx";
import Display from "./components/Display.jsx";
import phonebookService from "./services/phonebook.js";

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

  const [persons, setPersons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((data) => {
      console.log(data);
      setPersons(data);
    });
  }, []);

  const addPerson = (person) => {
    if (persons.some((item) => item.name === person.name)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    phonebookService.create(person).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
    });
  };

  const handleDeleteClicked = (id) => {
    phonebookService.deletePerson(id).then(() => {
      setPersons((currentList) =>
        currentList.filter((person) => person.id !== id),
      );
    });
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
        <AddContact onAddPersonClicked={addPerson}></AddContact>
        <h2>Numbers</h2>
        <Display
          persons={persons}
          searchText={searchText}
          onDeleteClicked={handleDeleteClicked}
        ></Display>
      </div>
    </>
  );
};

export default App;
