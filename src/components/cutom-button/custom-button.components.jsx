import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...othProps}) => {
    return (
        <button className='custom-button' {...othProps}>
        {children}
        </button>
    );
}

export default CustomButton;