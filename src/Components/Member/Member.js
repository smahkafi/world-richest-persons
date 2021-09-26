import React from 'react';
import './Member.css'

const Member = (props) => {
    const {member} = props;
    let total = 0;
    for (const person of member ){
        total = total + person.networth;
    }
    return (
        <div>
            <h3>Added: {props.member.length}</h3>
            <h3>Member amount: ${total}</h3>
        </div>
    );
};

export default Member;