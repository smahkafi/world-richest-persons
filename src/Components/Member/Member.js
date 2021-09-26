import React from 'react';
import './Member.css'

const Member = (props) => {
    const {member} = props;
    let total = 0;
    for (const person of member ){
        total = total + person.networth;
    }
    return (
        <div className="sort">
            <h3>Clickd Members: {props.member.length}</h3>
            <h3>Member total amount: ${total}<span>M</span></h3>
            <div>
                <ul>
                    {
                        member.map(name =><p> Name: {name.name} </p>)
                    }
                </ul>
            </div>
        </div>
        
    );
};

export default Member;