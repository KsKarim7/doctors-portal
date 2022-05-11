import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn uppercase font-bold  text-lime-50 btn-primary bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;