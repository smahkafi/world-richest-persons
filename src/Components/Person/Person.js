import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name, company, networth, img, title, age} = props.person
    return (
        <div className="parent col-4">
            <div className="card card-person" style={{width: "18rem;"}}>
                <div classNameName="img">
                        <img src={img} className="card-img-top rounded-circle" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Company: {company}</p>
                    <p className="card-text">Net Worth: {networth}</p>
                    <p className="card-text">Title: {title}</p>
                    <p className="card-text">Age: {age}</p>
                    <button className="rounded-pill" onClick={() => {props.handleAddNewPerson(props.person)}}>See Person</button>
                </div>
            </div>
        </div>
    );
};

export default Person;