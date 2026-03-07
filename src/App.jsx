import "./index.css";
import { useState, useEffect } from "react";

import Course from "./components/Course";
import Search from "./components/Search";
import ContactForm from "./components/ContactForm.jsx";
import Display from "./components/Display.jsx";
import phonebookService from "./services/phonebookApi.js";
import SuccessMsg from "./components/SuccessMsg.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";

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

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [contactToEdit, setContactToEdit] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((data) => {
      console.log(data);
      setPersons(data);
    });
  }, []);

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const addPerson = async (person) => {
    if (persons.some((item) => item.name === person.name)) {
      showErrorMessage(`${person.name} is already added to phonebook`);
      return;
    }

    try {
      const returnedPerson = await phonebookService.create(person);
      setPersons(persons.concat(returnedPerson));
      showSuccessMessage(`Added ${returnedPerson.name}`);
    } catch (error) {
      showErrorMessage("Error adding person");
    }
  };

  const updatePerson = async (person) => {
    try {
      const updatedPerson = await phonebookService.update(person.id, person);
      setPersons(
        persons.map((item) => (item.id === person.id ? updatedPerson : item)),
      );
      setContactToEdit(null);
      showSuccessMessage(`Updated ${updatedPerson.name}`);
    } catch (error) {
      showErrorMessage("Error updating person");
    }
  };

  const handleEditClicked = (person) => {
    console.log("Edit clicked for person:", person);
    setContactToEdit(person);
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
        <SuccessMsg message={successMessage} />
        <ErrorMsg message={errorMessage} />
        <Search searchText={searchText} setSearchText={setSearchText} />
        <ContactForm
          contact={contactToEdit}
          onSave={contactToEdit ? updatePerson : addPerson}
        ></ContactForm>
        <h2>Numbers</h2>
        <Display
          personList={persons}
          searchText={searchText}
          onEditClicked={handleEditClicked}
          onDeleteClicked={handleDeleteClicked}
        ></Display>
      </div>
    </>
  );
};

export default App;
