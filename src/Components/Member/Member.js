import React from 'react';
import './Member.css'

const Member = (props) => {
    const {member} = props;
    let total = 0;
    for (const person of member ){
        total = total + Number( person.networth);
    }
    return (
        <div className="sort">
            <h2>Member Details</h2><hr className="py-1" />
            
            <h4>Clicked Members: {props.member.length}</h4>
            <h4>Member total amount: ${total.toFixed(2)}<span>M</span></h4>
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