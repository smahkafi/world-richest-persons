import { faArrowRight,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name, company, networth, img, title, age} = props.person
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="parent card card-person" style={{width: "18rem;"}}>
                <div classNameName="img">
                        <img src={img} className="card-img-top rounded-circle" alt="..."/>
                </div>
                <div className="card-body content">
                    <h5 className="card-title text-primary">Name: {name}</h5>
                    <p className="card-text"><span>Company: </span> {company}</p>
                    <p className="card-text"><span>Net Worth: </span>{networth}</p>
                    <p className="card-text"><span>Title: </span>{title}</p>
                    <p className="card-text"><span>Age: </span>{age}</p>
                    <button className="rounded-pill btn-primary" onClick={() => {props.handleAddNewPerson(props.person)}}> See Person    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Person;