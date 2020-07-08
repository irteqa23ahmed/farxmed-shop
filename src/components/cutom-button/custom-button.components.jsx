import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, googleSignIn, ...othProps}) => {
    return (
        <button className= {`${googleSignIn?'googleSignIn':''} custom-button`} {...othProps}>
        {children}
        </button>
    );
}

export default CustomButton;