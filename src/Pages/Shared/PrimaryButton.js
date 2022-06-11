import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn text-white font-bold btn-primary capitalize">{children}</button>
    );
};

export default PrimaryButton;