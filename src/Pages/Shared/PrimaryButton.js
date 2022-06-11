import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn text-white font-bold btn-primary transition-all duration-300">{children}</button>
    );
};

export default PrimaryButton;