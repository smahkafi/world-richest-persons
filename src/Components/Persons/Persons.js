import React, { useEffect, useState } from 'react';
import './Persons.css'
import Member from '../Member/Member.js'
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [member, setMember] = useState([]);

    useEffect(() => {
        fetch('./res.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);

    const handleAddNewPerson = (person) => {
        const newMember = [...member, person];
        setMember(newMember);
    }
    return (
        <div className="person-container row d-flex">
            <div className="d-flex">
                <div className="person row col-9">
                    <h3>Available Persons: {persons.length}</h3>
                    {
                        persons.map(person => <Person key={person.key} person={person} handleAddNewPerson={handleAddNewPerson}></Person> )
                    }
                </div>
                <div className="person-details col-3">
                    <Member member={member}></Member>
                </div>
            </div>
        </div>
    );
};

export default Persons;