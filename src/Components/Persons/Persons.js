import React, { useEffect, useState } from "react";
import "./Persons.css";
import Member from "../Member/Member.js";
import Person from "../Person/Person";

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch("./res.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  const handleAddNewPerson = (person) => {
    const newMember = [...member, person];
    setMember(newMember);
  };
  return (
      <div className="container">
        <h3 className="py-3 bg-warning">
          World Most {persons.length} Richest Persons
        </h3>
        <div className="d-flex row">
          <div className="col-sm-4 col-md-3 col-lg-3 m-0 p-0">
            <Member member={member}></Member>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-9 m-0 p-0">
            {persons.map((person) => (
              <Person
                key={person.key}
                person={person}
                handleAddNewPerson={handleAddNewPerson}
              ></Person>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Persons;
