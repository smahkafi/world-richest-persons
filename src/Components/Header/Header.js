import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-info py-3">
            <h2 className="mb-3">Richest person in the global tech industry</h2>
            <h6>
            Wealthiest individuals in the technology industry worldwide as of March 2021, by net worth
            </h6>
            <h6>Richest person in the global tech industry with an estimated net worth of <span className="text-danger fw-bold">1321.2</span> million U.S. dollars.</h6>
        </div>
    );
};

export default Header;